import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is PortiBuilder?",
    answer:
      "PortiBuilder is a platform that allows you to create professional portfolios effortlessly, showcasing your skills, experience, and education.",
  },
  {
    question: "How much does PortiBuilder cost?",
    answer:
      "PortiBuilder offers a Free Plan with basic features. The Pro Plan costs $9.99/month, and for custom solutions, you can opt for the Enterprise Plan.",
  },
  {
    question: "Can I customize my portfolio?",
    answer:
      "Yes, you can choose from a variety of professional templates and customize your portfolio to suit your style and needs.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely! Your data is safe with us. We prioritize your privacy and security.",
  },
  {
    question: "Can I access PortiBuilder on mobile?",
    answer:
      "Yes, PortiBuilder is mobile-responsive, allowing you to access and edit your portfolio on the go.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-20" id="faq">
      <div className="container md:w-1/2 px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-gray-700"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
