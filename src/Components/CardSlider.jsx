import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardSlider = ({ handleChangeMatch, currentMatch }) => {
  const sliderRef = useRef(null);

  // Function to slide left
  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -400, // Adjust scroll amount to fit your needs
      behavior: "smooth",
    });
  };

  // Function to slide right
  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 400, // Adjust scroll amount to fit your needs
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-[80%] px-6 mx-auto flex justify-center items-center slider-container">
      {/* Left Arrow */}
      <button
        className="absolute left-0 -ml-20 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        onClick={(e) => {
          handleChangeMatch(-1);
          slideLeft();
        }}
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar space-x-8 p-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-10 ">
          <div
            className={
              currentMatch == 0
                ? `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start scale-[1.1] shadow-xl duration-300 `
                : `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start duration-300`
            }
          >
            <div className=" min-w-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="flex relative py-12 px-8 rounded-xl items-center justify-between bg-gradient-to-r from-orange-500 to-teal-500 p-4">
                <span className="absolute top-0 right-0 mr-4 text-white bg-red-500 cursor-pointer text-base my-2 flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
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
                      ></path>
                    </g>
                    <path
                      d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                <div className=" flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/fulham-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    FLM
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-white">
                  VS
                </div>
                <div className="flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/brentford-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    BFD
                  </span>
                </div>
                <div className="flex absolute bottom-0 rounded-t-xl bg-white w-fit mx-auto left-[40%] items-center justify-between px-4 py-3 ">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">8:30PM</p>
                    <p className="text-xs text-gray-500">PCT</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-5">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    Boiling Rock Arena
                  </p>
                  <p className="text-xs text-gray-500">Venue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    TMT Sports
                  </p>
                  <p className="text-xs text-gray-500">Watch on</p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between rounded-b-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Premier League Tournament
                </p>
                <p className="text-sm text-gray-500">10/17/24</p>
              </div>
            </div>
          </div>
          <div
            className={
              currentMatch == 1
                ? `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start scale-[1.1] shadow-xl duration-300 `
                : `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start duration-300`
            }
          >
            <div className=" min-w-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="flex relative py-12 px-8 rounded-xl items-center justify-between bg-gradient-to-r from-orange-500 to-teal-500 p-4">
                <span className="absolute top-0 left-0 ml-4 text-black bg-yellow-100 cursor-pointer text-base my-2 flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
                  Won{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.3375 19C5.815 19 5.33219 18.7141 5.07094 18.25C4.80969 17.7859 4.80969 17.2141 5.07094 16.75C5.33219 16.2859 5.815 16 6.3375 16H17.0625C17.8702 16 18.525 16.6716 18.525 17.5C18.525 18.3284 17.8702 19 17.0625 19H6.3375Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.875 8C6.10837 10.228 8.83837 13.569 11.7 8C14.5616 13.569 17.2916 10.228 18.525 8L17.16 16H6.24L4.875 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7 8C10.8923 8 10.2375 7.32843 10.2375 6.5C10.2375 5.67157 10.8923 5 11.7 5C12.5078 5 13.1625 5.67157 13.1625 6.5C13.1625 6.89782 13.0085 7.27936 12.7342 7.56066C12.4599 7.84196 12.0879 8 11.7 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.525 8C17.9866 8 17.55 7.55228 17.55 7C17.55 6.44772 17.9866 6 18.525 6C19.0635 6 19.5 6.44772 19.5 7C19.5 7.26522 19.3973 7.51957 19.2145 7.70711C19.0316 7.89464 18.7836 8 18.525 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.87502 8C4.33655 8 3.90002 7.55228 3.90002 7C3.90002 6.44772 4.33655 6 4.87502 6C5.4135 6 5.85002 6.44772 5.85002 7C5.85002 7.26522 5.7473 7.51957 5.56445 7.70711C5.38161 7.89464 5.13361 8 4.87502 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className=" flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/fulham-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    TTM
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-white">
                  4 - 1
                </div>
                <div className="flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/brentford-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    AST
                  </span>
                </div>
                <div className="flex absolute bottom-0 rounded-t-xl bg-white w-fit mx-auto left-[40%] items-center justify-between px-4 py-3 ">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">4:30PM</p>
                    <p className="text-xs text-gray-500">PCT</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-5">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    Sweden Play Arena
                  </p>
                  <p className="text-xs text-gray-500">Venue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    TMT Sports
                  </p>
                  <p className="text-xs text-gray-500">Watch on</p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between rounded-b-lg">
                <p className="text-sm font-semibold text-gray-700">
                  World League Tournament
                </p>
                <p className="text-sm text-gray-500">10/17/24</p>
              </div>
            </div>
          </div>
          <div
            className={
              currentMatch == 2
                ? `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start scale-[1.1] shadow-xl duration-300 `
                : `flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start duration-300`
            }
          >
            <div className=" min-w-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="flex relative py-12 px-8 rounded-xl items-center justify-between bg-gradient-to-r from-orange-500 to-teal-500 p-4">
                <span className="absolute top-0 right-0 mr-4 text-black bg-yellow-100 cursor-pointer text-base my-2 flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
                  Won{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.3375 19C5.815 19 5.33219 18.7141 5.07094 18.25C4.80969 17.7859 4.80969 17.2141 5.07094 16.75C5.33219 16.2859 5.815 16 6.3375 16H17.0625C17.8702 16 18.525 16.6716 18.525 17.5C18.525 18.3284 17.8702 19 17.0625 19H6.3375Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.875 8C6.10837 10.228 8.83837 13.569 11.7 8C14.5616 13.569 17.2916 10.228 18.525 8L17.16 16H6.24L4.875 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7 8C10.8923 8 10.2375 7.32843 10.2375 6.5C10.2375 5.67157 10.8923 5 11.7 5C12.5078 5 13.1625 5.67157 13.1625 6.5C13.1625 6.89782 13.0085 7.27936 12.7342 7.56066C12.4599 7.84196 12.0879 8 11.7 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.525 8C17.9866 8 17.55 7.55228 17.55 7C17.55 6.44772 17.9866 6 18.525 6C19.0635 6 19.5 6.44772 19.5 7C19.5 7.26522 19.3973 7.51957 19.2145 7.70711C19.0316 7.89464 18.7836 8 18.525 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.87502 8C4.33655 8 3.90002 7.55228 3.90002 7C3.90002 6.44772 4.33655 6 4.87502 6C5.4135 6 5.85002 6.44772 5.85002 7C5.85002 7.26522 5.7473 7.51957 5.56445 7.70711C5.38161 7.89464 5.13361 8 4.87502 8Z"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className=" flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/fulham-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    MU
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-white">
                  1 - 2
                </div>
                <div className="flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/brentford-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    CLS
                  </span>
                </div>
                <div className="flex absolute bottom-0 rounded-t-xl bg-white w-fit mx-auto left-[40%] items-center justify-between px-4 py-3 ">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">9:00PM</p>
                    <p className="text-xs text-gray-500">PCT</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-5">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    Boiling Rock Arena
                  </p>
                  <p className="text-xs text-gray-500">Venue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    TMT Sports
                  </p>
                  <p className="text-xs text-gray-500">Watch on</p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between rounded-b-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Premier League Tournament
                </p>
                <p className="text-sm text-gray-500">10/17/24</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start">
            <div className=" min-w-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="flex relative py-12 px-8 rounded-xl items-center justify-between bg-gradient-to-r from-orange-500 to-teal-500 p-4">
                <span className="absolute top-0 right-0 mr-4 text-white bg-red-500 cursor-pointer text-base my-2 flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
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
                      ></path>
                    </g>
                    <path
                      d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                <div className=" flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/fulham-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    FLM
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-white">
                  VS
                </div>
                <div className="flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/brentford-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    BFD
                  </span>
                </div>
                <div className="flex absolute bottom-0 rounded-t-xl bg-white w-fit mx-auto left-[40%] items-center justify-between px-4 py-3 ">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">8:30PM</p>
                    <p className="text-xs text-gray-500">PCT</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-5">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    Boiling Rock Arena
                  </p>
                  <p className="text-xs text-gray-500">Venue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    TMT Sports
                  </p>
                  <p className="text-xs text-gray-500">Watch on</p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between rounded-b-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Premier League Tournament
                </p>
                <p className="text-sm text-gray-500">10/17/24</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[30%] min-w-[300px] max-w-[400px] scroll-snap-align-start">
            <div className=" min-w-[400px] mx-auto bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <div className="flex relative py-12 px-8 rounded-xl items-center justify-between bg-gradient-to-r from-orange-500 to-teal-500 p-4">
                <span className="absolute top-0 right-0 mr-4 text-white bg-red-500 cursor-pointer text-base my-2 flex gap-2 px-2.5 py-1 rounded-full justify-center items-center">
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
                      ></path>
                    </g>
                    <path
                      d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
                <div className=" flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/fulham-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    FLM
                  </span>
                </div>
                <div className="text-center text-lg font-bold text-white">
                  VS
                </div>
                <div className="flex flex-col justify-center items-center rounded-full">
                  <img
                    src="/assets/images/match1/brentford-logo.png"
                    width={"40px"}
                  />
                  <span className="text-sm font-semibold text-white mt-2">
                    BFD
                  </span>
                </div>
                <div className="flex absolute bottom-0 rounded-t-xl bg-white w-fit mx-auto left-[40%] items-center justify-between px-4 py-3 ">
                  <div className="text-center">
                    <p className="text-sm font-bold text-gray-800">8:30PM</p>
                    <p className="text-xs text-gray-500">PCT</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-5">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    Boiling Rock Arena
                  </p>
                  <p className="text-xs text-gray-500">Venue</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">
                    TMT Sports
                  </p>
                  <p className="text-xs text-gray-500">Watch on</p>
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-100 flex items-center justify-between rounded-b-lg">
                <p className="text-sm font-semibold text-gray-700">
                  Premier League Tournament
                </p>
                <p className="text-sm text-gray-500">10/17/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 -mr-20 z-10 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        onClick={(e) => {
          handleChangeMatch(+1);
          slideRight();
        }}
      >
        <FaChevronRight className="text-gray-700" />
      </button>
    </div>
  );
};

export default CardSlider;
