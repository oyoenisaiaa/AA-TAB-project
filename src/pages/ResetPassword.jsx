// import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';

// const PasswordResetForm = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handlePasswordReset = (e) => {
//     e.preventDefault();
//     if (newPassword === confirmPassword) {
//       // Handle password reset logic here
//       console.log("Password has been reset successfully.");
//       navigate('/login');
//     } else {
//       console.log("Passwords do not match.");
//     }
//   };

//   return (
//     <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
//       <form
//         className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
//         onSubmit={handlePasswordReset}
//       >
//         <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>

//         <div className="flex flex-col mb-4">
//           <input
//             className="border rounded-md p-2 m-1"
//             type="password"
//             placeholder="New Password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
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
//           Reset Password
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PasswordResetForm;



import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PasswordResetForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch('https://take-a-break-anny.onrender.com/auth/reset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword }),
        });

        if (response.ok) {
          console.log("Password has been reset successfully.");
          navigate('/login');
        } else {
          console.error('Failed to reset password.');
          // Handle error scenario, maybe show a message to the user
        }
      } catch (error) {
        console.error('Error resetting password:', error);
        // Handle error scenario, maybe show a message to the user
      }
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col justify-center min-h-screen py-6">
      <form
        className="max-w-lg w-full mx-auto bg-white p-8 rounded-lg shadow-md flex flex-col justify-center"
        onSubmit={handlePasswordReset}
      >
        <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>

        <div className="flex flex-col mb-4">
          <input
            className="border rounded-md p-2 m-1"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default PasswordResetForm;


