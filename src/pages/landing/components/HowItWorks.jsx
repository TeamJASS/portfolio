import { FaUserPlus, FaUser, FaPaintBrush, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up",
    description: "Create an account and log in.",
    icon: <FaUserPlus className="w-10 h-10 text-white" />,
  },
  {
    title: "Build Your Profile",
    description:
      "Fill in your details, including profile, experience, education, etc.",
    icon: <FaUser className="w-10 h-10 text-white" />,
  },
  {
    title: "Customize",
    description: "Choose a template and customize your portfolio.",
    icon: <FaPaintBrush className="w-10 h-10 text-white" />,
  },
  {
    title: "Share",
    description:
      "Publish your portfolio and share it with potential employers, clients, and colleagues.",
    icon: <FaShareAlt className="w-10 h-10 text-white" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-20" id="process">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-full bg-blue-500 p-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mt-4 mb-2 text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
