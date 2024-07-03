import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Accordion = ({ subheading = "FAQS", heading = "You have Questions ?", description = "And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", faqs = [] }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    setActiveQuestionIndex(activeQuestionIndex === questionIndex ? null : questionIndex);
  };

  return (
    <div className="bg-blue-50 py-20 px-8 pt-10 pb-10">
      <div className="max-w-screen-xl mx-auto text-center">
        {subheading && <div className="mb-4 text-center text-lg font-semibold">{subheading}</div>}
        {heading && <h2 className="text-4xl font-bold mb-2">{heading}</h2>}
        {description && <p className="w-full text-center text-lg mt-4 mb-12">{description}</p>}

        <dl className="mt-12 max-w-4xl relative mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="cursor-pointer select-none mt-5 px-8 py-5 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300" onClick={() => toggleQuestion(index)}>
              <dt className="flex justify-between items-center">
                <span className="text-lg lg:text-xl font-semibold">{faq.question}</span>
                <motion.span
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                  variants={{
                    collapsed: { rotate: 0 },
                    open: { rotate: -180 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 transition duration-300"
                >
                  <ChevronDownIcon className="w-6 h-6" />
                </motion.span>
              </dt>
              <motion.dd
                initial="collapsed"
                animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                variants={{
                  open: { opacity: 1, height: 'auto', marginTop: '16px' },
                  collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none text-sm sm:text-base leading-relaxed"
              >
                {faq.answer}
              </motion.dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Accordion;

