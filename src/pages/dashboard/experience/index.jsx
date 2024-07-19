import { useState } from "react";
import AddExperience from "../../../components/popups/AddExperience";
import { GrAddCircle } from "react-icons/gr";
import ExperienceCard from "../../../components/cards/ExperienceCard";
import { SlBriefcase } from "react-icons/sl";
import Loading from "../../../components/feedbacks/loading";

const Experience = () => {
  const [loading, setLoading] = useState(false);
  const [experienceList, setExperienceList] = useState([]);
  const [experience, setExperience] = useState({
    id: 0,
    companyName: "",
    role: "",
    skills: "",
    responsibility: "",
    location: "",
    startDate: "",
    endDate: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user starts typing
  };

  const validate = () => {
    const newErrors = {};
    if (!experience.companyName)
      newErrors.companyName = "Company name is required";
    if (!experience.role) newErrors.role = "Role is required";
    if (!experience.skills) newErrors.skills = "Skills are required";
    if (!experience.responsibility)
      newErrors.responsibility = "Responsibility is required";
    if (!experience.location) newErrors.location = "Location is required";
    if (!experience.startDate) newErrors.startDate = "Start date is required";
    if (!experience.endDate) newErrors.endDate = "End date is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (isEditing) {
        const updatedExperienceList = [...experienceList];
        updatedExperienceList[editIndex] = experience;
        setExperienceList(updatedExperienceList);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setExperienceList((prev) => [
          ...prev,
          { ...experience, id: new Date().getTime() }, // Generate unique ID
        ]);
      }
      setExperience({
        id: 0,
        companyName: "",
        role: "",
        skills: "",
        responsibility: "",
        location: "",
        startDate: "",
        endDate: "",
      });
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  const editExperience = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setExperience(experienceList[index]);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setExperience({
      id: 0,
      companyName: "",
      role: "",
      skills: "",
      responsibility: "",
      location: "",
      startDate: "",
      endDate: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteExperience = (index) => {
    setExperienceList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isModalOpen && (
            <AddExperience
              experience={experience}
              errors={errors}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              closeModal={closeModal}
              isEditing={isEditing}
            />
          )}

          {experienceList.length ? (
            <div className={`p-5 ${isModalOpen && "blur-sm"}`}>
              <div className="flex justify-between w-full mt-10">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <button
                  className="bg-blue-500 flex justify-center gap-2 align-middle items-center hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mb-8"
                  onClick={openModal}
                >
                  <GrAddCircle size={30} /> <p>Add</p>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {experienceList.map((exp, index) => (
                  <div key={index} className="w-full">
                    <ExperienceCard
                      experience={exp}
                      editExperience={() => editExperience(index)}
                      deleteExperience={() => deleteExperience(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full text-gray-700 w-full flex flex-col justify-center align-middle items-center gap-7">
              <SlBriefcase size={80} />
              <h1 className="text-3xl text-gray-800">No Experience Added</h1>
              <button
                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={openModal}
              >
                Add Experience
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Experience;
