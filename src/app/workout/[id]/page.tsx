import SaveButton from "@/app/component/fitLogDetailsButton/SaveButton";
import TodaysButton from "@/app/component/fitLogDetailsButton/TodaysButton";
import { IWorkout } from "@/types/page";
import Image from "next/image";
import { notFound } from "next/navigation";

const getFitLog = async (): Promise<IWorkout[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

type ParasProps = {
  params: Promise<{ id: string }>;
};

const Page = async ({ params }: ParasProps) => {
  const { id } = await params;
  const data = await getFitLog();

  const workout = data.find((item) => String(item.id) === id);

  if (!workout) {
    notFound();
  }

  const {
    name,
    description,
    image,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    instructions,
  } = workout;

  const stats = [
    ["Equipment", equipment],
    ["Difficulty", difficulty],
    ["Sets", sets],
    ["Reps", reps],
    [`"Duration", ${duration} min`],
    [`"Calories", ${caloriesBurned} kcal`],
  ];

  return (
    <main className="min-h-screen bg-[#0b0b0c] px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[28px] border border-zinc-800 bg-[#141416] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[450px] bg-zinc-950 lg:min-h-[650px]">
            {image && (
              <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <span className="absolute bottom-6 left-6 rounded-full bg-lime-400 px-4 py-2 text-xs font-black uppercase text-black">
              {difficulty}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              {/* Muscle Groups */}
              <div className="mb-4 flex flex-wrap gap-2">
                {muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-bold text-lime-400"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-black uppercase md:text-4xl">
                {name}
              </h1>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {description}
              </p>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-800">
                {stats.map(([title, value]) => (
                  <div key={title} className="bg-[#121214] p-3.5">
                    <p className="text-[10px] font-bold uppercase text-zinc-500">
                      {title}
                    </p>

                    <p className="mt-1 text-sm font-bold">{value}</p>
                  </div>
                ))}
              </div>

              {/* Instructions */}
              <div className="mt-6">
                <h3 className="mb-3 text-xs font-black uppercase text-zinc-300">
                  Instructions
                </h3>

                <ol className="list-inside list-decimal space-y-2 text-sm text-zinc-400">
                  {instructions?.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-3 border-t border-zinc-800 pt-6">
              <TodaysButton workoutDetails={workout} />
              <SaveButton workoutDetails={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;