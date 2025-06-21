import { UsersProps } from "@/types/dashboard";
import Image from "next/image";
import React from "react";

const DashboardColumn = ({ icon, title, description }: UsersProps) => {
  return (
    <>
      <div className="  w-[240px]  bg-white p-4 space-y-4 rounded-xl">
        <Image src={icon} alt={`${title} icon`} />
        <p className="uppercase regular-14  ">{title}</p>
        <span className="large-24  ">{description}</span>
      </div>
    </>
  );
};

export default DashboardColumn;
