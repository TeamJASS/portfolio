import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ lineHeight: "1.5" }}
          >
            Build Your Professional Portfolio Effortlessly!
          </h1>
          <h4 className="text-lg text-gray-400 mb-8">
            Showcase your skills, experience, and education with a professional
            online portfolio.
          </h4>
          <div className="space-x-4">
            <RouterLink
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md"
            >
              Get Started
            </RouterLink>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="bg-transparent border cursor-pointer border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="Professional Portfolio"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
