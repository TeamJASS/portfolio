import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FiChevronDown } from "react-icons/fi"; // Import an icon for the dropdown
import { RiLogoutCircleRLine } from "react-icons/ri";
import { PiUserGear } from "react-icons/pi";

const PreviewSection = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    localStorage.removeItem("portiUser");
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickAway = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  return (
    <div className="p-4 h-[100%] flex flex-col justify-between">
      <div className="flex justify-between align-middle items-center">
        <h1 className="text-xl text-center font-bold mb-2">
          Porti<span className="text-blue-500">Builder</span>
        </h1>
        <div
          className="user-details flex justify-end align-middle items-center gap-4 p-4 border-2 rounded-3xl text-md hover:bg-gray-200 text-gray-700 font-semibold cursor-pointer relative"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="flex justify-center align-middle items-center h-[30px] w-[30px] rounded-full text-white font-bold bg-black">
            {user.firstName && user.firstName.charAt(0)}
          </div>
          <p>{user.username}</p>
          <FiChevronDown />
          {dropdownVisible && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-2xl shadow-2xl z-10">
              <ul>
                <li className="flex justify-start gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <PiUserGear size={20} /> Account settings
                </li>
                <li
                  className=" flex justify-start gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={handleLogout}
                >
                  <RiLogoutCircleRLine size={20} /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
