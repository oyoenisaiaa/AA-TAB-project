import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-hero-image bg-cover bg-center h-[500px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-0">
        <div className="mt-4 md:mt-6 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Take a Break</h1>
          <h2 className="text-2xl md:text-4xl capitalize text-left">Because Everyone Deserves A Moment For Themselves.</h2>
        </div>
        <button
          onClick={() => navigate('/signup')}
          className="mt-6 md:mt-8 bg-blue-600 text-white text-center px-12 py-4 rounded text-xl font-normal hover:bg-white hover:text-blue-600"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};


// {/* Register Modal */}
// {showRegisterModal && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//     <div className="bg-white p-8 rounded shadow-lg">
//       <h2 className="text-2xl mb-4">Register</h2>
//       <form onSubmit={(e) => {
//         e.preventDefault();
//         // handle registration
//         setFirstName('New User'); // Example
//         setShowRegisterModal(false);
//       }}>
//         <div className="mb-4">
//           <label className="block mb-2">First Name</label>
//           <input type="text" className="border p-2 w-full" required />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Last Name</label>
//           <input type="text" className="border p-2 w-full" required />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Email</label>
//           <input type="email" className="border p-2 w-full" required />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2">Password</label>
//           <input type="password" className="border p-2 w-full" required />
//         </div>
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
//       </form>
//       <p className="mt-4">Already have an account? <button onClick={() => { setShowRegisterModal(false); setShowLoginModal(true); }} className="text-blue-600">Sign In</button></p>
//       <button onClick={() => setShowRegisterModal(false)} className="mt-4 text-blue-600">Close</button>
//     </div>
//   </div>

export default HeroSection;

