import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Accordion = ({ heading = "FAQs", faqs = [] }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (questionIndex) => {
    setActiveQuestionIndex(activeQuestionIndex === questionIndex ? null : questionIndex);
  };

  return (
    <div className="bg-white py-20 px-8 md:px-14 pt-10">
      <div className="max-w-screen-xl mx-auto text-center">
        {heading && (
          <>
            <h1 className="text-4xl font-bold mb-2 font-be-vietnam-pro">{heading}</h1>
            <div className="mt-1 h-2 bg-blue-600 w-32 mx-auto rounded-full"></div>
          </>
        )}
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
                className="pointer-events-none text-sm sm:text-base leading-relaxed text-left"
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
