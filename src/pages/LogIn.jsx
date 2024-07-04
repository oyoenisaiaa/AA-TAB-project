// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// const LogIn = ({ setFirstName }) => {
//   const [firstName, setFirstNameInput] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setFirstName(firstName);
//     navigate('/');
//   };

//   return (
//     <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
//       <form
//         className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
//         onSubmit={handleLogin}
//       >
//         <h1 className="text-2xl font-bold text-center mb-4">Log into your account</h1>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="text"
//             placeholder="First Name / Username"
//             value={firstName}
//             onChange={(e) => setFirstNameInput(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 w-1/2 mx-auto"
//         >
//           Log In
//         </button>

//         <div className="flex items-center my-4">
//           <hr className="flex-grow" />
//           <span className="px-2">OR</span>
//           <hr className="flex-grow" />
//         </div>

//         <button
//           type="button"
//           className="bg-white text-black border p-2 rounded-md mb-2 flex items-center justify-center hover:bg-gray-100 transition duration-200"
//         >
//           <img
//             src="https://img.icons8.com/color/16/000000/google-logo.png"
//             alt="Google logo"
//             className="mr-2"
//           />
//           Continue with Google
//         </button>

//         <button
//           type="button"
//           className="bg-white text-black border p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200"
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/16/0078FF/facebook-new.png"
//             alt="Facebook logo"
//             className="mr-2"
//           />
//           Continue with Facebook
//         </button>

//         <div className="text-center mt-4">
//           <label>Don't have an account?</label>{" "}
//           <a
//             href="#"
//             className="text-blue-600 hover:underline"
//             onClick={() => navigate('/signup')}
//           >
//             Sign Up
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LogIn;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import ForgotPasswordModal from './ForgotPasswordModal'; 

// const LogIn = ({ setFirstName }) => {
//   const [firstName, setFirstNameInput] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://take-a-break-anny.onrender.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ firstName, email, password })
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setFirstName(firstName);
//         setIsLoggedIn(true);
//         navigate('/');
//       } else {
//         setNotification(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setNotification('There was a problem logging in. Please try again later.');
//     } finally {
//       setTimeout(() => {
//         setNotification(null);
//       }, 10000); // Notification duration of 10 seconds
//     }
//   };

//   const handleForgotPasswordClick = () => {
//     setShowForgotPasswordModal(true);
//   };

//   const handleForgotPasswordClose = () => {
//     setShowForgotPasswordModal(false);
//   };

//   const handleLogout = () => {
//     setFirstName('');
//     setIsLoggedIn(false);
//     setEmail('');
//     setPassword('');
//     setFirstNameInput('');
//     navigate('/');
//   };

//   return (
//     <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
//       <form
//         className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
//         onSubmit={handleLogin}
//       >
//         {notification && (
//           <div className="mb-4 text-center text-red-600 font-medium">
//             {notification}
//           </div>
//         )}
//         <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="text"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setFirstNameInput(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex justify-between items-center mb-4">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={rememberMe}
//               onChange={(e) => setRememberMe(e.target.checked)}
//             />
//             Remember Me
//           </label>
//           <a
//             href="#"
//             className="text-blue-600 hover:underline"
//             onClick={handleForgotPasswordClick}
//           >
//             Forgot Password?
//           </a>
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 w-1/2 mx-auto"
//         >
//           Log In
//         </button>

//         <div className="flex items-center my-4">
//           <hr className="flex-grow" />
//           <span className="px-2">OR</span>
//           <hr className="flex-grow" />
//         </div>

//         <button
//           type="button"
//           className="bg-white text-black border p-2 rounded-md mb-2 flex items-center justify-center hover:bg-gray-100 transition duration-200"
//         >
//           <img
//             src="https://img.icons8.com/color/16/000000/google-logo.png"
//             alt="Google logo"
//             className="mr-2"
//           />
//           Continue with Google
//         </button>

//         <button
//           type="button"
//           className="bg-white text-black border p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200"
//         >
//           <img
//             src="https://img.icons8.com/ios-filled/16/0078FF/facebook-new.png"
//             alt="Facebook logo"
//             className="mr-2"
//           />
//           Continue with Facebook
//         </button>

//         <div className="text-center mt-4">
//           <label>Don't have an account?</label>{" "}
//           <a
//             href="#"
//             className="text-blue-600 hover:underline"
//             onClick={() => navigate('/signup')}
//           >
//             Sign Up
//           </a>
//         </div>
//       </form>
//       {showForgotPasswordModal && (
//         <ForgotPasswordModal onClose={handleForgotPasswordClose} />
//       )}
//       {isLoggedIn && (
//         <div className="absolute top-4 right-4">
//           <div className="relative group">
//             <span className="text-blue-600">Hi, {firstName}</span>
//             <div className="absolute hidden group-hover:block mt-2">
//               <button
//                 onClick={handleLogout}
//                 className="bg-gray-200 text-black p-2 rounded-md hover:bg-gray-300 transition duration-200 w-full text-center md:text-black md:bg-gray-200 md:hover:bg-gray-300 md:p-2 md:rounded-md md:w-full"
//               >
//                 Sign out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LogIn;



import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ForgotPasswordModal from './ForgotPasswordModal'; 

const LogIn = ({ setFirstName }) => {
  const [firstName, setFirstNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://take-a-break-anny.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ firstName, email, password })
      });

      const result = await response.json();

      if (response.ok) {
        setFirstName(firstName);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setNotification(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setNotification('There was a problem logging in. Please try again later.');
    } finally {
      setTimeout(() => {
        setNotification(null);
      }, 10000); // Notification duration of 10 seconds
    }
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordModal(true);
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPasswordModal(false);
  };

  const handleLogout = () => {
    setFirstName('');
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setFirstNameInput('');
    navigate('/');
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
      <form
        className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
        onSubmit={handleLogin}
      >
        {notification && (
          <div className="mb-4 text-center text-red-600 font-medium">
            {notification}
          </div>
        )}
        <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>

        <div className="flex flex-col mb-4">
          <input
            className="border rounded-md p-2 m-1"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstNameInput(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <input
            className="border rounded-md p-2 m-1"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <input
            className="border rounded-md p-2 m-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a
            href="#"
            className="text-blue-600 hover:underline"
            onClick={handleForgotPasswordClick}
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 w-1/2 mx-auto"
        >
          Log In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow" />
          <span className="px-2">OR</span>
          <hr className="flex-grow" />
        </div>

        <button
          type="button"
          className="bg-white text-black border p-2 rounded-md mb-2 flex items-center justify-center hover:bg-gray-100 transition duration-200"
        >
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google logo"
            className="mr-2"
          />
          Continue with Google
        </button>

        <button
          type="button"
          className="bg-white text-black border p-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200"
        >
          <img
            src="https://img.icons8.com/ios-filled/16/0078FF/facebook-new.png"
            alt="Facebook logo"
            className="mr-2"
          />
          Continue with Facebook
        </button>

        <div className="text-center mt-4">
          <label>Don't have an account?</label>{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </a>
        </div>
      </form>
      {showForgotPasswordModal && (
        <ForgotPasswordModal onClose={handleForgotPasswordClose} />
      )}
      {isLoggedIn && (
        <div className="absolute top-4 right-4">
          <div className="relative group">
            <span className="text-blue-600">Hi, {firstName}</span>
            <div className="absolute hidden group-hover:block mt-2">
              <button
                onClick={handleLogout}
                className="bg-gray-200 text-black p-2 rounded-md hover:bg-gray-300 transition duration-200 w-full text-center md:text-black md:bg-gray-200 md:hover:bg-gray-300 md:p-2 md:rounded-md md:w-full"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
