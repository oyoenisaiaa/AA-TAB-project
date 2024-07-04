import React from 'react';
import HeroSection from './HeroSection';
import About from './About';
import PerfectChoice from './PerfectChoice';
import HelpSection from './HelpSection';
import Carousel from './Carousel';
import FeedbackCarousel from './FeedbackCarousel';
import UserFeedback from './UserFeedback';
import FAQs from './FAQs';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <PerfectChoice />
      <HelpSection />
      <Carousel />
      <FeedbackCarousel />
      <UserFeedback />
      <div id="faqs"> 
        <FAQs />
      </div>
      {/* Other sections */}
    </div>
  );
};

export default Home;







