/* eslint-disable react/prop-types */

const AddEducation = (props) => {
  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 max-h-screen overflow-y-scroll">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Add Education</h2>
        <form onSubmit={props.handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="schoolName"
            >
              School Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="schoolName"
              name="schoolName"
              type="text"
              placeholder="School Name"
              value={props.education.schoolName}
              onChange={props.handleChange}
            />
            {props.errors.schoolName && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.schoolName}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={props.education.address}
              onChange={props.handleChange}
            />
            {props.errors.address && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.address}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="program"
            >
              Program
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="program"
              name="program"
              type="text"
              placeholder="Program"
              value={props.education.program}
              onChange={props.handleChange}
            />
            {props.errors.program && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.program}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="startDate"
            >
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              name="startDate"
              type="date"
              value={props.education.startDate}
              onChange={props.handleChange}
            />
            {props.errors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.startDate}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="endDate"
            >
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              name="endDate"
              type="date"
              value={props.education.endDate}
              onChange={props.handleChange}
            />
            {props.errors.endDate && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.endDate}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="certificate"
            >
              Certificate
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="certificate"
              name="certificate"
              type="text"
              placeholder="Certificate"
              value={props.education.certificate}
              onChange={props.handleChange}
            />
            {props.errors.certificate && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.certificate}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="educationLevel"
            >
              Education Level
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="educationLevel"
              name="educationLevel"
              value={props.education.educationLevel}
              onChange={props.handleChange}
            >
              <option value="" disabled>
                Select Education Level
              </option>
              <option value="High School">High School</option>
              <option value="Associate's Degree">
                Associate&apos;s Degree
              </option>
              <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
              <option value="Master's Degree">Master&apos;s Degree</option>
              <option value="Doctorate">Doctorate</option>
            </select>
            {props.errors.educationLevel && (
              <p className="text-red-500 text-sm mt-1">
                {props.errors.educationLevel}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={props.closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Education
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEducation;
