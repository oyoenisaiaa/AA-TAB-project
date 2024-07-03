// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white p-4 text-center">
//       &copy; 2024 Your Company. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// // import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';
// import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';


// const Footer = () => {

//   return (
//     <div className="relative bg-footer-image bg-cover bg-center text-gray-700 py-20 px-8">
//       <div className="absolute inset-0 bg-black opacity-10"></div>
//       <div className="relative z-10 max-w-screen-xl mx-auto">
//         <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Main</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">About Us</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">FAQs</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Contact</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Services</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Sign Up</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Self-care</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Mindfulness Exercise</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Breathing Techniques</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Press</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Logos</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Events & Stories</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Team</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Office</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Legal</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">GDPR</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Privacy Policy</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Terms of Service</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Disclaimer</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 w-full lg:w-auto mt-20 lg:mt-12 text-center lg:text-left">
//             <div className="max-w-sm mx-auto lg:mx-0">
//               <h5 className="uppercase font-bold text-white">Subscribe to our Newsletter</h5>
//               <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-300">
//                 We deliver high quality blog posts written by professionals weekly. And we promise no spam.
//               </p>
//               <form className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0" method="get" action="#">
//                 <input type="email" placeholder="Your Email Address" className="bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full" />
//                 <button type="submit" className="mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 bg-blue-600 text-white font-medium">Subscribe</button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="my-16 border-b-2 border-gray-300 w-full"></div>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center justify-center md:justify-start">
//             <div className="w-8 h-8 bg-logo-s bg-contain bg-no-repeat"></div>
//             <h5 className="ml-2 text-xl font-black tracking-wider text-white">Take a Break</h5>
//           </div>
//           <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-300">&copy; {new Date().getFullYear()} Africa Agility | GIT Cohort 7.0 Project - Take a Break. All Rights Reserved.</p>
          
//           <div className="flex mt-8 md:mt-0">
//         <a href="https://facebook.com" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//           <FaFacebook size={20} />
//         </a>
//         <a href="https://twitter.com" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//           <FaTwitter size={20} />
//         </a>
//         <a href="https://youtube.com" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//           <FaYoutube size={20} />
//         </a>
//       </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



// import React from "react";
// import { FaFacebook, FaTwitter, FaYoutube, FaShare } from 'react-icons/fa';

// const Footer = () => {
//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText("www.tab.com");
//     alert("URL copied to clipboard. Thank you for sharing!");
//   };

//   return (
//     <div className="relative bg-footer-image bg-cover bg-center text-gray-700 py-20 px-8">
//       <div className="absolute inset-0 bg-black opacity-10"></div>
//       <div className="relative z-10 max-w-screen-xl mx-auto">
//         <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Main</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">About Us</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">FAQs</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Contact</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Services</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Sign Up</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Self-care</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Mindfulness Exercise</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Breathing Techniques</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Press</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Logos</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Events & Stories</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Team</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Office</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Legal</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">GDPR</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Privacy Policy</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Terms of Service</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Disclaimer</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 w-full lg:w-auto mt-20 lg:mt-12 text-center lg:text-left">
//             <div className="max-w-sm mx-auto lg:mx-0">
//               <h5 className="uppercase font-bold text-white">Subscribe to our Newsletter</h5>
//               <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-300">
//                 We deliver high quality blog posts written by professionals weekly. And we promise no spam.
//               </p>
//               <form className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0" method="get" action="#">
//                 <input type="email" placeholder="Your Email Address" className="bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full" />
//                 <button type="submit" className="mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 bg-blue-600 text-white font-medium">Subscribe</button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div className="my-16 border-b-2 border-gray-300 w-full"></div>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center justify-center md:justify-start">
//             <div className="w-8 h-8 bg-logo-s bg-contain bg-no-repeat"></div>
//             <h5 className="ml-2 text-xl font-black tracking-wider text-white">Take a Break</h5>
//           </div>
//           <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-300">&copy; {new Date().getFullYear()} Africa Agility | GIT Cohort 7.0 Project - Take a Break. All Rights Reserved.</p>
          
//           <div className="flex mt-8 md:mt-0">
//             <button 
//               onClick={handleCopyToClipboard} 
//               className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaShare size={20} />
//             </button>
//             <a href="https://youtu.be/ircNyada07k" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaYoutube size={20} />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaFacebook size={20} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaTwitter size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


// import React, { useState } from "react";
// import { FaFacebook, FaTwitter, FaYoutube, FaShare, FaEnvelope } from 'react-icons/fa';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [showPopover, setShowPopover] = useState(false);

//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText("www.takeabreak.com");
//     alert("URL copied to clipboard. Thank you for sharing!");
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       // Simulate API call
//       setTimeout(() => {
//         console.log('Subscribed with email:', email);
//         setShowPopover(true);
//         setEmail(''); // Clear email field
//         setTimeout(() => setShowPopover(false), 5000); // Hide popover after 5 seconds
//       }, 1000); // Simulate a delay of 1 second
//     }
//   };


//   return (
//     <div className="relative bg-footer-image bg-cover bg-center text-gray-700 py-20 px-8">
//       <div className="absolute inset-0 bg-black opacity-10"></div>
//       <div className="relative z-10 max-w-screen-xl mx-auto">
//         <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Main</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">About Us</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">FAQs</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Contact</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Services</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Sign Up</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Self-care</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Mindfulness Exercise</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Breathing Techniques</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Press</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Logos</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Events & Stories</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Team</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Office</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
//             <h5 className="uppercase font-bold text-white">Legal</h5>
//             <ul className="mt-6 text-sm font-medium">
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">GDPR</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Privacy Policy</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Terms of Service</a>
//               </li>
//               <li className="mt-3">
//                 <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Disclaimer</a>
//               </li>
//             </ul>
//           </div>
//           <div className="px-4 sm:px-0 w-full lg:w-auto mt-20 lg:mt-12 text-center lg:text-left">
//             <div className="max-w-sm mx-auto lg:mx-0">
//               <h5 className="uppercase font-bold text-white">Subscribe to our Newsletter</h5>
//               <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-300">
//                 We deliver industry updates and high quality blog posts written by professionals. And we promise no spam.
//               </p>
//               <form onSubmit={handleFormSubmit} className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0">
//                 <input 
//                   type="email" 
//                   placeholder="Your Email Address" 
//                   className="bg-white px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full" 
//                   value={email} 
//                   onChange={handleEmailChange}
//                   required
//                 />
//                 <button type="submit" className="mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 bg-blue-600 text-white font-medium">Subscribe</button>
//               </form>
//               {showPopover && (
//                 <div className="absolute bg-blue-600 text-white text-sm py-2 px-4 rounded mt-2 flex items-center">
//                   <FaEnvelope className="mr-2" /> You've got mail!
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="my-16 border-b-2 border-gray-300 w-full"></div>
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="flex items-center justify-center md:justify-start">
//             <div className="w-8 h-8 bg-logo-s bg-contain bg-no-repeat"></div>
//             <h5 className="ml-2 text-xl font-black tracking-wider text-white">Take a Break</h5>
//           </div>
//           <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-300">&copy; {new Date().getFullYear()} Africa Agility | GIT Cohort 7.0 Project - Take a Break. All Rights Reserved.</p>
          
//           <div className="flex mt-8 md:mt-0">
//             <button 
//               onClick={handleCopyToClipboard} 
//               className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaShare size={20} />
//             </button>
//             <a href="https://youtu.be/ircNyada07k" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaYoutube size={20} />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaFacebook size={20} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
//               <FaTwitter size={20} />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaShare, FaEnvelope } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("www.takeabreak.com");
    alert("URL copied to clipboard. Thank you for sharing!");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('https://your-api-endpoint.com/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          console.log('Email successfully subscribed:', email);
          setShowPopover(true);
          setEmail(''); // Clear email field
          setTimeout(() => setShowPopover(false), 5000); // Hide popover after 5 seconds
        } else {
          console.error('Failed to subscribe:', response.status);
          // Handle error state, e.g., show error message to the user
        }
      } catch (error) {
        console.error('Error subscribing:', error);
        // Handle network errors or other exceptions
      }
    }
  };

  return (
  <section id="footer-section">
    <div className="relative bg-footer-image bg-cover bg-center text-gray-700 py-20 px-8">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold text-white">Main</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <HashLink to="/#about-section" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">About Us</HashLink>
              </li>
              <li className="mt-3">
                <HashLink to="/#faqs-section" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">FAQs</HashLink>
              </li>
              <li className="mt-3">
                <Link to="/contact" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Contact</Link>
              </li>
              <li className="mt-3">
                <HashLink to="/#perfectchoice" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Blog</HashLink>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold text-white">Services</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <Link to="/signup" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Sign Up</Link>
              </li>
              <li className="mt-3">
                <HashLink to="/#help-section" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Self-care</HashLink>
              </li>
              <li className="mt-3">
                <HashLink to="/#help-section" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Mindfulness Exercise</HashLink>
              </li>
              <li className="mt-3">
                <HashLink to="/#help-section" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Breathing Techniques</HashLink>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold text-white">Press</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Logos</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Events</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Team</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Office</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold text-white">Legal</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">GDPR</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Privacy Policy</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Terms of Service</a>
              </li>
              <li className="mt-3">
                <a href="#" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Disclaimer</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 w-full lg:w-auto mt-20 lg:mt-12 text-center lg:text-left">
            <div className="max-w-sm mx-auto lg:mx-0">
              <h5 className="uppercase font-bold text-white">Subscribe to our Newsletter</h5>
              <p className="mt-2 lg:mt-6 text-sm font-medium text-gray-300">
                We deliver industry updates and high quality blog posts written by professionals. And we promise no spam.
              </p>
              <form onSubmit={handleFormSubmit} className="mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="bg-white px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full" 
                  value={email} 
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit" className="mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 bg-blue-600 text-white font-medium">Subscribe</button>
              </form>
              {showPopover && (
                <div className="absolute bg-blue-600 text-white text-sm py-2 px-4 rounded mt-2 flex items-center">
                  <FaEnvelope className="mr-2" /> You've got mail!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="my-16 border-b-2 border-gray-300 w-full"></div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center md:justify-start ">

            {/* logo */}
            <div className="w-8 h-8 bg-logo-figma bg-contain bg-no-repeat"></div>
            <h5 className="ml-2 text-xl font-black tracking-wider text-white">Take a Break</h5>
          </div>
          <p className="text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-300">&copy; {new Date().getFullYear()} Africa Agility | GIT Cohort 7.0 Project - Take a Break. All Rights Reserved.</p>
          
          <div className="flex mt-8 md:mt-0">
            <button 
              onClick={handleCopyToClipboard} 
              className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
              <FaShare size={20} />
            </button>
            <a href="https://youtu.be/ircNyada07k" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
              <FaYoutube size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer p-2 rounded-full text-white hover:bg-blue-600 transition duration-300 mr-4 last:mr-0">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;




