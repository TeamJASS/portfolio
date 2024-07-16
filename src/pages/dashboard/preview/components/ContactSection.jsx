import React from "react";

const ContactSection = ({ contact }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5">
      <h2 className="text-2xl font-bold mb-5">Contact</h2>
      <div className="text-lg">
        <p className="mb-2">
          <span className="font-semibold">Email:</span> {contact.email}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Phone:</span> {contact.phone}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Address:</span> {contact.address}
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
