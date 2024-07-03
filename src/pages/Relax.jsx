// import React from "react";


// function Relax() {
//   return (
//     <>
//       <div className="mt-10 sm:w-5/6 md:w-11/12 lg:w-full mx-auto">
//         <div className="text-center">
//           {/* <h2 className="text-3xl font-extrabold">"Relax"</h2> */}
//           <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Relax</q>
//           <p className="mt-5 text-base sm:text-lg md:text-[24px] lg:text-2xl md:w-[500px] mx-auto font-semibold">
//             Enjoy a cup of tea, blink your eyes, read and view pages of a book or magazine, take a nap, and write a journal.
//           </p>
//         </div>

//         <div className="image mt-2">
//           <img className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto pt-5 rounded-custom" src="/relax-frame-35.png" alt="Frame" />
//         </div>

//         <div className="relax mt-10">
//           <img className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mb-5" src="/relax-group-31.png" alt="Group" />
//           <p className="bg-slate-200 w-full sm:w-5/6 md:w-2/5 lg:w-2/4 mx-auto h-[180px] text-center p-10 text-base sm:text-lg md:text-[24px] lg:text-[24px] font-bold font-be-vietnam-pro-regular">
//             ‘Your mind will answer most questions if you learn to relax’<br /> 
//             and <br />
//             wait for the answer.
//           </p>
//           <img className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mt-5 mb-8" src="/relax-group-31.png" alt="Group" />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Relax;

// import React from "react";

// function Relax() {
//   return (
//     <>
//       <div className="mt-10 sm:w-5/6 md:w-11/12 lg:w-full mx-auto">
//         <div className="text-center">
//           <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Relax</q>
//           <p className="mt-5 text-base sm:text-lg md:text-[24px] lg:text-2xl md:w-[500px] mx-auto font-semibold">
//             Enjoy a cup of tea, blink your eyes, read and view pages of a book or magazine, take a nap, and write a journal.
//           </p>
//         </div>

//         <div className="image mt-2">
//           <img
//             className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto pt-5 rounded-custom"
//             src="/relax-frame-35.png"
//             alt="Relaxation activities frame"
//           />
//         </div>

//         <div className="relax mt-10">
//           <img
//             className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mb-5"
//             src="/relax-group-31.png"
//             alt="Group relaxing"
//           />
//           <p className="bg-slate-200 w-full sm:w-5/6 md:w-2/5 lg:w-2/4 mx-auto h-[150px] text-center p-8 text-base md:text-[24px] lg:text-[24px] font-bold font-be-vietnam-pro-regular">
//             ‘Your mind will answer most questions if you learn to relax’
//             and <br />wait for the answer.
//           </p>
//           <img
//             className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mt-5 mb-8"
//             src="/relax-group-31.png"
//             alt="Group relaxing"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Relax;


import React, { useState, useEffect, useRef } from "react";
import { HashLink } from 'react-router-hash-link';

function Relax() {
  const [timer, setTimer] = useState(0); // State to hold timer value in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running
  const [currentCount, setCurrentCount] = useState(0); // State to hold the current countdown value
  const audioRef = useRef(null); // Reference for the audio element

  useEffect(() => {
    let timerInterval;
    if (isTimerRunning && currentCount > 0) {
      timerInterval = setInterval(() => {
        setCurrentCount((prevCount) => prevCount - 1);
      }, 1000);
    } else if (currentCount === 0 && isTimerRunning) {
      clearInterval(timerInterval);
      setIsTimerRunning(false);
      if (audioRef.current) {
        audioRef.current.play(); // Play sound when timer ends
      }
      setTimeout(() => {
        alert("Time's up! Well done.👏"); // Show visual alert with clapping hands icon
        setTimer(0); // Reset timer to 0
      }, 100); // Delay the alert slightly to ensure audio plays
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, currentCount]);

  const handleStartTimer = () => {
    if (timer > 0) {
      setCurrentCount(timer);
      setIsTimerRunning(true);
    } else {
      alert("Please enter a valid time in seconds.");
    }
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
    setCurrentCount(0);
  };

  const handleTimerChange = (event) => {
    const value = parseInt(event.target.value, 10); // Parse input value as integer
    setTimer(value); // Update timer state
  };

  return (
    <>
      <div className="mt-10 sm:w-5/6 md:w-11/12 lg:w-full mx-auto">
        <div className="text-center">
          <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Relax</q>
          <p className="mt-5 text-base sm:text-lg md:text-[24px] lg:text-2xl md:w-[500px] mx-auto font-semibold">
            Enjoy a cup of tea, blink your eyes, read and view pages of a book or magazine, take a nap, and write a journal.
          </p>
        </div>

        <div className="image mt-2">
          <img
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto pt-5 rounded-custom"
            src="/relax-frame-35.png"
            alt="Relaxation activities frame"
          />
        </div>

        <div className="relax mt-10">
          <img
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mb-5"
            src="/relax-group-31.png"
            alt="Group relaxing"
          />
          <p className="bg-slate-200 w-full sm:w-5/6 md:w-2/5 lg:w-2/4 mx-auto h-[150px] text-center p-8 text-base md:text-[24px] lg:text-[24px] font-bold font-be-vietnam-pro-regular">
            ‘Your mind will answer most questions if you learn to relax’
            and <br />wait for the answer.
          </p>
          <img
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto -mt-5 mb-8"
            src="/relax-group-31.png"
            alt="Group relaxing"
          />
        </div>

        {/* Timer input and button */}
        <div className="bg-gray-200 p-8 rounded-lg mt-8 mx-auto max-w-md text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <input
              type="number"
              value={timer}
              onChange={handleTimerChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-24 focus:outline-none focus:border-blue-600"
            />
            {!isTimerRunning ? (
              <button
                onClick={handleStartTimer}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              >
                Start Timer
              </button>
            ) : (
              <button
                onClick={handleStopTimer}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
              >
                Stop Timer
              </button>
            )}
          </div>
          <p className="italic text-gray-500">Enter a valid time in seconds.</p>
          {isTimerRunning && (
            <div className="text-2xl font-bold">
              {Math.floor(currentCount / 60)}:
              {String(currentCount % 60).padStart(2, "0")}
            </div>
          )}
        </div>

        {/* Audio element for sound alert */}
        <audio ref={audioRef} src="/relax-alert-sound.mp3" preload="auto"></audio>

        {/* Navigation link */}
        <div className="mt-8 text-center font-medium mb-8">
          <HashLink to="/#help-section" className="text-blue-600 hover:underline">
            Back to see more...
          </HashLink>
        </div>
      </div>
    </>
  );
}

export default Relax;
