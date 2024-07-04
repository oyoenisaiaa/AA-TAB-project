// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineMenu, AiOutlineClose, AiOutlineRobot } from 'react-icons/ai';
// import { scroller } from 'react-scroll';

// const NavBar = ({ firstName, setFirstName }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleAboutClick = () => {
//     navigate('/');
//     setTimeout(() => {
//       scroller.scrollTo('about-section', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//       });
//     }, 100);
//   };

//   const handleHelpClick = () => {
//     navigate('/');
//     setTimeout(() => {
//       scroller.scrollTo('help-section', {
//         duration: 800,
//         delay: 0,
//         smooth: 'easeInOutQuart',
//       });
//     }, 100);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-4 flex justify-between items-center px-8 md:px-16 py-4">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="bg-logo-b bg-no-repeat bg-contain w-[200px] h-[60px]"></div>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center space-x-8 text-lg font-semibold ml-auto">
//         <Link to="/" className="hover:text-blue-600">Home</Link>
//         <div onClick={handleAboutClick} className="hover:text-blue-600 cursor-pointer">About</div>
//         <div onClick={handleHelpClick} className="hover:text-blue-600 cursor-pointer">Features</div>
//         <Link 
//           to="/aipage" 
//           className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
//         >
//           <AiOutlineRobot className="mr-2 text-2xl" />
//           <span>Ask TAB AI</span>
//         </Link>
        
//         <div className="flex items-center space-x-4">
//           {firstName ? (
//             <div className="relative group">
//               <div className="hover: cursor-pointer text-blue-600 text-lg font-medium">Hi, {firstName}</div>
//               <div className="absolute hidden group-hover:block bg-gray-100 text-black text-lg font-medium py-2 px-4 rounded-md shadow-lg z-50">
//                 <button
//                   onClick={() => {
//                     setFirstName(null);
//                     // Additional logout logic here
//                   }}
//                   className="w-full text-left"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Link to="/login" className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-gray-200 hover:text-blue-600 text-xl font-normal">Log In</Link>
//               <Link to="/signup" className="border border-blue-600 text-blue-600 px-10 py-2 rounded hover:bg-gray-200 hover:border-none text-xl font-normal">Sign Up</Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
//           {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-white shadow-lg p-4 z-50">
//           <button onClick={closeMobileMenu} className="absolute top-4 right-4 focus:outline-none">
//             <AiOutlineClose size={24} />
//           </button>
//           <div className="flex flex-col items-center space-y-4 mt-8 text-2xl font-medium">
//             <Link to="/" onClick={closeMobileMenu} className="hover:text-blue-600">Home</Link>
//             <div onClick={() => { handleAboutClick(); closeMobileMenu(); }} className="hover:text-blue-600 cursor-pointer">About</div>
//             <div onClick={() => { handleHelpClick(); closeMobileMenu(); }} className="hover:text-blue-600 cursor-pointer">Features</div>
//             <Link 
//               to="/aipage" 
//               onClick={closeMobileMenu} 
//               className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
//             >
//               <AiOutlineRobot className="mr-2 text-2xl" />
//               <span>Ask TAB AI</span>
//             </Link>
//             {firstName ? (
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="py-2">Hi, {firstName}</div>
//                 <button
//                   onClick={() => {
//                     setFirstName(null);
//                     closeMobileMenu();
//                     // Additional logout logic here
//                   }}
//                   className="w-full text-center text-blue-600 py-2 px-4 rounded"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <Link to="/login" onClick={closeMobileMenu} className="bg-blue-600 text-white px-12 py-3 rounded text-xl font-normal">Log In</Link>
//                 <Link to="/signup" onClick={closeMobileMenu} className="border border-blue-600 text-blue-600 px-12 py-3 rounded text-xl font-normal">Sign Up</Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineRobot } from 'react-icons/ai';
import { scroller } from 'react-scroll';

const NavBar = ({ firstName, setFirstName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('about-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  const handleHelpClick = () => {
    navigate('/');
    setTimeout(() => {
      scroller.scrollTo('help-section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }, 100);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center px-8 md:px-16 py-4">
      <div className="flex items-center">
        <div className="bg-logo-b bg-no-repeat bg-contain w-[200px] h-[60px]"></div>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-lg font-semibold ml-auto">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <div onClick={handleAboutClick} className="hover:text-blue-600 cursor-pointer">About</div>
        <div onClick={handleHelpClick} className="hover:text-blue-600 cursor-pointer">Features</div>
        <Link 
          to="/aipage" 
          className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
        >
          <AiOutlineRobot className="mr-2 text-2xl" />
          <span>Ask TAB AI</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          {firstName ? (
            <div className="relative group">
              <div className="hover: cursor-pointer text-blue-600 text-lg font-medium">Hi, {firstName}</div>
              <div className="absolute hidden group-hover:block bg-gray-100 text-black text-lg font-medium py-2 px-4 rounded-md shadow-lg z-50">
                <button
                  onClick={() => {
                    setFirstName(null);
                    // Additional logout logic here
                  }}
                  className="w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="bg-blue-600 text-white px-10 py-2 rounded hover:bg-gray-200 hover:text-blue-600 text-xl font-normal">Log In</Link>
              <Link to="/signup" className="border border-blue-600 text-blue-600 px-10 py-2 rounded hover:bg-gray-200 hover:border-none text-xl font-normal">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg p-4 z-50">
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 focus:outline-none">
            <AiOutlineClose size={24} />
          </button>
          <div className="flex flex-col items-center space-y-4 mt-8 text-2xl font-medium">
            <Link to="/" onClick={closeMobileMenu} className="hover:text-blue-600">Home</Link>
            <div onClick={() => { handleAboutClick(); closeMobileMenu(); }} className="hover:text-blue-600 cursor-pointer">About</div>
            <div onClick={() => { handleHelpClick(); closeMobileMenu(); }} className="hover:text-blue-600 cursor-pointer">Features</div>
            <Link 
              to="/aipage" 
              onClick={closeMobileMenu} 
              className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
            >
              <AiOutlineRobot className="mr-2 text-2xl" />
              <span>Ask TAB AI</span>
            </Link>
            {firstName ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="py-2">Hi, {firstName}</div>
                <button
                  onClick={() => {
                    setFirstName(null);
                    closeMobileMenu();
                    // Additional logout logic here
                  }}
                  className="w-full text-center text-blue-600 py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={closeMobileMenu} className="bg-blue-600 text-white px-12 py-3 rounded text-xl font-normal">Log In</Link>
                <Link to="/signup" onClick={closeMobileMenu} className="border border-blue-600 text-blue-600 px-12 py-3 rounded text-xl font-normal">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

