"use client"
import React, { useState } from "react";

const Accordion = ({ title, content } : { title:any, content:any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-md mb-4">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-900"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-gray-900">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;