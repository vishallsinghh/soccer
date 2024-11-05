import React from "react";
import { useState } from "react";
import matchData from "../data/matchData.json";

const ResultRight = ({ showStats, matchStats }) => {
  console.log(matchData[0].stats);
  return (
    <div
      className={
        showStats
          ? " w-[35%] duration-300 opacity-1 flex flex-col  items-center bg-[#0f1621] p-4 border-white h-auto"
          : "opacity-0 duration-300  w-[0]"
      }
    >
      <h2 className="text-xl font-semibold text-gray-800 bg-yellow-300 px-6 text-base w-fit mx-auto py-2 rounded-full text-center">
        Match Status
      </h2>
      <div className="flex items-center gap-8 mt-6">
        <div className="text-center">
          <img
            src={matchStats.logo[0].team_a} // Replace with actual image path
            alt="Manchester United"
            className="w-16  "
          />
        </div>

        <div className="text-center">
          <img
            src={matchStats.logo[0].team_b} // Replace with actual image path
            alt="Manchester City"
            className="w-16 "
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-3 ">
        {matchStats.stats.map((match, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-white gap-1 "
          >
            {match.title}
            <div className="flex gap-4 justify-between items-center">
              <span>{match.team_a}</span>
              <div className="flex gap-2">
                <div className={`progress-container `}>
                  <div
                    className={`progress2 progress-moved w-[${
                      match?.team_a * 10
                    }px]`}
                  >
                    <div className="progress-bar2 "></div>
                  </div>
                </div>
                <div className={`progress-container2 `}>
                  <div
                    className={`progress22 progress-moved2 w-[${match?.team_b}0px]`}
                  >
                    <div className="progress-bar22"></div>
                  </div>
                </div>
              </div>
              <span>{match.team_b}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultRight;
