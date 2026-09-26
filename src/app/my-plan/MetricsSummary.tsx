import React from "react";

interface MetricsSummaryProps {
  totalExercises: number;
  totalMinutes: number;
  totalCalories: number;
}

export default function MetricsSummary({
  totalExercises,
  totalMinutes,
  totalCalories,
}: MetricsSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="stats shadow bg-[#181d26] border border-gray-800 text-white">
        <div className="stat">
          <div className="stat-title text-gray-400">Exercises</div>
          <div className="stat-value text-warning">{totalExercises}</div>
        </div>
      </div>

      <div className="stats shadow bg-[#181d26] border border-gray-800 text-white">
        <div className="stat">
          <div className="stat-title text-gray-400">Minutes</div>
          <div className="stat-value text-white">{totalMinutes}</div>
        </div>
      </div>

      <div className="stats shadow bg-[#181d26] border border-gray-800 text-white">
        <div className="stat">
          <div className="stat-title text-gray-400">Calories</div>
          <div className="stat-value text-white">{totalCalories}</div>
        </div>
      </div>
    </div>
  );
}