"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { IWorkout } from "@/types/page";
import { useFitLog } from "@/FitlogContext/page";
import MetricsSummary from "./MetricsSummary";
import WorkoutCard from "./WorkoutCard";

export default function MyPlanPage() {
  const { plan, saved, togglePlan } = useFitLog();
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [loading, setLoading] = useState<boolean>(true);
  const [doneWorkouts, setDoneWorkouts] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string>("Duration");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const currentList =
    activeTab === "today"
      ? Array.isArray(plan)
        ? plan
        : []
      : Array.isArray(saved)
        ? saved
        : [];

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Duration") {
      return (a.duration || 0) - (b.duration || 0);
    } else if (sortBy === "Calories") {
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    } else if (sortBy === "Rating") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  const totalExercises = sortedList.length;
  const totalMinutes = sortedList.reduce(
    (acc, curr) => acc + (curr.duration || 0),
    0,
  );
  const totalCalories = sortedList.reduce(
    (acc, curr) => acc + (curr.caloriesBurned || 0),
    0,
  );

  const toggleDone = (id: number) => {
    if (doneWorkouts.includes(id)) {
      setDoneWorkouts(doneWorkouts.filter((item) => item !== id));
    } else {
      setDoneWorkouts([...doneWorkouts, id]);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-white">
        <span className="loading loading-spinner loading-lg text-warning"></span>
        <p className="ml-3 text-lg font-medium">Loading workouts…</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-wider uppercase">
          MY PLAN
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <MetricsSummary
        totalExercises={totalExercises}
        totalMinutes={totalMinutes}
        totalCalories={totalCalories}
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-gray-800 pb-4">
      
        {/*DAisy Khala Tabs */}
        <div
          role="tablist"
          className="tabs tabs-boxed bg-[#12161f] p-1 rounded-lg border border-gray-800"
        >
          <a
            role="tab"
            onClick={() => setActiveTab("today")}
            className={`tab text-sm font-medium transition-all ${
              activeTab === "today"
                ? "tab-active bg-[#1f2633] text-warning"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </a>
          <a
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab text-sm font-medium transition-all ${
              activeTab === "saved"
                ? "tab-active bg-[#1f2633] text-warning"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved
          </a>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#181d26] border border-gray-700 text-white text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-warning"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

      {sortedList.length === 0 ? (
        <div className="text-center py-16 bg-[#181d26] rounded-xl border border-dashed border-gray-800 p-8">
          <h3 className="text-xl font-bold mb-2 text-gray-200">
            NOTHING HERE YET
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/" className="btn btn-warning text-black font-semibold">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {sortedList.map((workout: IWorkout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              isDone={doneWorkouts.includes(workout.id)}
              onToggleDone={toggleDone}
              onRemove={togglePlan}
            />
          ))}
        </div>
      )}
    </div>
  );
}
