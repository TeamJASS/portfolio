import { useState } from "react";
import AddProject from "../../../components/popups/AddProject";
import { GrAddCircle } from "react-icons/gr";
import ProjectCard from "../../../components/cards/ProjectCard";
import { PiFolder } from "react-icons/pi";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [project, setProject] = useState({
    id: null,
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
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (name, value) => {
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isEdit) {
      // Editing existing project
      const updatedProjectList = projectList.map((item) =>
        item.id === project.id ? project : item
      );
      setProjectList(updatedProjectList);
      setIsEdit(false);
    } else {
      // Adding new project
      setProjectList((prev) => [...prev, { ...project, id: Date.now() }]);
    }
    setProject({
      id: null,
      projectName: "",
      description: "",
      contribution: "",
      skills: "",
      link: "",
      nameOfInstitution: "",
      startDate: "",
      endDate: "",
    });
    setIsModalOpen(false);
  };

  const editProject = (id) => {
    const selectedProject = projectList.find((project) => project.id === id);
    if (selectedProject) {
      setProject({ ...selectedProject });
      setIsEdit(true);
      setIsModalOpen(true);
    }
  };

  const deleteProject = (id) => {
    const updatedProjectList = projectList.filter(
      (project) => project.id !== id
    );
    setProjectList(updatedProjectList);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsEdit(false); // Reset edit mode when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEdit(false); // Reset edit mode when closing modal
    setProject({
      id: null,
      projectName: "",
      description: "",
      contribution: "",
      skills: "",
      link: "",
      nameOfInstitution: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <>
      {isModalOpen && (
        <AddProject
          project={project}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          closeModal={closeModal}
          isEdit={isEdit}
        />
      )}

      {projectList.length ? (
        <div className={`p-5 ${isModalOpen ? "blur-sm" : ""}`}>
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
            {projectList.map((project) => (
              <div key={project.id} className="w-full">
                <ProjectCard
                  project={project}
                  onEdit={() => editProject(project.id)}
                  onDelete={() => deleteProject(project.id)}
                />
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
