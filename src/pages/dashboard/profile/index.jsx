/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createProfile } from "../../../services/userProfile";

const Profile = () => {
  // const user = {}; // Replace with your user data or fetch logic
  const initialBio = {
    profilePicture: "",
    location: "",
    maritalStatus: "",
    sex: "",
    bio: "",
    about: "",
    dateOfBirth: "",
    contact: "",
    resume: "",
    githubLink: "",
    linkedinLink: "",
    twitterLink: "",
  };

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...initialBio });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user.bio) {
      setFormData({ ...user.bio });
      setImagePreview(user.bio.profilePicture);
    } else {
      setEditMode(true);
    }
  }, [user]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setFormData(editMode ? { ...user.bio } : { ...initialBio });
    setErrors({});
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Marital status is required";
    if (!formData.sex) newErrors.sex = "Sex is required";
    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.contact) newErrors.contact = "Contact is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      formData.user = user.id;
      console.log(formData); // Replace with your logic to save data
      // try {
      //   const userProfile = await createProfile(formData);
      //   console.log("New Profile--->", userProfile);
      // } catch (error) {
      //   console.log(error);
      // }
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
            Cancel
          </button>
        ) : (
          editMode && !user.bio && ""
        )}
      </div>

      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex justify-center items-center mb-5">
            <div className="h-[100px] w-[100px] flex rounded-full overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
            </div>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleImageChange}
              className="ml-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                  errors.location ? "border-red-500" : ""
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>
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
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.maritalStatus}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              </select>
              {errors.sex && (
                <p className="text-red-500 text-sm mt-1">{errors.sex}</p>
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
              htmlFor="bio"
              className="block text-lg font-semibold text-gray-700"
            >
              Bio
            </label>
            <input
              id="bio"
              type="text"
              value={formData.bio}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.bio ? "border-red-500" : ""
              }`}
            />
            {errors.bio && (
              <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-lg font-semibold text-gray-700"
            >
              About
            </label>
            <textarea
              id="about"
              value={formData.about}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.about ? "border-red-500" : ""
              }`}
              rows="4"
            ></textarea>
            {errors.about && (
              <p className="text-red-500 text-sm mt-1">{errors.about}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-lg font-semibold text-gray-700"
            >
              Resume
            </label>
            <input
              id="resume"
              type="text"
              value={formData.resume}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.resume ? "border-red-500" : ""
              }`}
            />
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="githubLink"
              className="block text-lg font-semibold text-gray-700"
            >
              GitHub Link
            </label>
            <input
              id="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.githubLink ? "border-red-500" : ""
              }`}
            />
            {errors.githubLink && (
              <p className="text-red-500 text-sm mt-1">{errors.githubLink}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="linkedinLink"
              className="block text-lg font-semibold text-gray-700"
            >
              LinkedIn Link
            </label>
            <input
              id="linkedinLink"
              type="url"
              value={formData.linkedinLink}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.linkedinLink ? "border-red-500" : ""
              }`}
            />
            {errors.linkedinLink && (
              <p className="text-red-500 text-sm mt-1">{errors.linkedinLink}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="twitterLink"
              className="block text-lg font-semibold text-gray-700"
            >
              Twitter Link
            </label>
            <input
              id="twitterLink"
              type="url"
              value={formData.twitterLink}
              onChange={handleChange}
              className={`mt-2 block w-full px-3 py-2 text-lg rounded-2xl bg-gray-100 border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${
                errors.twitterLink ? "border-red-500" : ""
              }`}
            />
            {errors.twitterLink && (
              <p className="text-red-500 text-sm mt-1">{errors.twitterLink}</p>
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
            <span className="font-semibold">Profile Picture:</span>
          </p>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
          <p className="text-lg">
            <span className="font-semibold">Location:</span> {formData.location}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Marital Status:</span>{" "}
            {formData.maritalStatus}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Sex:</span> {formData.sex}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Bio:</span> {formData.bio}
          </p>
          <p className="text-lg">
            <span className="font-semibold">About:</span> {formData.about}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Date of Birth:</span>{" "}
            {formData.dateOfBirth}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Contact:</span> {formData.contact}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Resume:</span> {formData.resume}
          </p>
          <p className="text-lg">
            <span className="font-semibold">GitHub Link:</span>{" "}
            {formData.githubLink}
          </p>
          <p className="text-lg">
            <span className="font-semibold">LinkedIn Link:</span>{" "}
            {formData.linkedinLink}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Twitter Link:</span>{" "}
            {formData.twitterLink}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
