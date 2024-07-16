import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { PiFolder, PiUserCircleGear } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";

import { PiMedal } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";

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
  // {
  //   name: "Socials",
  //   path: "socials",
  //   icon: <IoChatbubblesOutline className={iconStyle} size={40} />,
  // },
];

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="flex flex-col align-middle justify-center items-center min-h-[50vh] p-10">
      <h1 className="text-3xl font-bold text-center">
        Welcome {user.firstName} {user.lastName}
      </h1>
      <div className="grid grid-cols-2 gap-5 w-full p-10 items-center align-middle justify-center">
        {sections.map((section, index) => {
          return (
            <Link
              key={index}
              to={section.path}
              className="flex w-[80%] bg-white my-5 rounded-2xl p-5 shadow-sm hover:shadow-xl"
            >
              <div className="flex w-full justify-between align-middle items-centers">
                <div className="flex align-middle justify-center items-center">
                  {section.icon}
                </div>
                <div className=" flex flex-col w-full items-center align-middle gap-4">
                  <h4 className="text-gray-700 font-semibold text-2xl text-center">
                    {section.name}
                  </h4>
                  <div className="h-[100px] w-[100px] p-5 flex justify-center align-middle items-center border-8 border-green-700 rounded-full">
                    <p>100%</p>
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
