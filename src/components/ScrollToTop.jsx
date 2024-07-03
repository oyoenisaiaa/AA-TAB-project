// ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down certain distance
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300 focus:outline-none"
          >
            <FaArrowUp size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
