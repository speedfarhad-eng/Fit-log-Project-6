"use client";
import { IWorkout } from "@/types/page";
import { createContext, useContext, useState, type ReactNode } from "react";
import { toast } from "react-toastify";




type FitlogContextType = {
  plan: IWorkout[];
  saved: IWorkout[];
  togglePlan: (item: IWorkout) => void;
  toggleSaved: (item: IWorkout) => void;
};

export const FitlogContext = createContext<FitlogContextType | null>(null);

const FitlogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const togglePlan = (item: IWorkout) => {
    if (plan.some((i) => i.id === item.id)) {
      setPlan(plan.filter((i) => i.id !== item.id));
      return;
    }

    if (plan.length >= 5) {
      toast.error("Maximum 5 workouts.");
      return;
    }

    setPlan([...plan, item]);
  };

  const toggleSaved = (item: IWorkout) => {
    if (saved.some((i) => i.id === item.id)) {
      setSaved(saved.filter((i) => i.id !== item.id));
      return;
    }

    setSaved([...saved, item]);
  };

  return (
    <FitlogContext.Provider value={{ plan, saved, togglePlan, toggleSaved }}>
      {children}
    </FitlogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitlogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitlogProvider");
  }

  return context;
};

export default FitlogProvider;
