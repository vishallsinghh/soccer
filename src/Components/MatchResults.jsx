import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ResultLeft from "./ResultLeft";
import ResultRight from "./ResultRight";
import CardSlider from "./CardSlider";
import { Standings1 } from "./Standings";
import matchData from "../data/matchData.json";

const MatchResults = () => {
  const [stats, setStats] = useState(true);
  const [currentMatch, setCurrentMatch] = useState(0);
  const handleToggleParent = () => {
    setStats(!stats);
  };
  const handleChangeMatch = (n) => {
    if (currentMatch == 0 && n == -1 && currentMatch == 2 && n == +1) {
      setCurrentMatch(0);
    } else {
      setCurrentMatch(currentMatch + n);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mt-[75px]">
      <div className="flex items-center justify-center bg-yellow-300 p-1.5 w-full">
        <span className="bg-gray-300 p-2.5 rounded-full">
          <FaChevronLeft className="text-gray-600 hover:text-black duration-300 cursor-pointer" />
        </span>
        <div className="flex px-4 mx-4 gap-4 justify-center items-center">
          <img src="/assets/images/primierLeague.png" width={"40px"} />
          <h1 className=" text-lg  font-semibold text-gray-700">
            Premier League
          </h1>
          <a href="#standings" className="text-sm text-gray-600 underline">
            View Standings
          </a>
        </div>
        <span className="bg-gray-300 p-2.5 rounded-full">
          <FaChevronRight className="text-gray-600 hover:text-black duration-300 cursor-pointer" />
        </span>
      </div>
      <div className="w-full flex bg-gray-800">
        <ResultLeft
          handleToggle={handleToggleParent}
          matchStats={matchData[currentMatch]}
          handleChangeMatch={handleChangeMatch}
        />
        <ResultRight showStats={stats} matchStats={matchData[currentMatch]} />
      </div>
      <div className="flex w-full my-12">
        <CardSlider
          handleChangeMatch={handleChangeMatch}
          currentMatch={currentMatch}
        />
      </div>
      <Standings1 />
    </div>
  );
};

export default MatchResults;
