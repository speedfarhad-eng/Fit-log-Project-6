import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full bg-base-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="hero mx-auto min-h-[70vh] max-w-7xl overflow-hidden rounded-3xl bg-[#0b0b0b] text-white">
        <div className="hero-content w-full flex-col gap-10 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row-reverse lg:justify-between lg:px-16 lg:py-20">
          <div className="w-full max-w-md">
            <Image
              src="/assets/banner.png"
              alt="FitLog workout"
              width={500}
              height={500}
              priority
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-4 text-sm font-bold tracking-[0.25em] text-lime-400 sm:text-base">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              TRAIN WITH
              <span className="text-lime-400"> INTENT.</span>
              <br />
              LOG EVERY SET.
            </h1>

            <p className="mx-auto max-w-xl py-6 text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
              FitLog is your simple workout companion. Pick a workout, add it to
              todays plan, save your favorites, and track your fitness journey.
            </p>

            <Link href="/">
              <button className="btn h-12 border-0 bg-lime-400 px-7 font-bold text-black transition-all duration-300 hover:bg-lime-300 hover:-translate-y-1">
                BROWSE WORKOUTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
