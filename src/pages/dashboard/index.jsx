import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { PiFolder, PiUserCircleGear, PiMedal } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";
import { getAchievementList } from "../../services/userAchievements";
import { getSkillList } from "../../services/userSkills";
import { getProjectList } from "../../services/userProjects";
import { getEducationList } from "../../services/userEducation";
import { getExperienceList } from "../../services/userExperience";
import { getProfile } from "../../services/userProfile";

const iconStyle = "text-gray-500";

const sections = [
  {
    name: "Profile",
    path: "profile",
    icon: <CgUserList className={iconStyle} size={50} />,
  },
  {
    name: "Skills",
    path: "skills",
    icon: <PiUserCircleGear className={iconStyle} size={50} />,
  },
  {
    name: "Education",
    path: "education",
    icon: <SlGraduation className={iconStyle} size={40} />,
  },
  {
    name: "Experience",
    path: "experience",
    icon: <SlBriefcase className={iconStyle} size={40} />,
  },
  {
    name: "Projects",
    path: "projects",
    icon: <PiFolder className={iconStyle} size={40} />,
  },
  {
    name: "Achievements",
    path: "achievements",
    icon: <PiMedal className={iconStyle} size={40} />,
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const [profileCompletion, setProfileCompletion] = useState(0);
  const [skillsCount, setSkillsCount] = useState(0);
  const [educationCount, setEducationCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [achievementsCount, setAchievementsCount] = useState(0);

  const fetchData = async () => {
    try {
      const profileData = await getProfile();
      console.log("profile--->", profileData);
      const skillsData = await getSkillList();
      console.log("Skills", skillsData);
      const educationData = await getEducationList();
      console.log("Eduction", educationData);
      const experienceData = await getExperienceList();
      console.log("Experience", experienceData);
      const projectsData = await getProjectList();
      const achievementsData = await getAchievementList();
      console.log("achievements", achievementsData);
      console.log("projects", projectsData);

      // Calculate profile completion percentage
      const profileFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "bio",
        "profilePicture",
      ];
      const completedFields = profileFields.filter(
        (field) => profileData.data[field]
      ).length;
      const profileCompletionPercentage = Math.round(
        (completedFields / profileFields.length) * 100
      );
      setProfileCompletion(profileCompletionPercentage);

      // Set counts for other sections
      setSkillsCount(skillsData.data.length === 0 ? 5 : skillsData.data.length);
      setEducationCount(
        educationData.data.length === 0 ? 2 : educationData.data.length
      );
      setExperienceCount(
        experienceData.data.length === 0 ? 3 : experienceData.data.length
      );
      setProjectsCount(
        projectsData.data.length === 0 ? 5 : projectsData.data.length
      );
      setAchievementsCount(achievementsData.data.length);
    } catch (error) {
      console.log("Err", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex  flex-col align-middle justify-center items-center min-h-[50vh] p-10 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-center">
        Welcome {user.firstName} {user.lastName}
      </h1>
      <div className="grid grid-cols-2 gap-10 w-full py-10 items-center align-middle justify-between">
        {sections.map((section, index) => {
          let count = 0;
          let isProfile = false;

          switch (section.name) {
            case "Profile":
              count = profileCompletion;
              isProfile = true;
              break;
            case "Skills":
              count = skillsCount;
              break;
            case "Education":
              count = educationCount;
              break;
            case "Experience":
              count = experienceCount;
              break;
            case "Projects":
              count = projectsCount;
              break;
            case "Achievements":
              count = achievementsCount;
              break;
            default:
              count = 0;
              break;
          }

          return (
            <Link
              key={index}
              to={section.path}
              className="flex  bg-white my-5 rounded-2xl p-5 shadow-sm hover:shadow-xl"
            >
              <div className="flex w-full justify-between align-middle items-centers">
                <div className="flex align-middle justify-center items-center">
                  {section.icon}
                </div>
                <div className="flex flex-col w-full items-center align-middle gap-4">
                  <h4 className="text-gray-700 font-semibold text-2xl text-center">
                    {section.name}
                  </h4>
                  <div
                    className={`h-[90px] w-[90px] p-5 flex justify-center align-middle items-center border-8 ${
                      count < 1 ? "border-gray-400" : "border-green-700"
                    } rounded-full`}
                  >
                    {isProfile ? (
                      <div className="flex flex-col items-center justify-center align-middle">
                        <p>{count}%</p>
                        <p className="text-xs">Completed</p>
                      </div>
                    ) : (
                      <p>{count}</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
