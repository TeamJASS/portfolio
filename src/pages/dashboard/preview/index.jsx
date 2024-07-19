/* eslint-disable react/prop-types */
import React from "react";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaVenusMars,
  FaBirthdayCake,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTools,
  FaGraduationCap,
  FaBriefcase,
  FaProjectDiagram,
  FaTrophy,
} from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi"; // Import icons for download and share
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const profile = {
  name: "Stephen Amankwah",
  profilePicture: "https://via.placeholder.com/150",
  bio: "A passionate developer with a love for coding.",
  location: "Accra, Ghana.",
  maritalStatus: "married",
  sex: "female",
  dateOfBirth: "2024-07-26",
  githubLink: "https://github.com/janedoe",
  linkedinLink: "https://linkedin.com/in/janedoe",
  twitterLink: "https://twitter.com/janedoe",
  skills: [
    {
      title: "JavaScript",
      description:
        "Expert in JavaScript and modern frameworks like React and Node.js.",
    },
    {
      title: "CSS",
      description:
        "Proficient in CSS and Tailwind CSS for designing beautiful UI.",
    },
  ],
  education: [
    {
      title: "Bachelor's Degree in Computer Science",
      description: "XYZ University, 2020",
    },
  ],
  experience: [
    { title: "Software Engineer", description: "ABC Corp, 2021-Present" },
    { title: "Mechanical Engineer", description: "ABC Corp, 2021-Present" },
  ],
  projects: [
    {
      title: "Portfolio Builder",
      description:
        "A web application to build and showcase professional portfolios.",
    },
  ],
  achievements: [
    {
      title: "Best Developer Award",
      description: "Received the Best Developer Award in 2022 at XYZ Company.",
    },
  ],
};

const Preview = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const handleDownload = () => {
    // Implement your download functionality here
    alert("Download functionality not implemented yet.");
  };

  const handleShare = () => {
    // Implement your share functionality here
    const shareUrl = window.location.href; // Assuming the current URL is the profile URL
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        alert("Profile link copied to clipboard.");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };
  return (
    <div className="p-6 w-full flex flex-col items-center justify-center">
      <div className="p-10 bg-white shadow-lg rounded-3xl w-full max-w-4xl">
        <div className="flex relative flex-col items-center mb-8">
          <div className="flex justify-end items-end w-full gap-10 absolute">
            <Link
              to="#"
              onClick={handleDownload}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 font-semibold"
            >
              <FiDownload size={20} />
              Download
            </Link>
            <Link
              to="#"
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 font-semibold"
            >
              <FiShare2 size={20} />
              Share
            </Link>
          </div>
          <img
            src={user.profile.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
          />
          <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
          <p className="text-gray-700 mb-4 text-center">{profile.bio}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <InfoCard
              title="Location"
              content={profile.location}
              icon={<FaMapMarkerAlt className="text-blue-600" />}
            />
            <InfoCard
              title="Marital Status"
              content={profile.maritalStatus}
              icon={<FaHeart className="text-red-600" />}
            />
            <InfoCard
              title="Sex"
              content={profile.sex}
              icon={<FaVenusMars className="text-pink-600" />}
            />
            <InfoCard
              title="Date of Birth"
              content={profile.dateOfBirth}
              icon={<FaBirthdayCake className="text-yellow-600" />}
            />
            <SocialLinks profile={profile} />
          </div>
        </div>
        <Section
          title="Skills"
          items={profile.skills}
          icon={<FaTools className="text-gray-500" />}
        />
        <Section
          title="Education"
          items={profile.education}
          icon={<FaGraduationCap className="text-gray-500" />}
        />
        <Section
          title="Experience"
          items={profile.experience}
          icon={<FaBriefcase className="text-gray-500" />}
        />
        <Section
          title="Projects"
          items={profile.projects}
          icon={<FaProjectDiagram className="text-gray-500" />}
        />
        <Section
          title="Achievements"
          items={profile.achievements}
          icon={<FaTrophy className="text-gray-500" />}
        />
      </div>
    </div>
  );
};

const InfoCard = ({ title, content, icon }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex items-center">
    <div className="mr-4 text-2xl">{icon}</div>
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const SocialLinks = ({ profile }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm col-span-1 md:col-span-2 flex items-center">
    <h2 className="text-xl font-semibold mb-2 text-gray-800 mr-4">
      Social Links
    </h2>
    <div className="flex space-x-4">
      {profile.githubLink && (
        <a
          href={profile.githubLink}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaGithub className="text-2xl" />
        </a>
      )}
      {profile.linkedinLink && (
        <a
          href={profile.linkedinLink}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      )}
      {profile.twitterLink && (
        <a
          href={profile.twitterLink}
          className="text-blue-600 hover:text-blue-800"
        >
          <FaTwitter className="text-2xl" />
        </a>
      )}
    </div>
  </div>
);

const Section = ({ title, items, icon }) => (
  <div className="mt-6">
    <div className="flex items-center mb-4">
      <div className="text-2xl mr-2">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Preview;
