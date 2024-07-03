import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.email || !formData.name || !formData.subject || !formData.message) {
      setNotification('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://take-a-break-anny.onrender.com/contact/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setNotification('Thank you, the TAB team will reach out shortly.');
        setFormData({
          email: '',
          name: '',
          subject: '',
          message: ''
        });
      } else {
        setNotification('There was a problem submitting your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification('There was a problem submitting your message. Please try again later.');
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        setNotification(null);
      }, 5000); // Hide notification after 5 seconds
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative py-20 md:py-24 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Text Column */}
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
                required // <-- Added required attribute
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required // <-- Added required attribute
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required // <-- Added required attribute
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600"
              />
              <textarea
                name="message"
                placeholder="Your Message Here"
                value={formData.message}
                onChange={handleChange}
                required // <-- Added required attribute
                className="mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 focus:border-blue-600 h-24"
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
            {notification && (
              <div className="mt-4 text-center text-red-600 font-medium">
                {notification}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


