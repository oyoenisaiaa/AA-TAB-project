import React, { useState } from "react";

// const ForgotPasswordModal = ({ onClose }) => {
//   const [email, setEmail] = useState("");

//   const handleForgotPasswordSubmit = (e) => {
//     e.preventDefault();
//     // Handle password reset logic
//     console.log("Password reset link sent to:", email);
//     onClose();
//   };

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState('');

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://take-a-break-anny.onrender.com/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.ok) {
        setNotification(`Password reset instructions sent to ${email}`);
        setEmail('');
        setTimeout(() => {
          onClose();
        }, 5000); // Close modal after 5 seconds
      } else {
        setNotification(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      setNotification('There was a problem. Please try again later.');
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-50 fixed inset-0" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-50">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <p className="mb-4">Fill in your registered email address to receive a reset link.</p>
        <form onSubmit={handleForgotPasswordSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="border rounded-md p-2 w-full"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send Reset Link
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-200 text-black p-2 rounded-md hover:bg-gray-300 transition duration-200"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;


// import React, { useState } from 'react';

// const ForgotPasswordModal = ({ isOpen, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [notification, setNotification] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://take-a-break-anny.onrender.com/auth/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ email })
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setNotification(`Password reset instructions sent to ${email}`);
//         setEmail('');
//         setTimeout(() => {
//           onClose();
//         }, 5000); // Close modal after 5 seconds
//       } else {
//         setNotification(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error resetting password:', error);
//       setNotification('There was a problem. Please try again later.');
//     }
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
//         isOpen ? 'block' : 'hidden'
//       }`}
//     >
//       <div className="bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
//         {notification && (
//           <div className="mb-4 text-center text-red-600 font-medium">
//             {notification}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="flex flex-col mb-4">
//             <label htmlFor="email" className="mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="border rounded-md p-2"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
//             >
//               Reset Password
//             </button>
//             <button
//               type="button"
//               className="ml-2 bg-gray-300 text-gray-800 p-2 rounded-md hover:bg-gray-400 transition duration-200"
//               onClick={onClose}
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordModal;

