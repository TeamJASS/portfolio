/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Profile = () => {
  const user = {}; // Replace with your user data or fetch logic
  const initialBio = {
    title: "",
    sex: "",
    professionalTitle: "",
    location: "",
    maritalStatus: "",
    aboutMe: "",
    dateOfBirth: "",
    contact: "",
    languages: "",
  };

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...initialBio });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user.bio) {
      setFormData({ ...user.bio });
    } else {
      setEditMode(true);
    }
  }, []);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setFormData(editMode ? { ...user.bio } : { ...initialBio });
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear error when user starts typing
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.sex) newErrors.sex = "Sex is required";
    if (!formData.professionalTitle)
      newErrors.professionalTitle = "Professional title is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Marital status is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    if (!formData.languages) newErrors.languages = "Languages are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData); // Replace with your logic to save data
      setEditMode(false);
    }
  };

  return (
    <div className="max-w-4xl my-20 mx-auto p-5 shadow-md bg-white rounded-2xl">
      <h1 className="text-3xl font-bold mb-5">Profile</h1>
      <div className="flex justify-end mb-3">
        {!editMode ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-2xl px-4 py-2 focus:outline-none"
            onClick={toggleEditMode}
          >
            Edit Profile
          </button>
        ) : (
          ""
        )}
        {editMode && user.bio ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-2xl px-4 py-2 focus:outline-none"
            onClick={toggleEditMode}
          >
            cancel
          </button>
        ) : (
          editMode && !user.bio && ""
        )}
      </div>

      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="sex"
                className="block text-lg font-semibold text-gray-700"
              >
                Sex
              </label>
              <select
                id="sex"
                value={formData.sex}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.sex ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.sex && (
                <p className="text-red-500 text-sm mt-1">{errors.sex}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="professionalTitle"
                className="block text-lg font-semibold text-gray-700"
              >
                Professional Title
              </label>
              <input
                id="professionalTitle"
                type="text"
                value={formData.professionalTitle}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.professionalTitle ? "border-red-500" : ""
                }`}
              />
              {errors.professionalTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.professionalTitle}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-lg font-semibold text-gray-700"
              >
                Location
              </label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.location ? "border-red-500" : ""
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="maritalStatus"
                className="block text-lg font-semibold text-gray-700"
              >
                Marital Status
              </label>
              <select
                id="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.maritalStatus ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.maritalStatus}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-lg font-semibold text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.dateOfBirth ? "border-red-500" : ""
                }`}
              />
              {errors.dateOfBirth && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-lg font-semibold text-gray-700"
            >
              Contact
            </label>
            <input
              id="contact"
              type="text"
              value={formData.contact}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.contact ? "border-red-500" : ""
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="languages"
              className="block text-lg font-semibold text-gray-700"
            >
              Languages
            </label>
            <input
              id="languages"
              type="text"
              value={formData.languages}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.languages ? "border-red-500" : ""
              }`}
            />
            {errors.languages && (
              <p className="text-red-500 text-sm mt-1">{errors.languages}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="aboutMe"
              className="block text-lg font-semibold text-gray-700"
            >
              About Me
            </label>
            <textarea
              id="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.aboutMe ? "border-red-500" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.aboutMe && (
              <p className="text-red-500 text-sm mt-1">{errors.aboutMe}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 w-[40%] px-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-5">
          <p className="text-lg">
            <span className="font-semibold">Title:</span> {formData.title}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Sex:</span> {formData.sex}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Professional Title:</span>{" "}
            {formData.professionalTitle}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Location:</span> {formData.location}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Marital Status:</span>{" "}
            {formData.maritalStatus}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Date of Birth:</span>{" "}
            {formData.dateOfBirth}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Contact:</span> {formData.contact}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Languages:</span>{" "}
            {formData.languages}
          </p>
          <p className="text-lg">
            <span className="font-semibold">About Me:</span> {formData.aboutMe}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
