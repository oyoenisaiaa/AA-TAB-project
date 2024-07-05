// import React, { useEffect, useState } from 'react';
// import { HiMiniBellAlert } from "react-icons/hi2";

// const Alert = ({ message }) => {
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     // Setting timer to show alert after set minutes
//     const timer = setTimeout(() => {
//       setShowAlert(true);
//     }, 60000); // 60000 milliseconds = 1 minute

//     // Cleanup function to clear the timeout if the component unmounts in DOM i.e user navigates away
//     return () => clearTimeout(timer); 
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <>
//       {showAlert && (
//         <div className="bg-blue-500 text-white px-6 py-4 border-0 rounded relative mb-4">
//           <span className="text-xl inline-block mr-5 align-middle bounce">
//             <HiMiniBellAlert />
//           </span>

//           <span className="inline-block align-middle mr-8 text-base font-semibold">
//             {message}
//           </span>

//           <button
//             className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
//             onClick={() => setShowAlert(false)}
//           >
//             <span>×</span>
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Alert;


import '../App.css'; 
import React, { useEffect, useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';

const Alert = ({ message }) => {
  const [showAlert, setShowAlert] = useState(false);
  

  useEffect(() => {
    // Setting timer to show alert after set minutes
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 60000); // 60000 milliseconds = 1 minute

    // Cleanup function to clear the timeout if the component unmounts in DOM i.e user navigates away
    return () => clearTimeout(timer); 
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      {showAlert && (
        <div className="bg-blue-500 text-white px-6 py-4 border-0 rounded relative mb-4">
          <span className="text-xl inline-block mr-5 align-middle shake">
            <HiOutlineBell />
          </span>

          <span className="inline-block align-middle mr-8 text-base font-semibold">
            {message}
          </span>

          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={() => setShowAlert(false)}
          >
            <span>×</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;






// 1 minute: 1 * 60 * 1000 = 60,000 milliseconds
// 2 minutes: 2 * 60 * 1000 = 120,000 milliseconds
// 3 minutes: 3 * 60 * 1000 = 180,000 milliseconds
// 4 minutes: 4 * 60 * 1000 = 240,000 milliseconds
// 5 minutes: 5 * 60 * 1000 = 300,000 milliseconds
// 6 minutes: 6 * 60 * 1000 = 360,000 milliseconds
// 7 minutes: 7 * 60 * 1000 = 420,000 milliseconds
// 8 minutes: 8 * 60 * 1000 = 480,000 milliseconds
// 9 minutes: 9 * 60 * 1000 = 540,000 milliseconds
// 10 minutes: 10 * 60 * 1000 = 600,000 milliseconds
// 11 minutes: 11 * 60 * 1000 = 660,000 milliseconds
// 12 minutes: 12 * 60 * 1000 = 720,000 milliseconds
// 13 minutes: 13 * 60 * 1000 = 780,000 milliseconds
// 14 minutes: 14 * 60 * 1000 = 840,000 milliseconds
// 15 minutes: 15 * 60 * 1000 = 900,000 milliseconds

