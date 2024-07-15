import { useState } from "react";
import AddAchievement from "../../../components/popups/AddAchievement";
import { GrAddCircle } from "react-icons/gr";
import AchievementCard from "../../../components/cards/AchievementCard";
import { PiMedal } from "react-icons/pi";

const Achievements = () => {
  const [achievementList, setAchievementList] = useState([]);
  const [achievement, setAchievement] = useState({
    awards: "",
    program: "",
    qualification: "",
    grade: "",
    startDate: "",
    endDate: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAchievement((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAchievementList((prev) => [...prev, achievement]);
    setAchievement({
      awards: "",
      program: "",
      qualification: "",
      grade: "",
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
        <AddAchievement
          achievement={achievement}
          isModalOpen={isModalOpen}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          closeModal={closeModal}
        />
      )}

      {achievementList.length ? (
        <div className={`p-5 ${isModalOpen && "blur-sm"}`}>
          <div className="flex justify-between w-full mt-10">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <button
              className="bg-blue-500 flex justify-center gap-2 align-middle items-center hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline mb-8"
              onClick={openModal}
            >
              <GrAddCircle size={30} /> <p>Add</p>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-7">
            {achievementList.map((achievement, index) => (
              <div key={index} className="w-full">
                <AchievementCard achievement={achievement} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full text-gray-700 w-full flex flex-col justify-center align-middle items-center gap-7">
          <PiMedal size={80} />
          <h1 className="text-3xl text-gray-800">No Achievements Added</h1>
          <button
            className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={openModal}
          >
            Add Achievement
          </button>
        </div>
      )}
    </>
  );
};

export default Achievements;
