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

// import vanessanzImage from '../assets/team/Vanessa Nzurum- Nigeria.jpg';
// import toluwaniImage from '../assets/team/Toluwani Oladapo_Nigeria.jpg';
// import ariyoImage from '../assets/team/Ariyo Oluwadamilola. Nigeria_.png';
// import elizabethImage from '../assets/team/Elizabeth Olaniyan - Nigeria_.jpg';
// import ceciliaImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';
// import zinleImage from '../assets/team/Dladla Zinhle Fiona- Eswatini.jpg';
// import ebosetaleImage from '../assets/team/Ebosetale Sarah, Nigeria_.jpg';
// import ebeleImage from '../assets/team/Ebele Chukwu - Nigeria.jpg';
// import ebunoluwaImage from '../assets/team/Ebunoluwa Oluwabukola Moronkola.png';
// import ogunsebikanImage from '../assets/team/Janet ogunsebikan -Nigeria.jpg';
// import celineImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';


const teamMembers = [
  {
    name: "Tina OmIniabohs",
    imgSrc: tinaImage, 
    description: "Scrum Mastery (Chief Product Manager)",
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

// import  from '../assets/team/Vanessa Nelson-Dorglo.png';
// import  from '../assets/team/Temitope Adebayo, Nigeria_.jpg';
// import vanessanzImage from '../assets/team/Vanessa Nzurum- Nigeria.jpg';
// 
// import toluwaniImage from '../assets/team/Toluwani Oladapo_Nigeria.jpg';
// import ariyoImage from '../assets/team/Ariyo Oluwadamilola. Nigeria_.png';
// import elizabethImage from '../assets/team/Elizabeth Olaniyan - Nigeria_.jpg';
// import ceciliaImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';
// import zinleImage from '../assets/team/Dladla Zinhle Fiona- Eswatini.jpg';
// import ebosetaleImage from '../assets/team/Ebosetale Sarah, Nigeria_.jpg';
// import ebeleImage from '../assets/team/Ebele Chukwu - Nigeria.jpg';
// import ebunoluwaImage from '../assets/team/Ebunoluwa Oluwabukola Moronkola.png';
// import ogunsebikanImage from '../assets/team/Janet ogunsebikan -Nigeria.jpg';
// import celineImage from '../assets/team/Cecilia Ajeleye - Nigeria.png';

// Olaniyan Elizabeth 
// Product Design Track

// Linked in:  www.linkedin.com/in/elizabeth-olaniyan-50418b271


// Blessing Ozoemena 
// LinkedIn url: https://www.linkedin.com/in/blessing-ozoemena-70106023b


// Hephzibah Owoeye
// Backend Development
// https://www.linkedin.com/in/hephzibah-owoeye

// Taiwo Rafiu 
// Branding and marketing 
// https://www.linkedin.com/in/taiwo-rafiu-211b69233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

// Cecilia Ajeleye
// http://www.linkedin.com/in/dacececi

// Name: Otene Ojimaojo Eunice

// Track: Data Science and Machine Learning

// LinkedIn profile: https://www.linkedin.com/in/ojimaojo-eunice-otene-250b89185


// Nzurum Chinonyerem Vanessa — 07/03/2024 1:35 PM
// Nzurum Vanessa Chinonyerem 
// Product management track

// Link: https://www.linkedin.com/in/vanessa-nzurum-37964322b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app


// Nwobodo Rachael Chinwendu
// Data science/Machine learning

// https://www.linkedin.com/in/rachael-nwobodo-487a16102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

// Full name: Ariyo Oluwadamilola Bukola
// Track: Product Management Track.
// LinkedIn Profile: https://www.linkedin.com/in/ariyo-oluwadamilola-b-2a956a248


// https://www.linkedin.com/in/rashidat-tajudeen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
//  I'm Rashidat Tajudeen from Data science and machine learning track 

//  My name is Tina OmIniabohs
// You can use my picture from the take a break hackathon
// I’m the CPM.
// This is my LinkedIn link
// http://linkedin.com/in/tina-ominiabohs-803a13264



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
