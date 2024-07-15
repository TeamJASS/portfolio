import { FaUser, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaUser className="w-10 h-10" />,
    title: "Profile",
    description: "Create and manage your professional profile with ease.",
  },
  {
    icon: <FaBriefcase className="w-10 h-10" />,
    title: "Experience",
    description: " Showcase your work experience and achievements effectively.",
  },
  {
    icon: <FaGraduationCap className="w-10 h-10" />,
    title: "Education",
    description: "Highlight your educational background and qualifications.",
  },
];

const Features = () => {
  return (
    <div className="bg-white py-20" id="features">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {features.map((f, i) => {
            return (
              <div
                key={i}
                className="flex flex-col p-4 border-2 items-center transform transition-transform duration-500 hover:scale-105 rounded-md shadow-md cursor-pointer"
              >
                <div className="rounded-full bg-blue-500 p-4 text-white">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-semibold mt-4 mb-2">{f.title}</h3>
                <p className="text-gray-700 text-center">{f.description}</p>
              </div>
            );
          })}
        </div>
        <p className="text-right underline text-blue-800 my-8 font-semibold">
          <Link to="/">Explore All Features</Link>
        </p>
      </div>
    </div>
  );
};

export default Features;
