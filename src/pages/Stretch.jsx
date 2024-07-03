// import React from 'react';

// const App = () => {
//     return (
//         <>
//             Stretch page
//         </>
//     );
// };

// export default App;

import React from "react";


function Stretch() {
  return (
    <>
      <div className="text-center mt-10">
        <q className="text-[24px] sm:text-4xl md:text-[48px] font-extrabold font-be-vietnam-pro">Stretch</q>
      </div>

      <div className="block md:flex lg:flex mx-auto p-5 md:p-20">
        <img className="w-full md:w-[600px] h-auto md:h-[300px] mt-8" src="./Rectangle 11.png" alt="Frame" />
        <div className="md:w-[600px] text-center mt-5 md:mt-0 md:ml-10">
          <h2 className="text-[16px] sm:text-3xl md:text-[48px] font-be-vietnam-pro font-extrabold">You’re not alone</h2>
          <div className="mt-5">
            <p className="text-lg md:text-[24px] font-bold">Take a few minutes and, Stretch!</p>
            <p className="text-sm md:text-[16px] mt-5">
              While it might seem harmless, prolonged sitting can lead to a host of health issues, from back pain to reduced productivity. But there’s a simple, powerful solution: stretching.
              <br />
              <br />
              Taking a few minutes to stretch can work wonders for your body and mind. It relieves muscle tension, improves circulation, and boosts your energy levels. Just a short break can enhance your focus and creativity, making you more productive when you return to work.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-center">
          <h2 className="text-[48px] sm:text-[3xl] md:text-[48px]font-be-vietnam-pro font-extrabold">WHAT DO I DO?</h2>
        </div>
        <br />
        {/* First card*/}
        <div className="block md:flex lg:flex mx-5">
          <div className="md:w-1/2 p-5">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">Neck Stretch</h5>
            <p className="font-be-vietnam-pro text-sm md:text-[16px]">How to Do It: Sit or stand with a straight back. Slowly tilt your head towards your right shoulder and hold for 15-30 seconds. Repeat on the left side.</p>
            <p className="font-be-vietnam-pro text-sm md:text-[16px] mt-2">Benefit: Eases tension in the neck and shoulders.</p>
            <img className="w-full mt-20 sm:mt-10 md:mt-20" src="./Rectangle 14.png" alt="Neck Stretch" />
          </div>

          {/* Second card */}
          <div className="md:w-1/2 p-5">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">Wrist and Finger Stretch</h5>
            <p className="font-be-vietnam-pro text-sm md:text-[16px]">How to Do It: Extend one arm in front of you with your palm facing up. Use your other hand to gently pull your fingers back towards your body. Hold for 15-30 seconds and repeat on the other hand.</p>
            <p className="font-be-vietnam-pro text-sm md:text-[16px] mt-2">Benefit: Relieves tension from typing and other repetitive hand movements.</p>
            <img className="w-full mt-5" src="./Rectangle 16.png" alt="Wrist and Finger Stretch" />
          </div>
        </div>

        {/* Third card */}
        <div className="block md:flex lg:flex mx-5 mt-10 ">
          <div className="md:w-1/2 p-5 mx-auto">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">Standing Forward Bend</h5>
            <p className="font-be-vietnam-pro text-sm md:text-[16px]">How to Do It: Stand with feet hip-width apart. Bend forward at the hips, letting your arms hang down towards the floor. Hold for 15-30 seconds, then slowly rise back up.</p>
            <p className="font-be-vietnam-pro text-sm md:text-[16px] mt-2">Benefit: Stretches the hamstrings, back, and shoulders.</p>
            <img className="w-full mt-5" src="./Rectangle 4.png" alt="Standing Forward Bend" />
          </div>
        </div>

        <section className="block md:flex lg:flex mx-5 mt-10">
          <div className="md:w-/2 p-5 mx-auto">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">Standing Side Stretch</h5>
            <p className="font-be-vietnam-pro text-sm md:text-[16px]">How to Do It: Stand with feet shoulder-width apart. Raise your right arm overhead and lean to the left, stretching your side. Hold for 15-30 seconds and repeat on the other side.</p>
            <p className="font-be-vietnam-pro text-sm md:text-[16px] mt-2">Benefit: Stretches the obliques and the sides of your torso.</p>
            <img className="w-[364px] h-[294px] mt-5" src="./Rectangle 8.png" alt="Standing Side Stretch" />
          </div>

          {/* Walking Lunges */}
          <div className="md:w-0/2 p-5">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">Walking Lunges</h5>
            <p className="font-be-vietnam-pro text-sm md:text-[16px]">How to Do It: Take a step forward with your right leg and lower your body until your right thigh is parallel to the floor. Push off with your left foot and bring it forward to step into the next lunge. Repeat for several steps.</p>
            <p className="font-be-vietnam-pro text-sm md:text-[16px] mt-2">Benefit: Stretches the hip flexors, glutes, and quadriceps, and promotes blood circulation.</p>
            <img className="w-[300px] h-[256px] mt-5" src="./Rectangle 17.png" alt="Walking Lunges" />
          </div>

          {/* And many more */}
          <div className="md:w-0/2 p-5">
            <h5 className="text-[24px] md:text-[24px] font-semibold text-center mb-2">And many more...</h5>
            <img className="w-[400px] h-[500px] mt-5" src="./Rectangle 2.png" alt="And many more..." />
          </div>
        </section>
      </div>
    </>
  );
}

export default Stretch;
