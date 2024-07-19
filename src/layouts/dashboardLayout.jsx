/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import PreviewSection from "../components/PreviewSection";
import { useState } from "react";
import Loading from "../components/feedbacks/loading";
import Modal from "../components/Modal";

const DashboardLayout = (props) => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <div className="bg-[#F3F3F1] flex">
      <DashboardSidebar user={props.user} onPreviewClick={handleOpenModal} />
      <div className="w-[65%]">
        <Outlet />
      </div>
      <div className="fixed h-[100vh] right-0 top-0 border-l-2 w-[20%] ">
        <PreviewSection />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default DashboardLayout;
