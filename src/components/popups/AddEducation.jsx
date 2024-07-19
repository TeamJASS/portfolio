/* eslint-disable react/prop-types */
import React from "react";

const AddEducation = ({
  education,
  errors,
  handleSubmit,
  handleChange,
  closeModal,
  isEditing,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isEditing ? "Edit Education" : "Add Education"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.schoolName ? "border-red-500" : ""
              }`}
            />
            {errors.schoolName && (
              <p className="text-red-500 text-xs italic">{errors.schoolName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={education.address}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.address ? "border-red-500" : ""
              }`}
            />
            {errors.address && (
              <p className="text-red-500 text-xs italic">{errors.address}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Program
            </label>
            <input
              type="text"
              name="program"
              value={education.program}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.program ? "border-red-500" : ""
              }`}
            />
            {errors.program && (
              <p className="text-red-500 text-xs italic">{errors.program}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.startDate ? "border-red-500" : ""
              }`}
            />
            {errors.startDate && (
              <p className="text-red-500 text-xs italic">{errors.startDate}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              End Date
            </label>
            <input
              type="date"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.endDate ? "border-red-500" : ""
              }`}
            />
            {errors.endDate && (
              <p className="text-red-500 text-xs italic">{errors.endDate}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Certificate
            </label>
            <input
              type="text"
              name="certificate"
              value={education.certificate}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.certificate ? "border-red-500" : ""
              }`}
            />
            {errors.certificate && (
              <p className="text-red-500 text-xs italic">
                {errors.certificate}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Education Level
            </label>
            <select
              name="educationLevel"
              value={education.educationLevel}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.educationLevel ? "border-red-500" : ""
              }`}
            >
              <option value="" disabled>
                Select Education Level
              </option>
              <option value="High School">High School</option>
              <option value="Associate's Degree">Associate's Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctorate">Doctorate</option>
            </select>
            {errors.educationLevel && (
              <p className="text-red-500 text-xs italic">
                {errors.educationLevel}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isEditing ? "Update Education" : "Add Education"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
