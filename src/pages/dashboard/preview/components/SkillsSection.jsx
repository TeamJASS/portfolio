import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 mb-10">
      <h2 className="text-2xl font-bold mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-500 text-white px-3 py-1 rounded-2xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
