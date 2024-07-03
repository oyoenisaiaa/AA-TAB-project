import React, { useState, useEffect, useRef } from "react";
import { HashLink } from 'react-router-hash-link';

function Mindfulness() {
  const [timer, setTimer] = useState(0); // State to hold timer value in minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running
  const [currentCount, setCurrentCount] = useState(0); // State to hold the current countdown value in seconds
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
        alert("Time's up! Well done. 👏"); // Show visual alert with clapping hands icon
        setTimer(0); // Reset timer to 0
      }, 100); // Delay the alert slightly to ensure audio plays
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning, currentCount]);

  const handleStartTimer = () => {
    if (timer > 0) {
      setCurrentCount(timer * 60); // Convert minutes to seconds
      setIsTimerRunning(true);
    } else {
      alert("Please enter a valid time in minutes.");
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
      <div className="mt-10 mx-auto sm:w-5/6 md:w-4/6 lg:w-3/4">
        <div className="text-center">
          <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Mindfulness</q>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          <div className="bg-mindPageBlue text-white p-6 sm:p-10 w-full md:w-[482px] h-auto md:h-[476px] rounded-tl-[20px] rounded-bl-[20px] flex items-center justify-center">
            <p className="text-base sm:text-[24px] md:text-[30px] md:leading-8 text-center font-be-vietnam-pro-medium-500 font-semibold">
              Mindfulness, the practice of focusing on the present moment without judgment, is the foundation of Take A Break's approach.<br/> By becoming more aware of your thoughts and feelings, you can make conscious choices about your habits.
            </p>
          </div>
          <img 
            className="w-full md:w-[628px] h-auto md:h-[476px] mt-4 md:mt-0 rounded-tr-[20px] rounded-br-[20px]" 
            src="/mind-8.png" 
            alt="Mindfulness" 
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-10 md:space-y-0 md:space-x-10">
          <div className="flex flex-col items-center">
            <h5 className="text-[24px] font-be-vietnam-pro-medium text-center mt-2 pb-4">Focus on your breath</h5>
            <img 
              className="w-full md:w-[462px] h-auto md:h-[352px] rounded-tl-[20px]" 
              src="/mind-10.png" 
              alt="Breath" 
            />
            <p className="text-[16px] font-inter-regular w-full md:w-[350px] text-center mt-2">
              This is a simple yet effective way to anchor yourself in the present moment. Find a quiet spot, close your eyes if comfortable, and pay attention to your breath.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h5 className="text-[24px] font-be-vietnam-pro-medium text-center mt-2 pb-4">Engage your senses</h5>
            <img 
              className="w-full md:w-[438px] h-auto md:h-[352px] rounded-tl-[20px]" 
              src="/mind-11.png" 
              alt="Senses" 
            />
            <p className="text-[16px] font-inter-regular w-full md:w-[350px] text-center mt-2">
              Take a few minutes to appreciate your surroundings. Notice the sights, sounds, smells, textures, and tastes around you, and savor a cup of tea.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h5 className="text-[24px] font-be-vietnam-pro-medium text-center mt-2 pb-4">Mindful movement</h5>
          <img 
            className="w-full md:w-[512.54px] h-auto md:h-[352px] rounded-tl-[20px]" 
            src="/mind-12.png" 
            alt="Movement" 
          />
          <p className="text-[16px] font-inter-regular w-full md:w-[350px] text-center mt-5 mb-8">
            Go for a short walk and focus on the feeling of your feet hitting the ground. Stretch your body gently, paying attention to how each movement feels.
          </p>
        </div>

        {/* Timer input and button */}
        <div className="bg-gray-200 p-8 rounded-lg mt-8 mx-auto max-w-md text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <input
              type="number"
              value={timer}
              onChange={handleTimerChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-24 focus:outline-none focus:border-blue-600"
              min="0" // Prevents negative input
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
          <p className="italic text-gray-500">Enter a valid time in minutes.</p>
          {isTimerRunning && (
            <div className="text-2xl font-bold">
              {Math.floor(currentCount / 60)}:
              {String(currentCount % 60).padStart(2, "0")}
            </div>
          )}
        </div>

        {/* Audio element for sound alert */}
        <audio ref={audioRef} src="/mind-alert-sound.mp3" preload="auto"></audio>

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

export default Mindfulness;
