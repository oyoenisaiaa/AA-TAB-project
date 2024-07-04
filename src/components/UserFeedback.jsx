import React, { useState } from 'react';
import { VscFeedback } from "react-icons/vsc";

const UserFeedback = () => {
  const [feedback, setFeedback] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = 'https://take-a-break-anny.onrender.com/contact/feedback';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feedback }), // Ensure the key matches the backend
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Feedback submitted:', data);
        setFeedback(""); // Clear the input field after submission
        setNotification('Feedback submitted successfully!');
      } else {
        setNotification(`Error: ${data.message || 'Failed to submit feedback'}`);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setNotification('There was an error submitting your feedback. Please try again later.');
    } finally {
      setTimeout(() => {
        setNotification("");
      }, 5000); // Clear notification after 5 seconds
    }
  };

  return (
    <div className="bg-blue-100 py-20 px-8 md:px-14 pt-10 pb-10 text-center mt-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 font-be-vietnam-pro">Add your feedback</h2>
        {notification && (
          <div className="mb-4 text-center text-red-600 font-medium">
            {notification}
          </div>
        )}
        <div className="flex flex-col items-center justify-center relative">
          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="relative">
              <textarea
                className="w-full h-20 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                placeholder="We welcome your feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
              <div className="absolute top-0 left-2 transform -translate-y-1/2 bg-white rounded-full shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center">
                  <VscFeedback className="text-3xl text-blue-600" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-1/3 mx-auto bg-blue-600 text-white text-medium py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
