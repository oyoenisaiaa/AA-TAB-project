import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const Stretch = () => {
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    let timerInterval;
    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        setCurrentCount(prevCount => {
          if (prevCount > 0) {
            return prevCount - 1;
          } else {
            clearInterval(timerInterval);
            audioRef.current.play();
            setIsTimerRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isTimerRunning]);

  const handleTimerChange = (e) => {
    setTimer(e.target.value);
    setCurrentCount(e.target.value * 60);
  };

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
  };

  return (
    <div className="py-10 px-8 md:px-14 flex-col items-center">
      <div className="max-w-screen-xl mx-auto">
        <img
          className="w-full h-auto rounded-t-lg"
          src="/stretch-hero.png"
          alt="stretches"
          style={{ width: '100%', height: 'auto', maxWidth: '1116px', borderRadius: '14.46px 0px 0px 0px' }}
        />
        <h2 className="mt-6 text-24 font-be-vietnam-pro font-bold text-start">You’re not alone</h2>
        <p className="mt-4 text-start text-16 font-inter-regular text-gray-700">
          While it might seem harmless, prolonged sitting can lead to a host of health issues, from back pain to reduced productivity. But there’s a simple, powerful solution: stretching.
          Taking a few minutes to stretch can work wonders for your body and mind. It relieves muscle tension, improves circulation, and boosts your energy levels. Just a short break can enhance your focus and creativity, making you more productive when you return to work.
        </p>
        <h2 className="mt-10 text-2xl font-be-vietnam-pro font-semibold text-start">WHAT DO I DO?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg"
              src="/stretch-col1-image1.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">Neck Stretch</h3>
            <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
              <li>How to Do It: Sit or stand with a straight back. Slowly tilt your head towards your right shoulder and hold for 15-30 seconds. Repeat on the left side.</li>
              <li>Benefit: Eases tension in the neck and shoulders.</li>
            </ul>
          </div>

          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg"
              src="/stretch-col2-image1.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">Wrist and Finger Stretch</h3>
            <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
              <li>How to Do It: Extend one arm in front of you with your palm facing up. Use your other hand to gently pull your fingers back towards your body. Hold for 15-30 seconds and repeat on the other hand.</li>
              <li>Benefit: Relieves tension from typing and other repetitive hand movements.</li>
            </ul>
          </div>

          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg"
              src="/stretch-col3-image1.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">Standing Forward Bend</h3>
            <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
              <li>How to Do It: Stand with feet hip-width apart. Bend forward at the hips, letting your arms hang down towards the floor. Hold for 15-30 seconds, then slowly rise back up.</li>
              <li>Benefit: Stretches the hamstrings, back, and shoulders.</li>
            </ul>
          </div>

          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg"
              src="/stretch-col1-image2.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">Standing Side Stretch</h3>
            <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
              <li>How to Do It: Stand with feet shoulder-width apart. Raise your right arm overhead and lean to the left, stretching your side. Hold for 15-30 seconds and repeat on the other side.</li>
              <li>Benefit: Stretches the obliques and the sides of your torso.</li>
            </ul>
          </div>

          

          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg"
              src="/stretch-col2-image2.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">Walking Lunges</h3>
            <ul className="mt-2 text-base text-gray-700 list-disc list-inside">
              <li>How to Do It: Take a step forward with your right leg and lower your body until your right thigh is parallel to the floor. Push off with your left foot and bring it forward to step into the next lunge. Repeat for several steps.</li>
              <li>Benefit: Stretches the hip flexors, glutes, and quadriceps, and promotes blood circulation.</li>
            </ul>
          </div>

          

          <div className="px-2 mb-8">
            <img
              className="w-full h-auto rounded-lg opacity-70"
              src="/stretch-col3-image2.png"
              alt="stretches"
              style={{ width: '300px', height: '250px' }}
            />
            <h3 className="mt-4 text-lg font-be-vietnam-pro font-base text-start">And many more...</h3>
          </div>
        </div>

        {/* Timer input and button */}
        <div className="bg-gray-200 p-8 rounded-lg mt-8 mx-auto max-w-md text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <input
              type="number"
              value={timer}
              onChange={handleTimerChange}
              className="border border-gray-300 rounded-md px-2 py-1 w-24 focus:outline-none focus:border-blue-600"
              min="0"
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
              {String(currentCount % 60).padStart(2, '0')}
            </div>
          )}
        </div>

        {/* Audio element for sound alert */}
        <audio ref={audioRef} src="/stretch-alert-sound.mp3" preload="auto"></audio>

        {/* Navigation link */}
        <div className="mt-8 text-center font-medium mb-8">
          <HashLink to="/#help-section" className="text-blue-600 hover:underline">
            Back to see more...
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Stretch;

       
