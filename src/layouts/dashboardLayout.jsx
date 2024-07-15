/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import PreviewSection from "../components/PreviewSection";
import { useState } from "react";
import Loading from "../components/feedbacks/loading";

const DashboardLayout = (props) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-[#F3F3F1] flex">
      <DashboardSidebar user={props.user} />
      <div className="w-[60%]">
        <Outlet />
      </div>
      <div className="fixed h-[100vh] right-0 top-0 border-l-2 w-[25%] ">
        <PreviewSection />
      </div>
    </div>
  );
};

export default DashboardLayout;
