import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <Dumbbell className="mx-auto mb-5 w-12 h-12 text-[#ccff00]" />

        <h1 className="text-8xl font-black">
          4<span className="text-[#ccff00]">0</span>4
        </h1>

        <h2 className="mt-3 text-2xl font-bold uppercase">
          Workout list Not Found
        </h2>

        <p className="mt-2 text-zinc-500">
          This workout doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 bg-[#ccff00] text-black px-5 py-3 rounded-lg font-bold hover:bg-[#b8e600]"
        >
          <ArrowLeft size={18} />
          Back workout Home 
        </Link>
      </div>
    </main>
  );
};

export default NotFound;