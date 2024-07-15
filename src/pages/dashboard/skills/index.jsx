import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState({ name: "", levelOfProficiency: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSkill((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" })); // Clear error when user starts typing
  };

  const validate = () => {
    const newErrors = {};
    if (!skill.name) newErrors.name = "Skill name is required";
    if (!skill.levelOfProficiency)
      newErrors.levelOfProficiency = "Proficiency level is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (isEditing) {
        const updatedSkills = skills.map((s, index) =>
          index === currentIndex ? skill : s
        );
        setSkills(updatedSkills);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setSkills((prev) => [...prev, skill]);
      }
      setSkill({ name: "", levelOfProficiency: "" });
      setErrors({});
    }
  };

  const handleEdit = (index) => {
    setSkill(skills[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const handleDelete = (index) => {
    const filteredSkills = skills.filter((_, i) => i !== index);
    setSkills(filteredSkills);
  };

  return (
    <div className="max-w-4xl my-20 mx-auto p-5 shadow-md rounded-md">
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-4 justify-between align-bottom items-end"
      >
        <div className="flex-grow-2 w-full">
          <label
            htmlFor="name"
            className="block text-lg font-semibold text-gray-700 mb-1"
          >
            Skill Name
          </label>
          <input
            id="name"
            type="text"
            value={skill.name}
            onChange={handleChange}
            className="block w-full px-3 py-2 text-lg rounded-2xl border-gray-300 shadow-inner focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex-grow-1 w-[70%]">
          <label
            htmlFor="levelOfProficiency"
            className="block text-lg font-semibold mb-1 text-gray-700"
          >
            Level of Proficiency
          </label>
          <select
            id="levelOfProficiency"
            value={skill.levelOfProficiency}
            onChange={handleChange}
            className="block w-full px-3 py-2 text-lg rounded-2xl border-gray-300 shadow-inner focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="" disabled>
              Select proficiency level
            </option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advance">Advance</option>
            <option value="Expert">Expert</option>
          </select>
          {errors.levelOfProficiency && (
            <p className="text-red-500 text-sm mt-1">
              {errors.levelOfProficiency}
            </p>
          )}
        </div>
        <div className="flex justify-center w-[40%]">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            {isEditing ? "Update Skill" : "Add Skill"}
          </button>
        </div>
      </form>
      <div className="mt-6">
        <h1 className="text-3xl font-bold mt-16 mb-5">Skills</h1>
        {skills.length ? (
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm"
              >
                <span>{skill.name}</span>
                <span className="font-semibold text-gray-700">
                  {skill.levelOfProficiency}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10">
            <h4 className="text-center font-semibold text-gray-700">
              No skills Added
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
