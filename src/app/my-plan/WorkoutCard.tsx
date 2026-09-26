import React from "react";
import Link from "next/link";
import {
  FiClock,
  FiActivity,
  FiStar,
  FiTrash2,
  FiCheckCircle,
  FiEye,
} from "react-icons/fi";
import { IWorkout } from "@/types/page";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
  isDone: boolean;
  onToggleDone: (id: number) => void;
  onRemove: (item: IWorkout) => void;
}

export default function WorkoutCard({
  workout,
  isDone,
  onToggleDone,
  onRemove,
}: WorkoutCardProps) {
  console.log("Workout Image:", workout.image);
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between bg-[#12161f] border ${
        isDone ? "border-success/50 bg-success/5" : "border-gray-800"
      } rounded-xl p-4 gap-4 transition-all hover:border-gray-700`}
    >
  
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
            <Image
              src={workout.image || "/placeholder.jpg"}
              alt={workout.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2
            className={`font-bold text-base md:text-lg uppercase tracking-wide ${
              isDone ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {workout.name || workout.name}
          </h2>
          <p className="text-gray-400 text-xs md:text-sm mt-0.5">
            {workout.equipment || workout.equipment}
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-6 text-sm text-gray-300 w-full md:w-auto justify-start md:justify-center">
        <div className="flex items-center gap-1.5">
          <FiClock className="text-gray-400" />
          <span>{workout.duration} min</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiActivity className="text-warning" />
          <span>{workout.caloriesBurned} kcal</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FiStar className="text-yellow-400 fill-yellow-400" />
          <span>{workout.rating}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm btn-ghost text-gray-300 hover:text-white"
        >
          <FiEye /> View
        </Link>

        <button
          onClick={() => onToggleDone(workout.id)}
          className={`btn btn-sm ${
            isDone
              ? "btn-success text-white"
              : "btn-warning text-black font-medium"
          }`}
        >
          <FiCheckCircle /> {isDone ? "Done" : "Mark as Done"}
        </button>

        <button
          onClick={() => onRemove(workout)}
          className="btn btn-sm btn-square btn-error btn-outline"
          title="Remove"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
