// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const SignUp = ({ setFirstName }) => {
//   const [firstName, setFirstNameInput] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     setFirstName(firstName);
//     navigate('/');
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-2xl mb-4">Sign Up</h2>
//         <form onSubmit={handleSignUp}>
//           <div className="mb-4">
//             <label className="block mb-2">First Name / Username</label>
//             <input
//               type="text"
//               className="border p-2 w-full"
//               value={firstName}
//               onChange={(e) => setFirstNameInput(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Last Name</label>
//             <input
//               type="text"
//               className="border p-2 w-full"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               className="border p-2 w-full"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2">Password</label>
//             <input
//               type="password"
//               className="border p-2 w-full"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
//         </form>
//         <p className="mt-4 text-sm text-gray-600">
//           Already have an account?{' '}
//           <button className="text-blue-600 underline" onClick={() => navigate('/login')}>Log In</button>
//         </p>
//         <p className="mt-2 text-sm text-gray-600">
//           <button className="text-blue-600 underline" onClick={() => navigate('/')}>Close</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// const SignUp = ({ setFirstName }) => {
//   const [firstName, setFirstNameInput] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);


//   const handleSignUp = (e) => {
//     e.preventDefault();
//     setFirstName(firstName);
//     navigate('/');
//   };

//   return (
//     <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
//       <form
//         className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
//         onSubmit={handleSignUp}
//       >
//         <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>

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
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
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
//           Sign Up
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
//           <label>Already have an account?</label>{" "}
//           <a
//             href="#"
//             className="text-blue-600 hover:underline"
//             onClick={() => navigate('/login')}
//           >
//             Log In
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

// const SignUp = ({ setFirstName }) => {
//   const [firstName, setFirstNameInput] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [notification, setNotification] = useState(null);
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     // Scroll to the top of the page when the component mounts
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     // Password validation rules
//     const passwordRegex = {
//       length: /^.{8,}$/,
//       uppercase: /[A-Z]/,
//       lowercase: /[a-z]/,
//       number: /[0-9]/,
//       specialChar: /[^A-Za-z0-9]/
//     };

//     const validationErrors = [];
    
//     // Check each password rule
//     if (!passwordRegex.length.test(password)) {
//       validationErrors.push('Password must be at least 8 characters long');
//     }
//     if (!passwordRegex.uppercase.test(password)) {
//       validationErrors.push('Password must contain at least one uppercase letter');
//     }
//     if (!passwordRegex.lowercase.test(password)) {
//       validationErrors.push('Password must contain at least one lowercase letter');
//     }
//     if (!passwordRegex.number.test(password)) {
//       validationErrors.push('Password must contain at least one number');
//     }
//     if (!passwordRegex.specialChar.test(password)) {
//       validationErrors.push('Password must contain at least one special character');
//     }

//     if (validationErrors.length > 0) {
//       setNotification(`Error: ${validationErrors.join(', ')}`);
//       return;
//     }

//     try {
//       const response = await fetch('https://take-a-break-anny.onrender.com/sign-up', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setFirstName(firstName);
//         navigate('/');
//       } else {
//         setNotification(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setNotification('There was a problem signing up. Please try again later.');
//     } finally {
//       setTimeout(() => {
//         setNotification(null);
//       }, 10000); // Notification duration of 10 seconds
//     }
//   };

//   return (
//     <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
//       <form
//         className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
//         onSubmit={handleSignUp}
//       >
//         <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>

//         {notification && (
//           <div className="mt-4 text-center text-red-600 font-medium">
//             {notification}
//           </div>
//         )}

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
//             type="text"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
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

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 w-1/2 mx-auto"
//         >
//           Sign Up
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
//           <label>Already have an account?</label>{" "}
//           <a
//             href="#"
//             className="text-blue-600 hover:underline"
//             onClick={() => navigate('/login')}
//           >
//             Log In
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setFirstName }) => {
  const [firstName, setFirstNameInput] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password validation rules
    const passwordRegex = {
      length: /^.{8,}$/,
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      specialChar: /[^A-Za-z0-9]/
    };

    const validationErrors = [];
    
    // Check each password rule
    if (!passwordRegex.length.test(password)) {
      validationErrors.push('Password must be at least 8 characters long');
    }
    if (!passwordRegex.uppercase.test(password)) {
      validationErrors.push('Password must contain at least one uppercase letter');
    }
    if (!passwordRegex.lowercase.test(password)) {
      validationErrors.push('Password must contain at least one lowercase letter');
    }
    if (!passwordRegex.number.test(password)) {
      validationErrors.push('Password must contain at least one number');
    }
    if (!passwordRegex.specialChar.test(password)) {
      validationErrors.push('Password must contain at least one special character');
    }

    if (validationErrors.length > 0) {
      setNotification(`Error: ${validationErrors.join(', ')}`);
      return;
    }

    try {
      const response = await fetch('https://take-a-break-anny.onrender.com/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
      });

      const result = await response.json();

      if (response.ok) {
        setFirstName(firstName);
        navigate('/');
      } else {
        setNotification(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setNotification('There was a problem signing up. Please try again later.');
    } finally {
      setTimeout(() => {
        setNotification(null);
      }, 10000); // Notification duration of 10 seconds
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
      <form
        className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
        onSubmit={handleSignUp}
      >
        <h1 className="text-2xl font-bold text-center mb-4">Create Account</h1>

        {notification && (
          <div className="mt-4 text-center text-red-600 font-medium">
            {notification}
          </div>
        )}

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
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

        <div className="flex flex-col mb-4">
          <input
            className="border rounded-md p-2 m-1"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200 w-1/2 mx-auto"
        >
          Sign Up
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
          <label>Already have an account?</label>{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            onClick={() => navigate('/login')}
          >
            Log In
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

