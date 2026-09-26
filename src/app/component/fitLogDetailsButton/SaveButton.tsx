"use client";

import { useFitLog } from "@/FitlogContext/page";
import { IWorkout } from "@/types/page";
import { toast } from "react-toastify";

type Props = {
  workoutDetails: IWorkout;
};

const SaveButton = ({ workoutDetails }: Props) => {
  const { saved, toggleSaved } = useFitLog();

  const handleSave = () => {
    if (saved.some((item) => item.id === workoutDetails.id)) {
      toast.info("Workout is already saved");
      return;
    }

    toggleSaved(workoutDetails);
    toast.success("Workout saved successfully");
  };

  return (
    <button onClick={handleSave}>
      Save Fitlog there
    </button>
  );
};

export default SaveButton;