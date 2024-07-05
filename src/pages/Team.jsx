import React, { useEffect } from 'react';
import { TiSocialLinkedin } from "react-icons/ti";

// Import images
// import senaImage from '../assets/team/Sena Dzokoto _ Ghana.jpg'; 
// <img src="../assets/team/Sena Dzokoto _ Ghana.jpg" /> 
import unwanaImage from '../assets/team/Unwanaonong Williams-Nigeria.jpg';
import unomaImage from '../assets/team/Unoma Okoro_Nigeria.jpg';




const teamMembers = [
  {
    name: "Sena Dzokoto",
    imgSrc: <img src="../assets/team/Sena Dzokoto _ Ghana.jpg" /> , 
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
      <div className="team-container flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member w-48 m-5 text-center">
            <div className="member-photo w-24 h-24 rounded-full overflow-hidden mx-auto">
              <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-700 italic">{member.description}</p>
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
