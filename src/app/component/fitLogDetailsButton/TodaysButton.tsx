"use client";

import { useFitLog } from "@/FitlogContext/page";
import { IWorkout } from "@/types/page";

import { toast } from "react-toastify";

interface TodaysProps  {
  workoutDetails: IWorkout;
};

const TodaysButton = ({ workoutDetails }: TodaysProps) => {
  const { plan, togglePlan } = useFitLog();

  const handleAdd = () => {
    if (plan.some((item) => item.id === workoutDetails.id)) {
      toast.info("Workout is already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Maximum 5 workouts.");
      return;
    }

    togglePlan(workoutDetails);
    toast.success("Workout added successfully");
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-[#ccff00] text-black font-extrabold text-xs uppercase px-5 py-3 rounded-xl hover:bg-[#b8e600] transition-colors cursor-pointer"
    >
      Add to todays plan
    </button>
  );
};

export default TodaysButton;