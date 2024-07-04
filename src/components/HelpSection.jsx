import React from "react";

const HelpSection = () => {
  return (
    <section id="help-section" className="px-8 md:px-14 py-14 pt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">We are here to help you</h1>
        <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        <div className="max-w-xs text-center">
          <a href="/relax" className="font-semibold font-be-vietnam-pro-medium text-24 hover:text-blue-600">
            Relax
            </a>
          <div className="w-[261px] h-[215.61px] bg-relax-help bg-contain bg-no-repeat mx-auto mt-4"></div>
          <p className="font-inter-regular text-16 text-black leading-6 mt-4">
            Unwind and calm<br />
            your mind. Let go of<br />
            stress and tension.
          </p>
        </div>

        
        <div className="max-w-xs text-center">
          <a href="/mindfulness" className="font-semibold font-be-vietnam-pro-medium text-24 hover:text-blue-600">
            Mindfulness
            </a>
          <div className="w-[179px] h-[215px] bg-mind-help bg-contain bg-no-repeat mx-auto mt-4"></div>
          <p className="font-inter-regular text-16 text-black leading-6 mt-4">
            Be present in the<br />
            moment. Mindful<br />
            living for a happier life.
          </p>
        </div>

        
        <div className="max-w-xs text-center">
          <a href="/stretch" className="font-semibold font-be-vietnam-pro-medium text-24 hover:text-blue-600">
          Stretch
          </a>
          <div className="w-[179px] h-[215px] bg-stretch-help bg-contain bg-no-repeat mx-auto mt-4"></div>
          <p className="font-inter-regular text-16 text-black leading-6 mt-4">
            Take a moment to<br />
            ease tension and refresh<br />
            with a gentle stretch.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a href="/signup" className="font-semibold font-be-vietnam-pro-medium text-24 text-blue-600 underline">
          More...
        </a>
      </div>
    </section>
  );
};

export default HelpSection;
