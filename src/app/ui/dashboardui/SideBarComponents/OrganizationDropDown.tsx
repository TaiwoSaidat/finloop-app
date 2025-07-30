import React, { useState } from "react";
import { RiBriefcase3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const OrganizationDropDown = ({ organizations }: { organizations: string[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <div
        className="flex items-center space-x-2 small-16 py-2 px-6 hover:opacity-50 hover:bg-blue-light cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <RiBriefcase3Fill />
        <span>Switch Organisation</span>
        <IoIosArrowDown
          className={`transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md z-50">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => {
                console.log(`Selected: ${org}`);
                setOpen(false); // optionally close dropdown on select
              }}
            >
              {org}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrganizationDropDown;
