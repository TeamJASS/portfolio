import { useState } from "react";
import AddEducation from "../../../components/popups/AddEducation";
import EducationCard from "../../../components/cards/EducationCard";
import { SlGraduation } from "react-icons/sl";
import { GrAddCircle } from "react-icons/gr";
import Loading from "../../../components/feedbacks/loading";

const Education = () => {
  const [loading, setLoading] = useState(false);
  const [educationList, setEducationList] = useState([]);
  const [education, setEducation] = useState({
    id: 0,
    schoolName: "",
    address: "",
    program: "",
    startDate: "",
    endDate: "",
    certificate: "",
    educationLevel: "",
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user starts typing
  };

  const validate = () => {
    const newErrors = {};
    if (!education.schoolName) newErrors.schoolName = "School name is required";
    if (!education.address) newErrors.address = "Address is required";
    if (!education.program) newErrors.program = "Program is required";
    if (!education.startDate) newErrors.startDate = "Start date is required";
    if (!education.endDate) newErrors.endDate = "End date is required";
    if (!education.certificate)
      newErrors.certificate = "Certificate is required";
    if (!education.educationLevel)
      newErrors.educationLevel = "Education level is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (isEditing) {
        const updatedEducationList = [...educationList];
        updatedEducationList[editIndex] = education;
        setEducationList(updatedEducationList);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setEducationList((prev) => [
          ...prev,
          { ...education, id: new Date().getTime() }, // Generate unique ID
        ]);
      }
      setEducation({
        id: 0,
        schoolName: "",
        address: "",
        program: "",
        startDate: "",
        endDate: "",
        certificate: "",
        educationLevel: "",
      });
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setEducation({
      id: 0,
      schoolName: "",
      address: "",
      program: "",
      startDate: "",
      endDate: "",
      certificate: "",
      educationLevel: "",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const editEducation = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEducation(educationList[index]);
    setIsModalOpen(true);
  };

  const deleteEducation = (index) => {
    setEducationList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isModalOpen && (
            <AddEducation
              education={education}
              errors={errors}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              closeModal={closeModal}
              isEditing={isEditing}
            />
          )}

          {educationList.length ? (
            <div className={`p-5 ${isModalOpen && "blur-sm"}`}>
              <div className="flex justify-between w-full mt-10">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <button
                  className="bg-blue-500 flex justify-center gap-2 align-middle items-center hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mb-8"
                  onClick={openModal}
                >
                  <GrAddCircle size={30} /> <p>Add</p>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-7">
                {educationList.map((edu, index) => (
                  <div key={index} className="w-full">
                    <EducationCard
                      edu={edu}
                      editEducation={() => editEducation(index)}
                      deleteEducation={() => deleteEducation(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="h-full text-gray-700 w-full flex flex-col justify-center align-middle items-center gap-7">
              <SlGraduation size={80} />
              <h1 className="text-3xl text-gray-800">No Education Added</h1>
              <button
                className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={openModal}
              >
                Add Education
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Education;
