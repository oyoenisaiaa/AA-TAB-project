import React from 'react';

const PerfectChoiceSection = () => {
  return (
  <section id="perfectchoice" className="bg-blue-50 py-20 px-8 pt-10 pb-10">
    <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">What Makes Us the Perfect Choice?</h1>
        <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
        <p className="text-inter-regular text-lg mt-4 mb-12">
          At Take a Break, we understand the importance of recharging your mind, body, and soul. <br /> 
          Here’s why choosing us will be the best decision you make today.
        </p>
        
    <div className="flex flex-wrap justify-center md:justify-between space-y-8 md:space-y-0">
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-8">
        <div className="text-center flex flex-col items-center">
            <div className="w-52 h-52 bg-pc-col1-top bg-cover bg-no-repeat"></div>
            <h3 className="text-be-vietnam-pro-medium text-2xl mt-4">Tailored Break Experiences</h3>
            <p className="text-inter-regular text-base mt-2">
                Our platform offers a diverse range of break options designed to suit every need. Whether you’re looking for a quick mental refresh, a guided meditation, or a virtual getaway, we have something for everyone. Each experience is curated by experts to ensure you receive the maximum benefit from your downtime.
                </p></div>
                    
    <div className="text-center flex flex-col items-center">
        <div className="w-52 h-52 bg-pc-col1-down bg-cover bg-no-repeat "></div>
        <h3 className="text-be-vietnam-pro-medium text-2xl mt-4 flex-grow">EaseAI</h3>
        <p className="text-inter-regular text-base mt-2">
            With our EaseAI, you get curated suggestions that perfectly match your interest, ensuring that every moment of your break is well spent. Take a Break, because everyone deserves a moment for themselves.
            </p></div>
            </div>
            
    <div className="w-full md:w-1/3 flex justify-center items-center">
    <div className="w-80 h-[300px] bg-pc-col2-center bg-cover bg-no-repeat"></div>
    </div>

    <div className="w-full md:w-1/3 flex flex-col items-center space-y-8">
    <div className="text-center flex flex-col items-center">
        <div className="w-52 h-52 bg-pc-col3-top bg-cover bg-no-repeat "></div>
        <h3 className="text-be-vietnam-pro-medium text-2xl mt-4">User-Friendly Interface</h3>
        <p className="text-inter-regular text-base mt-2">
            Navigating our website is a breeze. With an intuitive and easy-to-use interface, you can effortlessly find and access the perfect break activity. Simply log in, and within seconds, you’ll be on your way to relaxation and rejuvenation.
              </p>
            </div>

    <div className="text-center flex flex-col items-center">
        <div className="w-52 h-52 bg-pc-col3-down bg-cover bg-no-repeat"></div>
        <h3 className="text-be-vietnam-pro-medium text-2xl mt-4">Scientifically Proven Benefits</h3>
        <p className="text-inter-regular text-base mt-2">
            Our break programs are backed by scientific research that highlights the positive effects of taking regular breaks. Improved productivity, enhanced creativity, reduced stress levels, and better overall well-being are just a few of the many benefits you’ll experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectChoiceSection;


