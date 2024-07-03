import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about-section" className="px-8 pt-10 md:px-16 py-16 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">About Us</h1>
        <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start">
        <div className="max-w-lg lg:mr-12 text-center lg:text-left">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-blue-600 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
              </svg>
              <h2 className="font-be-vietnam-pro-medium text-24 text-black">WHO WE ARE</h2>
            </div>
            <p className="text-16 text-start font-inter-regular text-black">Take a break is a digital wellness platform dedicated to helping individuals prioritize self-care and mental health. Our team of experts in mental health, meditation, and relaxation techniques for users to unwind, recharge, and refocus.</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-blue-600 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
              </svg>
              <h2 className="font-be-vietnam-pro-medium text-24 text-black">ABOUT US</h2>
            </div>
            <p className="text-16 text-start font-inter-regular text-black">Our mission is to provide a peaceful and calming environment for you to relax, unwind, and recharge. We offer a range of guided meditations, mindfulness exercises to help you find calm and clarity in just a few minutes a day.</p>
          </div>

          <div className="mb-8">
            <div className="flex items-center mb-2">
              <svg className="w-6 h-6 text-blue-600 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
              </svg>
              <h2 className="font-be-vietnam-pro-medium text-24 text-black">OUR STRATEGY</h2>
            </div>
            <p className="text-16 text-start font-inter-regular text-black">Our strategy is to provide a comprehensive platform offering various relaxation techniques, guided meditations and calming resources. <span className="text-blue-600 italic font-semibold">Take a Break, because everyone deserves a moment for themselves.</span></p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row gap-3 lg:gap-6 mt-12 lg:mt-0">
          <div className="flex flex-col gap-3">
            <div className="bg-about-us-short1 bg-no-repeat bg-cover w-[258px] h-[300px]"></div>
            <div className="bg-about-us-short2 bg-no-repeat bg-cover w-[258px] h-[300px]"></div>
          </div>
          <div className="bg-about-us-long bg-no-repeat bg-cover w-[258px] h-[624px] lg:ml-1"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
