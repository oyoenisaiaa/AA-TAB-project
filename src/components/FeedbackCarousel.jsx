// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { FaQuoteLeft } from 'react-icons/fa';
// import '../App.css';

// const handleDragStart = (e) => e.preventDefault();

// const feedbacks = [
//   {
//     quote: "Take A Break is a must have for people like me, who work and study remotely, and rarely remember to take breaks in between. It helps remind me to step away from my laptop a bit even if it is just for 5 minutes. I love it and think everyone should use it.",
//     name: "Hephzibah Ifeoluwa Owoeye",
//   },
//   {
//     quote: "Taking a break isn't a sign of weakness, but a necessary pause to revitalize. It allows you to return stronger, refreshed, and more focused on achieving your goals.",
//     name: "Fabeyo Olamide",
//   },
//   {
//     quote: "It’s been an incredible experience with the Take a Break application. Not just that this app reminds one when to take break but it gives a recommendation of an activity based on personal features.",
//     name: "Blessing Ozoemena",
//   },
//   {
//     quote: "Take a Break is a game-changer for mental wellness, providing a peaceful escape from chaos of modern life.",
//     name: "Elizabeth Olaniyan",
//   },
//   {
//     quote: "TAB has enabled me to be more conscious of taking breaks periodically, I incorporate stretching, meditation and reflection during my breaks and overall I see my mood has improved.",
//     name: "Sena Dzokoto",
//   },
//   {
//     quote: "Amidst life's chaos, a digital buddy reminding you to take breaks and relax is truly refreshing.",
//     name: "Tomisin Omitogun",
//   },
//   {
//     quote: "Take-A-Break feels like having a personal wellness guru in my pocket, keeping me grounded and committed to my health journey with gentle nudges. Definitely a fave!",
//     name: "Unwanaobong Williams",
//   },
//   {
//     quote: "As a busy professional or stay-at-home mum, TAB is what you need to maintain a healthy work-life balance!",
//     name: "Taiwo Hameedah Abdrasheed-Babatunde",
//   },
//   {
//     quote: "Take a Break's smart features have turned my daily grind into a balanced and productive experience - I can’t imagine my workday without it!",
//     name: "Unoma Okoro",
//   },
// ];

// const items = feedbacks.map((feedback, index) => (
//   <div className="feedback-item" onDragStart={handleDragStart} key={index}>
//     <FaQuoteLeft className="quote-icon" />
//     <p className="feedback-text">{feedback.quote}</p>
//     <p className="feedback-name">- {feedback.name}</p>
//   </div>
// ));

// const FeedbackCarousel = () => {
//   return (
//     <div className="feedback-carousel-container bg-blue-100 px-8 md:px-14 py-14 pt-10">
//       <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">Feedback</h1>
//       <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
//       <div className="carousel-wrapper">
//         <AliceCarousel
//           autoPlay={false}
//           items={items}
//           responsive={{
//             0: { items: 1 },
//             600: { items: 2 },
//             1024: { items: 3 },
//           }}
//           controlsStrategy="responsive"
//           renderDotsItem={({ isActive }) => (
//             <div className={`dot ${isActive ? 'active' : ''}`}></div>
//           )}
//           renderPrevButton={() => (
//             <button className="control-btn prev-btn">❮</button>
//           )}
//           renderNextButton={() => (
//             <button className="control-btn next-btn">❯</button>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default FeedbackCarousel;


// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import { FaQuoteLeft } from 'react-icons/fa';
// import '../App.css';

// const handleDragStart = (e) => e.preventDefault();

// const feedbacks = [
//   {
//     quote: "Take A Break is a must have for people like me, who work and study remotely, and rarely remember to take breaks in between. It helps remind me to step away from my laptop a bit even if it is just for 5 minutes. I love it and think everyone should use it.",
//     name: "Hephzibah Ifeoluwa Owoeye",
//   },
//   {
//     quote: "Taking a break isn't a sign of weakness, but a necessary pause to revitalize. It allows you to return stronger, refreshed, and more focused on achieving your goals.",
//     name: "Fabeyo Olamide",
//   },
//   {
//     quote: "It’s been an incredible experience with the Take a Break application. Not just that it reminds me to rewind and reset, but it suggests useful break activities which increases my productivity.",
//     name: "Blessing Ozoemena",
//   },
//   {
//     quote: "Take a Break is a game-changer for mental wellness, providing a peaceful escape from chaos of modern life.",
//     name: "Elizabeth Olaniyan",
//   },
//   {
//     quote: "TAB has enabled me to be more conscious of taking breaks periodically, I incorporate stretching, meditation and reflection during my breaks and overall I see my mood has improved.",
//     name: "Sena Dzokoto",
//   },
//   {
//     quote: "Amidst life's chaos, a digital buddy reminding you to take breaks and relax is truly refreshing.",
//     name: "Tomisin Omitogun",
//   },
//   {
//     quote: "Take-A-Break feels like having a personal wellness guru in my pocket, keeping me grounded and committed to my health journey with gentle nudges. Definitely a fave!",
//     name: "Unwanaobong Williams",
//   },
//   {
//     quote: "As a busy professional or stay-at-home mum, TAB is what you need to maintain a healthy work-life balance!",
//     name: "Taiwo Hameedah Abdrasheed-Babatunde",
//   },
//   {
//     quote: "Take a Break's smart features have turned my daily grind into a balanced and productive experience - I can’t imagine my workday without it!",
//     name: "Unoma Okoro",
//   },
// ];

// const items = feedbacks.map((feedback, index) => (
//   <div className="feedback-item" onDragStart={handleDragStart} key={index}>
//     <FaQuoteLeft className="quote-icon" />
//     <p className="feedback-text">{feedback.quote}</p>
//     <p className="feedback-name">- {feedback.name}</p>
//   </div>
// ));

// const FeedbackCarousel = () => {
//   return (
//     <div className="feedback-carousel-container bg-blue-100 px-8 md:px-14 py-14 pt-10">
//       <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">Feedback</h1>
//       <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
//       <div className="carousel-wrapper">
//         <AliceCarousel
//           autoPlay={false}
//           items={items}
//           responsive={{
//             0: { items: 1 },
//             600: { items: 2 },
//             1024: { items: 3 },
//           }}

//           controlsStrategy="responsive"
//           renderDotsItem={({ isActive }) => (
//             <div className={`dot ${isActive ? 'active' : ''}`}></div>
//           )}
//           renderPrevButton={() => (
//             <button className="control-btn prev-btn">❮</button>
//           )}
//           renderNextButton={() => (
//             <button className="control-btn next-btn">❯</button>
//           )}
//         />
//       </div>
//     </div>
//   );
// };

// export default FeedbackCarousel;



import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaQuoteLeft } from 'react-icons/fa';
import '../App.css';

const handleDragStart = (e) => e.preventDefault();

const feedbacks = [
  {
    quote: "Take A Break is a must have for people like me, who work and study remotely, and rarely remember to take breaks in between. It helps remind me to step away from my laptop a bit even if it is just for 5 minutes. I love it and think everyone should use it.",
    name: "Hephzibah Ifeoluwa Owoeye",
  },
  {
    quote: "Taking a break isn't a sign of weakness, but a necessary pause to revitalize. It allows you to return stronger, refreshed, and more focused on achieving your goals.",
    name: "Fabeyo Olamide",
  },
  {
    quote: "It’s been an incredible experience with the Take a Break application. Not just that it reminds me to rewind and reset, but it suggests useful break activities which increases my productivity.",
    name: "Blessing Ozoemena",
  },
  {
    quote: "Take a Break is a game-changer for mental wellness, providing a peaceful escape from chaos of modern life.",
    name: "Elizabeth Olaniyan",
  },
  {
    quote: "TAB has enabled me to be more conscious of taking breaks periodically, I incorporate stretching, meditation and reflection during my breaks and overall I see my mood has improved.",
    name: "Sena Dzokoto",
  },
  {
    quote: "Amidst life's chaos, a digital buddy reminding you to take breaks and relax is truly refreshing.",
    name: "Tomisin Omitogun",
  },
  {
    quote: "Take-A-Break feels like having a personal wellness guru in my pocket, keeping me grounded and committed to my health journey with gentle nudges. Definitely a fave!",
    name: "Unwanaobong Williams",
  },
  {
    quote: "As a busy professional or stay-at-home mum, TAB is what you need to maintain a healthy work-life balance!",
    name: "Taiwo Hameedah Abdrasheed-Babatunde",
  },
  {
    quote: "Take a Break's smart features have turned my daily grind into a balanced and productive experience - I can’t imagine my workday without it!",
    name: "Unoma Okoro",
  },
];

const items = feedbacks.map((feedback, index) => (
  <div className="feedback-item" onDragStart={handleDragStart} key={index}>
    <FaQuoteLeft className="quote-icon text-black" />
    <p className="feedback-text">{feedback.quote}</p>
    <p className="feedback-name">{feedback.name}</p>
  </div>
));

const FeedbackCarousel = () => {
  return (
    <div className="feedback-carousel-container bg-blue-100 px-8 md:px-14 py-14 pt-10">
      <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">Feedback</h1>
      <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
      <div className="carousel-wrapper">
        <AliceCarousel
          autoPlay={false}
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 3 },
          }}
          controlsStrategy="responsive"
          renderDotsItem={({ isActive }) => (
            <div className={`dot ${isActive ? 'active' : ''}`}></div>
          )}
          renderPrevButton={() => (
            <button className="control-btn prev-btn hidden md:block">❮</button>
          )}
          renderNextButton={() => (
            <button className="control-btn next-btn hidden md:block">❯</button>
          )}
        />
      </div>
    </div>
  );
};

export default FeedbackCarousel;


