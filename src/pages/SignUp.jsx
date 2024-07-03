import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setFirstName }) => {
  const [firstName, setFirstNameInput] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    setFirstName(firstName);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block mb-2">First Name / Username</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={firstName}
              onChange={(e) => setFirstNameInput(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="border p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="border p-2 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <button className="text-blue-600 underline" onClick={() => navigate('/login')}>Log In</button>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          <button className="text-blue-600 underline" onClick={() => navigate('/')}>Close</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


// import React, { useState } from "react";
// //import './index.css'
// //import'./App.css';

// const CreateAccountForm = () => {
//     const [firstName, setfirstName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("firstName:", firstName);
//     console.log("lastName:", lastName);
//     console.log("Email:", email);
//     console.log("Password:", password);
    
//   };

//   return (
//        <div className ='bg-white-50 flex flex-col justify-center'>
//       <form className='max-w-[600px] w-full mx-auto bg-white p-4 flex flex-col justify-center'  onSubmit={handleSubmit}>
//         <h1 className='text-1xl font-bold text-center py-1'>Create Account</h1>

//         <div className='flex flex-col py-1'>
//           <input className= 'border rounded-md p-1 m-1'
//             type="firstName"
//             placeholder="First Name"
//             value={firstName}
//             onChange={(e) => setfirstName(e.target.value)}
//             required
//           />
//             </div>

//           <div className='flex flex-col py-1'>
//           <input className= 'border rounded-md p-1 m-1'
//             type="lastName"
//             placeholder="Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//           </div>

//         <div className='flex flex-col py-1'>
//           <input className= 'border rounded-md p-1 m-1'
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className= 'flex flex-col py-1'>
//           <input className='border rounded-md p-1 m-1'
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required />
//             </div>

//         <button type="submit" className="sign-button">
//           Sign Up
//         </button>
//         <div
//           style={{ display: "flex", alignItems: "center", margin: "20px 0" }}
//         >
//           <hr style={{ flexGrow: 1 }} />
//           <span style={{ padding: "0 10px" }}>OR</span>
//           <hr style={{ flexGrow: 1 }} />
//         </div>
//         <button type="button" className="google-button">
//           <img
//             src="https://img.icons8.com/color/16/000000/google-logo.png"
//             alt="Google logo"
//           />
//           Continue with Google
//         </button>
//         <button type="button" className="facebook-button">
//           <img
//             src="https://img.icons8.com/ios-filled/16/0078FF/facebook-new.png"
//             alt="Facebook logo"
//           />
//           Continue with Facebook
//         </button>
//         <div className="signup-link">
//           <lable> Already have an account?</lable> <span><a href="#"> Log in </a></span>
//         </div>
//       </form>
//     </div>
// );

// };


// export default CreateAccountForm;
