import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ setFirstName }) => {
  const [firstName, setFirstNameInput] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setFirstName(firstName); 
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
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
          
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Log In</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <button className="text-blue-600 underline" onClick={() => navigate('/signup')}>Create an account</button>
        </p>
        <p className="mt-2 text-sm text-gray-600">
          <button className="text-blue-600 underline" onClick={() => navigate('/')}>Close</button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;


// import React, { useState } from "react";
// import'../App.css';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remindMe, setRemindMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Remind me:", remindMe);
//     navigate('/');
    
//   };

//   return (
//     <div className ='bg-white-50 flex flex-col justify-center'>
//       <form className='max-w-[600px] w-full mx-auto bg-white p-4 flex flex-col justify-center' onSubmit={handleSubmit}>
//         <h1 className='text-1xl font-bold text-center py-1'>Log into your account</h1>
//         <div className='flex flex-col py-1'>
//           <input className= 'border rounded-md p-1 m-1'
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required />
//         </div>

//         <div className= 'flex flex-col py-1'>
//           <input className='border rounded-md p-1 m-1'
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required />
//             </div>
  
      
//       <div className = 'checkbox text-xs'>
//         <input className ='small-checkbox' type='checkbox' name='' checked={remindMe}
//                 onChange={(e) => setRemindMe(e.target.checked)}
//               />{" "} 
//         <label> Remember me</label>

//           <a href="/resetPassword"> forgot password?</a>
  
//       </div>

//         <button type="submit" className="login-button bg-blue-600">
//           Login
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
//           <label>Don't have an account?</label> <span><a href="/SignUp"> Sign up</a></span> 
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
