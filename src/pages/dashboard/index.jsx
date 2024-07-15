import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { PiFolder, PiUserCircleGear } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";

import { PiMedal } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";

const sections = [
  {
    name: "Bio",
    path: "bio",
    icon: <CgUserList size={30} />,
  },
  {
    name: "Skills",
    path: "skills",
    icon: <PiUserCircleGear size={30} />,
  },
  {
    name: "Education",
    path: "education",
    icon: <SlGraduation size={30} />,
  },
  {
    name: "Experience",
    path: "experience",
    icon: <SlBriefcase size={30} />,
  },
  {
    name: "Projects",
    path: "projects",
    icon: <PiFolder size={30} />,
  },
  {
    name: "Achievements",
    path: "achievements",
    icon: <PiMedal size={30} />,
  },
  {
    name: "Socials",
    path: "socials",
    icon: <IoChatbubblesOutline size={30} />,
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="flex flex-col align-middle justify-center items-center min-h-[50vh] p-10">
      <h1 className="text-3xl font-bold text-center">
        Welcome {user.firstName} {user.lastName}
      </h1>

      {sections.map((section, index) => {
        return (
          <Link
            key={index}
            to={section.path}
            className="flex w-full bg-white my-5 rounded-2xl p-5 shadow-sm hover:shadow-lg"
          >
            <div className="flex gap-4 justify-start align-middle items-centers">
              {section.icon}
              <h4 className="text-gray-700 font-semibold text-xl">
                {section.name}
              </h4>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
