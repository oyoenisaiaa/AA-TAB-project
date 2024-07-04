import React, { useEffect } from 'react';
import Accordion from './Accordion';

const FAQPage = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is Take a Break?",
      answer: "Take a Break is a website that offers a platform for users to take a temporary break from their online activities and focus on their mental well-being.",
    },
    {
      question: "Why should I take a break?",
      answer: "You should take a break because your mental well-being matters! Taking regular breaks can help reduce stress, improve focus, and increase productivity. The Take a Break app offers a variety of relaxation tools and resources to help you unwind and recharge.",
    },
    {
      question: "How do I take a break?",
      answer: (
        <div>
          Take a break by opening the Take a Break website and exploring its features, such as:
          <ul className='list-disc pl-5 text-left'>
            <li>Guided meditations and relaxation exercises</li>
            <li>Calming music and nature sounds</li>
            <li>Mood-tracking and journaling tools</li>
            <li>Personalized relaxation plans</li>
          </ul>
        </div>
      )
    },
    {
      question: "How long is the break?",
      answer: (
        <div>
          The length of your break is up to you! Take a Break offers flexible break options, ranging from:
          <ul className='list-disc pl-5 text-left'>
            <li>Quick 1-2 minute stress-reducing exercises</li>
            <li>5-10 minute guided meditations</li>
            <li>15-30 minute relaxation sessions</li>
            <li>Longer breaks, like a 60-minute power nap or a relaxing walk</li><br></br>
          </ul>
          Take a break for as long as you need to feel refreshed and focused!
        </div>
      )
    },
  ];

  return <Accordion faqs={faqs} />;
};

export default FAQPage;
