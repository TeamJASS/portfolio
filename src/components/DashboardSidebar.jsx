/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { CgUserList } from "react-icons/cg";
import { SlGraduation } from "react-icons/sl";
import { PiUserCircleGear } from "react-icons/pi";
import { SlBriefcase } from "react-icons/sl";

import { PiFolder } from "react-icons/pi";
import { PiMedal } from "react-icons/pi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { GrHomeRounded } from "react-icons/gr";
import { useSelector } from "react-redux";

const links = [
  { name: "Home", icon: <GrHomeRounded size={30} />, to: "/dashboard" },

  { name: "Profile", icon: <CgUserList size={30} />, to: "/dashboard/profile" },
  {
    name: "Skills",
    icon: <PiUserCircleGear size={30} />,
    to: "/dashboard/skills",
  },
  {
    name: "Education",
    icon: <SlGraduation size={30} />,
    to: "/dashboard/education",
  },
  {
    name: "Experience",
    icon: <SlBriefcase size={30} />,
    to: "/dashboard/experience",
  },
  { name: "Projects", icon: <PiFolder size={30} />, to: "/dashboard/projects" },
  {
    name: "Achievements",
    icon: <PiMedal size={30} />,
    to: "/dashboard/achievements",
  },
  // {
  //   name: "Socials",
  //   icon: <IoChatbubblesOutline size={30} />,
  //   to: "/dashboard/socials",
  // },
];

const DashboardSidebar = ({ onPreviewClick }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const location = useLocation();
  return (
    <>
      <div className="fixed h-[100vh] w-[15%] bg-transparent top-0 left-0 z-50 p-4">
        <div className="h-[100%] w-full border rounded-3xl p-2 shadow-xl bg-white flex flex-col justify-between gap-2">
          <div className="flex flex-col">
            <Link to="/dashboard" className="flex w-auto my-7 mx-auto">
              <h1 className="text-2xl text-center font-bold mb-2">
                Porti<span className="text-blue-500">Builder</span>
              </h1>
            </Link>

            {links.map((link, index) => {
              return (
                <Link
                  to={link.to}
                  key={index}
                  className={`flex justify-start align-middle items-center gap-4 p-4 rounded-3xl text-md my-1 hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer ${
                    location.pathname === link.to
                      ? "text-blue-700 font-bold bg-slate-300"
                      : ""
                  }`}
                >
                  {link.icon}
                  <p>{link.name}</p>
                </Link>
              );
            })}
          </div>

          <div className="flex h-full flex-col gap-2 justify-center">
            <div
              // to="/dashboard/preview"
              onClick={onPreviewClick}
              className="flex justify-start align-middle items-center gap-4 p-2 px-4 bg-blue-200 rounded-3xl text-md hover:bg-blue-300 text-gray-700 font-semibold cursor-pointer"
            >
              <VscPreview size={30} />
              <p className="font-bold">Preview</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-[15%] bg-transparent" />
    </>
  );
};

export default DashboardSidebar;
