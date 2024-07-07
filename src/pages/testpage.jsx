// This is for raw code / tests 

import React, { useEffect } from 'react';
import { TiSocialLinkedin } from "react-icons/ti";

// Import images
import tinaImage from '../assets/team/Tina Ominiabohs- Nigeria_.jpg';
import taiwoImage from '../assets/team/Taiwo Abdrasheed-Babatunde-Nigeria.jpg';
import vanessaImage from '../assets/team/Vanessa Nelson-Dorglo.png';
import temitopeImage from '../assets/team/Temitope Adebayo, Nigeria_.jpg';
import senaImage from '../assets/team/Sena Dzokoto _ Ghana.jpg'; 
import unwanaImage from '../assets/team/Unwanaonong Williams-Nigeria.jpg';
import unomaImage from '../assets/team/Unoma Okoro_Nigeria.jpg';

const teamMembers = [
    {
      name: "Tina OmIniabohs",
      imgSrc: tinaImage, 
      description: "(Chief Product Manager)",
      linkedin: "http://linkedin.com/in/tina-ominiabohs-803a13264",
    },
    {
      name: "Taiwo Hameedah Abdrasheed-Babatunde",
      imgSrc: taiwoImage, 
      description: "Scrum Mastery",
      linkedin: "https://www.linkedin.com/in/taiwo-abdrasheed-babatunde-4a9735114",
    },
    {
      name: "Vanessa Nelson-Dorglo",
      imgSrc: vanessaImage, 
      description: "Scrum Mastery",
      linkedin: "https://www.linkedin.com/in/vanessa-nelson-dorglo-a17324169/",
    },
    {
      name: "Vanessa Nelson-Dorglo",
      imgSrc: temitopeImage, 
      description: "Scrum Mastery",
      linkedin: "https://www.linkedin.com/in/vanessa-nelson-dorglo-a17324169/",
    },
    {
      name: "Sena Dzokoto",
      imgSrc: senaImage,
      description: "Scrum mastery",
      linkedin: "https://www.linkedin.com/in/sena-dzokoto",
    },
    {
      name: "Unwanaobong Williams",
      imgSrc: unwanaImage, 
      description: "Product Management",
      linkedin: "https://www.linkedin.com/in/unwanaobong",
    },
    {
      name: "Unoma Okoro",
      imgSrc: unomaImage, 
      description: "Product Management",
      linkedin: "https://www.linkedin.com/in/unomaokoro",
    },
    
  ];

  const Team = () => {
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div className="bg-gray-100 py-10">
        <h1 className="text-blue-600 text-4xl font-bold mb-10 text-center">MEET THE TEAM</h1>
        <h2 className="text-black text-lg font-bold mb-10 text-start>Product Managers</h2>
        <div className="team-container flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-48 m-5 text-center">
              <div className="member-photo w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
              <a 
                href={member.linkedin} 
                className="inline-block mt-2 text-gray-500 hover:text-blue-600 transition"
                target="_blank" 
                rel="noopener noreferrer"
              >

            <div className="bg-gray-100 py-10">
        <h1 className="text-blue-600 text-4xl font-bold mb-10 text-center">MEET THE TEAM</h1>
        <h2 className="text-black text-lg font-bold mb-10 text-start>Scrum Mastery</h2>
        <div className="team-container flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member w-48 m-5 text-center">
              <div className="member-photo w-24 h-24 rounded-full overflow-hidden mx-auto">
                <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
              <a 
                href={member.linkedin} 
                className="inline-block mt-2 text-gray-500 hover:text-blue-600 transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TiSocialLinkedin className="w-6 h-6 fill-current" />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;
  
