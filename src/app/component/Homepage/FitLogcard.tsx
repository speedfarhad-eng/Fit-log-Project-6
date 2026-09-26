import { IWorkout } from "@/types/page";
import Image from "next/image";
import Link from "next/link";

interface FitLogCardProps {
  fitlog: IWorkout; 
}

const FitLogCard = ({ fitlog }:FitLogCardProps) => {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = fitlog;

  return (
  
    <Link href={`/workout/${id}`} className="group">
  <div className="bg-[#18181b] border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">

   
    <div className="relative  `aspect-4/3` bg-zinc-900 overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

   
    <div className="p-3 sm:p-4 md:p-5 flex flex-col justify-between flex-1 gap-3 sm:gap-4">

      <div className="space-y-2 sm:space-y-3">

   
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="bg-[#ccff00] text-black font-extrabold text-[8px] sm:text-[10px] tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

    
        <h3 className="text-white font-black text-sm sm:text-base md:text-lg tracking-wide uppercase line-clamp-1 group-hover:text-[#ccff00] transition-colors">
          {name}
        </h3>

     
        <p className="text-zinc-400 text-[10px] sm:text-xs font-medium line-clamp-1">
          {equipment || "No equipment required"}
        </p>
      </div>


      <div className="pt-2 sm:pt-3 border-t border-zinc-800/80 flex items-center justify-between text-zinc-400 text-[10px] sm:text-xs font-medium">

    
        <div className="flex items-center gap-1">
          <span>⏱</span>
          <span>{duration || 0} min</span>
        </div>

   
        <div className="flex items-center gap-1">
          <span>🔥</span>
          <span>{caloriesBurned || 0} kcal</span>
        </div>

    
        <div className="flex items-center gap-1">
          <span className="text-[#ccff00]">★</span>
          <span className="text-white font-semibold">
            {rating || "0"}
          </span>
        </div>

      </div>
    </div>
  </div>
</Link>
  );
};

export default FitLogCard;