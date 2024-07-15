import { useState } from "react";
import AddProject from "../../../components/popups/AddProject";
import { GrAddCircle } from "react-icons/gr";
import ProjectCard from "../../../components/cards/ProjectCard";
import { PiFolder } from "react-icons/pi";

const Projects = () => {
  const [projectList, setProjectList] = useState([
    // {
    //   projectName: "Example Project",
    //   description: "Project Description",
    //   contribution: "Individual Contribution",
    //   skills: "React, Node.js",
    //   link: "http://example.com",
    //   nameOfInstitution: "Example Institution",
    //   startDate: "2021-01-01",
    //   endDate: "2021-12-31",
    // },
  ]);
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    contribution: "",
    skills: "",
    link: "",
    nameOfInstitution: "",
    startDate: "",
    endDate: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectList((prev) => [...prev, project]);
    setProject({
      projectName: "",
      description: "",
      contribution: "",
      skills: "",
      link: "",
      nameOfInstitution: "",
      startDate: "",
      endDate: "",
    });
    setIsModalOpen(false); // Close the modal after submission
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <AddProject
          project={project}
          isModalOpen={isModalOpen}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          closeModal={closeModal}
        />
      )}

      {projectList.length ? (
        <div className={`p-5 ${isModalOpen && "blur-sm"}`}>
          <div className="flex justify-between w-full mt-10">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <button
              className="bg-blue-500 flex justify-center gap-2 align-middle items-center hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mb-8"
              onClick={openModal}
            >
              <GrAddCircle size={30} /> <p>Add</p>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-7">
            {projectList.map((project, index) => (
              <div key={index} className="w-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full text-gray-700 w-full flex flex-col justify-center align-middle items-center gap-7">
          <PiFolder size={80} />
          <h1 className="text-3xl text-gray-800">No Projects Added</h1>
          <button
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={openModal}
          >
            Add Project
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
