/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaGithub, FaLinkedin, FaSave } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = ({ socials, handleSave }) => {
  const [socialLinks, setSocialLinks] = useState({
    githubLink: socials?.githubLink || "",
    linkedIn: socials?.linkedIn || "",
    twitterLink: socials?.twitterLink || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(socialLinks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Social Links</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="githubLink"
            >
              GitHub
            </label>
            <div className="flex items-center">
              <FaGithub className="h-10 w-10 text-gray-700 mr-2" />
              <input
                className="shadow appearance-none border rounded w-full py-4 text-xl px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                id="githubLink"
                name="githubLink"
                type="url"
                placeholder="https://github.com/username"
                value={socialLinks.githubLink}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="linkedIn"
            >
              LinkedIn
            </label>
            <div className="flex items-center">
              <FaLinkedin className="h-10 w-10 text-blue-700 mr-2" />
              <input
                className="shadow appearance-none border rounded w-full py-4 text-xl  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="linkedIn"
                name="linkedIn"
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={socialLinks.linkedIn}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="twitterLink"
            >
              X
            </label>
            <div className="flex items-center">
              <FaXTwitter className="h-10 w-10 text-black-400 mr-2" />
              <input
                className="shadow appearance-none border rounded w-full py-4 text-xl  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="twitterLink"
                name="twitterLink"
                type="url"
                placeholder="https://x.com/username"
                value={socialLinks.twitterLink}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-4 text-xl  px-4 rounded-full flex items-center hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              <FaSave className="h-5 w-5 mr-2" />
              Save Links
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Socials;
