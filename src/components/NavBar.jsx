// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const NavBar = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [firstName, setFirstName] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   <li><a href="#about">About</a></li>

//   return (
//     <>
//     <nav className="bg-white shadow-lg p-4 flex justify-between items-center px-8 md:px-16 py-4  ">
//       <div className="flex items-center space-x-4">
//         {/* Logo */}
//         <div className="bg-logo-s bg-no-repeat bg-contain w-12 h-12"></div>
//       </div>
//       <div className="hidden md:flex space-x-8 flex-1 justify-center text-2xl font-medium">
//         <Link to="/" className="hover:text-blue-600">Home</Link>
//         <Link to="/about" className="hover:text-blue-600">About</Link>
//         <Link to="/features" className="hover:text-blue-600">Features</Link>
//         <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//         <Link to="/services" className="hover:text-blue-600">Services</Link>
//         <Link to="/shop" className="hover:text-blue-600 flex items-center space-x-2">
//           <span>Shop</span> <FaShoppingCart />
//         </Link>
//       </div>
//       <div className="hidden md:flex items-center space-x-4">
//         {firstName ? (
//           <div>Hi, {firstName}</div>
//         ) : (
//           <>
//             <button onClick={() => setShowLoginModal(true)} className="bg-blue-600 text-white px-12 py-3 rounded hover:bg-gray-200 hover:text-blue-600 text-xl font-normal">Log In</button>
//             <button onClick={() => setShowRegisterModal(true)} className="border border-blue-600 text-blue-600 px-12 py-3 rounded hover:bg-gray-200 hover:border-none text-xl font-normal">Sign Up</button>
//           </>
//         )}
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
//           <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
//             <AiOutlineClose size={24} />
//           </button>
//           <div className="flex flex-col items-center space-y-4 mt-8 text-2xl font-medium">
//             <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Home</Link>
//             <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">About</Link>
//             <Link to="/features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Features</Link>
//             <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Contact Us</Link>
//             <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Services</Link>
//             <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 flex items-center space-x-2">
//               <span>Shop</span> <FaShoppingCart />
//             </Link>
//             {firstName ? (
//               <div className="block py-2">Hi, {firstName}</div>
//             ) : (
//               <>
//                 <button onClick={() => { setShowLoginModal(true); setIsMobileMenuOpen(false); }} className="bg-blue-600 text-white px-12 py-3 rounded text-xl font-normal">Log In</button>
//                 <button onClick={() => { setShowRegisterModal(true); setIsMobileMenuOpen(false); }} className="border border-blue-600 text-blue-600 px-12 py-3 rounded text-xl font-normal">Sign Up</button>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//       </nav>

//       {/* Login Modal */}
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl mb-4">Login</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               // handle login
//               setFirstName('User'); // Example
//               setShowLoginModal(false);
//             }}>
//               <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input type="email" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input type="password" className="border p-2 w-full" required />
//               </div>
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
//             </form>
//             <p className="mt-4">Don't have an account? <button onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }} className="text-blue-600">Register</button></p>
//             <button onClick={() => setShowLoginModal(false)} className="mt-4 text-blue-600">Close</button>
//           </div>
//         </div>
//       )}

//       {/* Register Modal */}
//       {showRegisterModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl mb-4">Register</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               // handle registration
//               setFirstName('New User'); // Example
//               setShowRegisterModal(false);
//             }}>
//               <div className="mb-4">
//                 <label className="block mb-2">First Name</label>
//                 <input type="text" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Last Name</label>
//                 <input type="text" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input type="email" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input type="password" className="border p-2 w-full" required />
//               </div>
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
//             </form>
//             <p className="mt-4">Already have an account? <button onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }} className="text-blue-600">Sign In</button></p>
//             <button onClick={() => setShowRegisterModal(false)} className="mt-4 text-blue-600">Close</button>
//           </div>
//         </div>
//       )}
//      </>
//   );
// };


// export default NavBar;


// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { Link as ScrollLink, scroller } from 'react-scroll';

// const NavBar = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);
//   const [firstName, setFirstName] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleAboutClick = () => {
//     if (location.pathname === '/') {
//       scroller.scrollTo('about', {
//         smooth: true,
//         duration: 500,
//       });
//     } else {
//       navigate('/');
//       setTimeout(() => {
//         scroller.scrollTo('about', {
//           smooth: true,
//           duration: 500,
//         });
//       }, 100);
//     }
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-lg p-4 flex justify-between items-center px-8 md:px-16 py-4">
//         <div className="flex items-center space-x-4">
//           {/* Logo */}
//           <div className="bg-logo-s bg-no-repeat bg-contain w-12 h-12"></div>
//         </div>
//         <div className="hidden md:flex space-x-8 flex-1 justify-center text-2xl font-medium">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <button onClick={handleAboutClick} className="hover:text-blue-600 cursor-pointer">About</button>
//           <Link to="/features" className="hover:text-blue-600">Features</Link>
//           <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
//           <Link to="/services" className="hover:text-blue-600">Services</Link>
//           <Link to="/shop" className="hover:text-blue-600 flex items-center space-x-2">
//             <span>Shop</span> <FaShoppingCart />
//           </Link>
//         </div>
//         <div className="hidden md:flex items-center space-x-4">
//           {firstName ? (
//             <div>Hi, {firstName}</div>
//           ) : (
//             <>
//               <button onClick={() => setShowLoginModal(true)} className="bg-blue-600 text-white px-12 py-3 rounded hover:bg-gray-200 hover:text-blue-600 text-xl font-normal">Log In</button>
//               <button onClick={() => setShowRegisterModal(true)} className="border border-blue-600 text-blue-600 px-12 py-3 rounded hover:bg-gray-200 hover:border-none text-xl font-normal">Sign Up</button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
//             {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="fixed inset-0 bg-white shadow-lg p-4 z-50">
//             <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
//               <AiOutlineClose size={24} />
//             </button>
//             <div className="flex flex-col items-center space-y-4 mt-8 text-2xl font-medium">
//               <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Home</Link>
//               <button onClick={() => { handleAboutClick(); setIsMobileMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">About</button>
//               <Link to="/features" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Features</Link>
//               <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Contact Us</Link>
//               <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Services</Link>
//               <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 flex items-center space-x-2">
//                 <span>Shop</span> <FaShoppingCart />
//               </Link>
//               {firstName ? (
//                 <div className="block py-2">Hi, {firstName}</div>
//               ) : (
//                 <>
//                   <button onClick={() => { setShowLoginModal(true); setIsMobileMenuOpen(false); }} className="bg-blue-600 text-white px-12 py-3 rounded text-xl font-normal">Log In</button>
//                   <button onClick={() => { setShowRegisterModal(true); setIsMobileMenuOpen(false); }} className="border border-blue-600 text-blue-600 px-12 py-3 rounded text-xl font-normal">Sign Up</button>
//                 </>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       Login Modal
//       {showLoginModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl mb-4">Login</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               // handle login
//               setFirstName('User'); // Example
//               setShowLoginModal(false);
//             }}>
//               <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input type="email" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input type="password" className="border p-2 w-full" required />
//               </div>
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
//             </form>
//             <p className="mt-4">Don't have an account? <button onClick={() => { setShowLoginModal(false); setShowRegisterModal(true); }} className="text-blue-600">Register</button></p>
//             <button onClick={() => setShowLoginModal(false)} className="mt-4 text-blue-600">Close</button>
//           </div>
//         </div>
//       )}

//       {/* Register Modal */}
//       {showRegisterModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl mb-4">Register</h2>
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               // handle registration
//               setFirstName('New User'); // Example
//               setShowRegisterModal(false);
//             }}>
//               <div className="mb-4">
//                 <label className="block mb-2">First Name</label>
//                 <input type="text" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Last Name</label>
//                 <input type="text" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Email</label>
//                 <input type="email" className="border p-2 w-full" required />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2">Password</label>
//                 <input type="password" className="border p-2 w-full" required />
//               </div>
//               <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
//             </form>
//             <p className="mt-4">Already have an account? <button onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }} className="text-blue-600">Sign In</button></p>
//             <button onClick={() => setShowRegisterModal(false)} className="mt-4 text-blue-600">Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineRobot } from 'react-icons/ai';
import { scroller } from 'react-scroll';

const NavBar = ({ firstName, setFirstName }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
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

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center px-8 md:px-16 py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="bg-logo-figma bg-no-repeat bg-contain w-[230px] h-[62.42px]"></div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 text-lg font-semibold ml-auto">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <div onClick={handleAboutClick} className="hover:text-blue-600 cursor-pointer">About</div>
        <div onClick={handleHelpClick} className="hover:text-blue-600 cursor-pointer">Features</div>
        <Link 
          to="/aipage" 
          className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
        >
          <AiOutlineRobot className="mr-2 text-2xl" />
          <span>Ask TAB AI or Search</span>
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
              <Link to="/login" className="bg-blue-600 text-white px-12 py-3 rounded hover:bg-gray-200 hover:text-blue-600 text-xl font-normal">Log In</Link>
              <Link to="/signup" className="border border-blue-600 text-blue-600 px-12 py-3 rounded hover:bg-gray-200 hover:border-none text-xl font-normal">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
          {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg p-4 z-50">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
            <AiOutlineClose size={24} />
          </button>
          <div className="flex flex-col items-center space-y-4 mt-8 text-2xl font-medium">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600">Home</Link>
            <div onClick={() => { handleAboutClick(); setIsMobileMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">About</div>
            <div onClick={() => { handleHelpClick(); setIsMobileMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">Features</div>
            <Link 
              to="/aipage" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="relative flex items-center hover:text-blue-600 bg-gradient-to-r from-blue-600 via-gray-300 to-blue-600 text-transparent bg-clip-text font-bold animate-gradient"
            >
              <AiOutlineRobot className="mr-2 text-2xl" />
              <span>Ask TAB AI or Search</span>
            </Link>
            {firstName ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="py-2">Hi, {firstName}</div>
                <button
                  onClick={() => {
                    setFirstName(null);
                    setIsMobileMenuOpen(false);
                    // Additional logout logic here
                  }}
                  className="w-full text-center text-blue-600 py-2 px-4 rounded"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="bg-blue-600 text-white px-12 py-3 rounded text-xl font-normal">Log In</Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="border border-blue-600 text-blue-600 px-12 py-3 rounded text-xl font-normal">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;


