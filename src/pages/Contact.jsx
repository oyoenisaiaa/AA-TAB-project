// import React, { useState, useEffect } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     fullname: '',
//     subject: '',
//     message: ''
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.fullname || !formData.subject || !formData.message) {
//       setNotification('Please fill in all fields.');
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const response = await fetch('https://take-a-break-anny.onrender.com/contact/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           fullname: formData.fullname, // Update to fullname
//           subject: formData.subject,
//           message: formData.message
//         })
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setNotification('Thank you, the TAB team will reach out shortly.');
//         setFormData({
//           email: '',
//           fullname: '',
//           subject: '',
//           message: ''
//         });
//       } else {
//         setNotification(`Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setNotification('There was a problem submitting your message. Please try again later.');
//     } finally {
//       setSubmitting(false);
//       setTimeout(() => {
//         setNotification(null);
//       }, 10000);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="relative py-20 md:py-24 max-w-screen-xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="w-full max-w-md mx-auto md:max-w-none md:ml-12 lg:ml-16">
//           <div className="lg:py-8 text-center md:text-left">
//             <div className="text-xl font-semibold">Contact Us</div>
//             <h2 className="mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
//               Feel free to <span className="text-blue-600">get in touch</span> with us.
//             </h2>
//             <p className="mt-4 text-center md:text-left text-base lg:text-lg text-gray-600">
//               We would love to hear from you!
//             </p>
//             <form onSubmit={handleSubmit} className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <input
//                 type="text"
//                 name="fullname" 
//                 placeholder="Full Name"
//                 value={formData.fullname}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message Here"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600 h-24"
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`inline-block mt-8 bg-blue-600 text-white text-medium font-semibold px-6 py-3 rounded hover:bg-blue-700 ${
//                   submitting ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {submitting ? 'Sending...' : 'Send'}
//               </button>
//             </form>
//             {notification && (
//               <div className="mt-4 text-center text-blue-600 font-medium">
//                 {notification}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// this gives two notification colors
// import React, { useState, useEffect } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     fullname: '',
//     subject: '',
//     message: ''
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [notification, setNotification] = useState(null);
//   const [notificationType, setNotificationType] = useState(null); // New state for notification type

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.fullname || !formData.subject || !formData.message) {
//       setNotification('Please fill in all fields.');
//       setNotificationType('error'); // Set notification type to error
//       return;
//     }

//     setSubmitting(true);

//     try {
//       const response = await fetch('https://take-a-break-anny.onrender.com/contact/message', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           fullname: formData.fullname,
//           subject: formData.subject,
//           message: formData.message
//         })
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setNotification('Thank you, the TAB team will reach out shortly.');
//         setNotificationType('success'); // Set notification type to success
//         setFormData({
//           email: '',
//           fullname: '',
//           subject: '',
//           message: ''
//         });
//       } else {
//         setNotification(`Error: ${result.message}`);
//         setNotificationType('error'); // Set notification type to error
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setNotification('There was a problem submitting your message. Please try again later.');
//       setNotificationType('error'); // Set notification type to error
//     } finally {
//       setSubmitting(false);
//       setTimeout(() => {
//         setNotification(null);
//         setNotificationType(null); // Reset notification type
//       }, 10000);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="relative py-20 md:py-24 max-w-screen-xl mx-auto">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <div className="w-full max-w-md mx-auto md:max-w-none md:ml-12 lg:ml-16">
//           <div className="lg:py-8 text-center md:text-left">
//             <div className="text-xl font-semibold">Contact Us</div>
//             <h2 className="mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
//               Feel free to <span className="text-blue-600">get in touch</span> with us.
//             </h2>
//             <p className="mt-4 text-center md:text-left text-base lg:text-lg text-gray-600">
//               We would love to hear from you!
//             </p>
//             <form onSubmit={handleSubmit} className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <input
//                 type="text"
//                 name="fullname"
//                 placeholder="Full Name"
//                 value={formData.fullname}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message Here"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600 h-24"
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={submitting}
//                 className={`inline-block mt-8 bg-blue-600 text-white text-medium font-semibold px-6 py-3 rounded hover:bg-blue-700 ${
//                   submitting ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//               >
//                 {submitting ? 'Sending...' : 'Send'}
//               </button>
//             </form>
//             {notification && (
//               <div
//                 className={`mt-4 text-center font-medium ${
//                   notificationType === 'success' ? 'text-blue-600' : 'text-red-600'
//                 }`}
//               >
//                 {notification}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState({ message: null, type: null });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, fullname, subject, message } = formData;

    if (!email || !fullname || !subject || !message) {
      setNotification({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://take-a-break-anny.onrender.com/contact/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email, fullname, subject, message })
      });

      const result = await response.json();

      if (response.ok) {
        setNotification({ message: 'Thank you, the TAB team will reach out shortly.', type: 'success' });
        setFormData({
          email: '',
          fullname: '',
          subject: '',
          message: ''
        });
      } else {
        setNotification({ message: `Error: ${result.message}`, type: 'error' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification({ message: 'There was a problem submitting your message. Please try again later.', type: 'error' });
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setNotification({ message: null, type: null });
      }, 10000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative py-20 md:py-24 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full max-w-md mx-auto md:max-w-none md:ml-12 lg:ml-16">
          <div className="lg:py-8 text-center md:text-left">
            <div className="text-xl font-semibold">Contact Us</div>
            <h2 className="mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight">
              Feel free to <span className="text-blue-600">get in touch</span> with us.
            </h2>
            <p className="mt-4 text-center md:text-left text-base lg:text-lg text-gray-600">
              We would love to hear from you!
            </p>
            <form onSubmit={handleSubmit} className="mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-6 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="mt-6 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-6 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <textarea
                name="message"
                placeholder="Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-6 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600 h-24"
              ></textarea>
              <button
                type="submit"
                disabled={submitting}
                className={`inline-block mt-8 bg-blue-600 text-white text-medium font-semibold px-6 py-3 rounded hover:bg-blue-700 ${
                  submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </form>
            {notification.message && (
              <div
                className={`mt-4 text-center font-medium ${
                  notification.type === 'success' ? 'text-blue-600' : 'text-red-600'
                }`}
              >
                {notification.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
