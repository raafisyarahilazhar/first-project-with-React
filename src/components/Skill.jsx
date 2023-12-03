import React from "react";
import RadialBarChart from "./RadialBarChart";

export default function Skill() {
  return (
    <div className="text-center">
      <h2 className="text-xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white mb-8">Kemampuan</h2>
      <div className="grid grid-cols-4 gap-4 py-10">
        <RadialBarChart seriesData={[67]} chartTitle="HTML" />
        <RadialBarChart seriesData={[80]} chartTitle="Bootstrap" />
        <RadialBarChart seriesData={[89]} chartTitle="PHP" />
        <RadialBarChart seriesData={[75]} chartTitle="LARAVEL" />
        {/* <div className="chart">
          <RadialBarChart2 />
        </div>
        <div className="chart">
          <RadialBarChart3 />
        </div>
        <div className="chart">
          <RadialBarChart4 />
        </div> */}
      </div>
    </div>
  );
}
