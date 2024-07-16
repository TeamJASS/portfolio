import React from "react";
import { useSelector } from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProjectShowcase from "./ProjectShowcase";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const PortfolioPreview = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader user={user} />
      <div className="container mx-auto py-10 px-5">
        <ProjectShowcase projects={user.projects} />
        <SkillsSection skills={user.skills} />
        <ContactSection contact={user.contact} />
      </div>
    </div>
  );
};

export default PortfolioPreview;
