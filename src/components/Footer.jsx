import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaShare, FaEnvelope } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://tab-africa-agility.netlify.app/");
    alert("URL copied to clipboard. Thank you for sharing!");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('https://take-a-break-anny.onrender.com/news/newsletter', {
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
                <HashLink to="/#faqs" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">FAQs</HashLink>
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
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Logos</a>
              </li>
              <li className="mt-3">
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Events</a>
              </li>
              <li className="mt-3">
                <Link to="/team" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Team</Link>
              </li>
              <li className="mt-3">
                <Link to="/errorpage" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Office</Link>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
            <h5 className="uppercase font-bold text-white">Legal</h5>
            <ul className="mt-6 text-sm font-medium">
              <li className="mt-3">
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">GDPR</a>
              </li>
              <li className="mt-3">
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Privacy Policy</a>
              </li>
              <li className="mt-3">
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Terms of Service</a>
              </li>
              <li className="mt-3">
                <a href="/" className="border-b-2 border-transparent text-white hover:border-gray-700 pb-1 transition duration-300">Disclaimer</a>
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
            <div className="bg-logo-w w-[200px] h-[60px] block bg-contain bg-no-repeat"></div>
            {/* <a href="#" className="bg-logo-w h-20 w-20 bg-contain block bg-center bg-no-repeat mx-auto sm:mx-0"></a> */}

            {/* <h5 className="ml-2 text-xl font-black tracking-wider text-white">Take a Break</h5> */}
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


