// ResultLeft.jsx
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ResultLeft({ handleToggle, matchStats, handleChangeMatch }) {
  console.log(matchStats);
  return (
    <div className="pl-24 relative pt-24 result-bg w-full text-white w-[65%] justify-center  flex  items-end md:items-end space-y-6">
      {/* Left Arrow */}
      <button
        className="absolute left-[10%] top-[50%] -ml-20 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        onClick={(e) => {
          handleChangeMatch(-1);
        }}
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      <div className="flex py-8 flex-col tracking-wider justify-center items-center p-4">
        {/* Header Text */}
        <div className="text-center md:text-left mb-2">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Enjoy football in
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            the best leagues
          </h2>
        </div>
        {matchStats.match_id == 1 && (
          <span className="bg-red-500 cursor-pointer text-base  flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
            Live{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.46689 4.39207C5.75949 4.68526 5.75902 5.16013 5.46583 5.45273C3.78722 7.128 2.75 9.44218 2.75 12C2.75 14.5878 3.81163 16.9262 5.52503 18.6059C5.82082 18.8959 5.82554 19.3707 5.53557 19.6665C5.24561 19.9623 4.77076 19.967 4.47497 19.677C2.48564 17.7269 1.25 15.0071 1.25 12C1.25 9.02783 2.45721 6.33616 4.40623 4.39102C4.69941 4.09842 5.17429 4.09889 5.46689 4.39207ZM18.6164 4.46446C18.9122 4.17449 19.387 4.17921 19.677 4.475C21.5771 6.41326 22.75 9.07043 22.75 12C22.75 14.9645 21.5491 17.6499 19.609 19.5938C19.3164 19.887 18.8415 19.8875 18.5484 19.5949C18.2552 19.3023 18.2547 18.8274 18.5473 18.5342C20.2182 16.86 21.25 14.5512 21.25 12C21.25 9.47873 20.2422 7.1943 18.6059 5.52507C18.3159 5.22928 18.3206 4.75443 18.6164 4.46446ZM8.30923 7.48757C8.59226 7.79001 8.57652 8.26462 8.27408 8.54765C7.32517 9.43564 6.75 10.6502 6.75 11.9822C6.75 13.3297 7.33869 14.5573 8.30756 15.4479C8.61251 15.7282 8.63248 16.2026 8.35216 16.5076C8.07185 16.8125 7.59739 16.8325 7.29244 16.5522C6.03967 15.4006 5.25 13.7824 5.25 11.9822C5.25 10.203 6.02148 8.60128 7.24916 7.45242C7.5516 7.16939 8.02621 7.18513 8.30923 7.48757ZM15.7429 7.52559C16.0292 7.22626 16.5039 7.21571 16.8033 7.50202C18.0005 8.64714 18.75 10.2286 18.75 11.9822C18.75 13.7568 17.9825 15.3548 16.7604 16.503C16.4586 16.7867 15.9839 16.7719 15.7003 16.47C15.4167 16.1681 15.4315 15.6935 15.7333 15.4099C16.6778 14.5225 17.25 13.3108 17.25 11.9822C17.25 10.6692 16.6911 9.47046 15.7664 8.58599C15.4671 8.29968 15.4566 7.82492 15.7429 7.52559Z"
                  fill="#fff"
                />
              </g>
              <path
                d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                fill="#fff"
              />
            </svg>
          </span>
        )}
        {/* Match Details */}
        <div className="flex flex-col items-center space-y-4 mt-2">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <img
                src={matchStats.logo[0].team_a} // Replace with actual image path
                alt="Manchester United"
                className="w-16  mx-auto"
              />
              <p className="text-sm mt-2">{matchStats.teams[0].team_a}</p>
            </div>

            <div className="flex flex-col px-4 items-center">
              <p className="text-5xl font-bold mt-2 text-center min-w-[150px] mx-auto">
                {matchStats.score[0].team_a} - {matchStats.score[0].team_b}
              </p>
              <div className="flex items-center space-x-1 text-yellow-400 mt-2">
                <span className="text-lg font-bold">⚽</span>
                {matchStats.match_id == 1 ? (
                  <p className="text-base live-text-animation">72'</p>
                ) : (
                  <p className="text-base text-white">FT</p>
                )}
              </div>
            </div>

            <div className="text-center">
              <img
                src={matchStats.logo[0].team_b} // Replace with actual image path
                alt="Manchester City"
                className="w-16  mx-auto"
              />
              <p className="text-sm mt-2">{matchStats.teams[0].team_b}</p>
            </div>
          </div>
        </div>

        <hr className="w-full border-gray-400 bg-gray-400 my-4 "></hr>
        {/* Stadium Location */}
        <div className="text-gray-400 text-sm ">
          <p>📍 {matchStats.location}</p>
        </div>

        {/* Match Highlights Video */}
        <div className="flex relative mt-3 items-center flex-col sm:h-[285px] sm:w-[450px] lg:h-[200px] lg:w-[300px] relative border-sm">
          <div className=" flex justify-center items-center relative h-full w-full rounded-b-sm">
            <a
              href="#"
              className="relative rounded-full flex justify-center items-center cursor-pointer yt-img"
            >
              <img
                className="absolute top-50 left-50 z-[10]"
                width="55px"
                height="55px"
                alt="youtube-button"
                src="\assets\images\play.png"
              />
              <img
                className="img-responsive rounded-md blur-[1px] z-[0]"
                alt="looker studio demo video"
                width="500px"
                height="450px"
                src="\assets\images\match1\fulvsbrent.webp"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex  justify-end items-end">
        {/* Second Player Image */}
        <img
          src={matchStats.captain[0].team_a} // Replace with actual image path
          alt="Player 2"
          className="  object-cover z-20 ml-4 relative h-[500px] left-4"
        />
        {/* First Player Image */}
        <img
          src={matchStats.captain[0].team_b} // Replace with actual image path
          alt="Player 1"
          className="  object-cover  z-10 -ml-[160px] h-[540px]"
        />
      </div>
      <button
        className="absolute right-[10%] top-[46%]  z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        onClick={(e) => {
          handleChangeMatch(+1);
        }}
      >
        <FaChevronRight className="text-gray-700" />
      </button>
      <button
        type="button"
        onClick={handleToggle}
        className="text-white gap-2 absolute top-0 right-6 bg-blue-700 focus:outline-none outline-none hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2  dark:hover:bg-gray-700 "
      >
        Show Match Stats
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
}

export default ResultLeft;
