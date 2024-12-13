"use client"

import { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAnswer = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is this website about?',
      answer: 'This website provides information and services related to our products and plans.',
    },
    {
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button on the top right and follow the steps to create your account.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact support through the "Contact" page or by emailing us directly at support@example.com.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and bank transfers for payments.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription by going to your account settings and selecting "Cancel Subscription".',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 mb-10">
        Frequently Asked Questions
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 ease-in-out duration-300"
          >
            <div
              className="faq-question cursor-pointer text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-all ease-in-out duration-200"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {open === index && (
              <div className="faq-answer mt-4 text-lg text-gray-700 opacity-0 animate-fadeIn transition-opacity duration-500 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Keyframes for fadeIn animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Hover Animation for FAQ Items */
        .faq-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Fade-in animation for answers */
        .faq-answer {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .faq-item {
            padding: 4px 8px;
          }
        }

        /* Styling for the title and cards */
        .faq-question {
          font-weight: bold;
          color: #333;
          transition: color 0.3s;
        }

        .faq-question:hover {
          color: #4c6ef5; /* Indigo on hover */
        }

        .faq-answer {
          margin-top: 12px;
          font-size: 1rem;
          color: #555;
        }

        .faq-item:hover .faq-question {
          color: #4c6ef5;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
