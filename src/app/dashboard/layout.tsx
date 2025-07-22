'use client'
import React, { useState } from "react";
import SideBar from "@/app/ui/dashboardui/SideBarComponents/SideBar";
import DashboardHeader from "../ui/dashboardui/DashboardHeader/DashboardHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <>
      <div className="flex flex-col overflow-y-hidden">
        <div className=" flex-1 ">
          <DashboardHeader
            sideBarOpen={sideBarOpen}
            toggleSideBar={toggleSideBar}
          />
        </div>
        <div className="flex flex-1  ">
       
          <SideBar isOpen={sideBarOpen}  />
          <main className="flex-1 overflow-y-auto p-6 w-full ">
            {children}
          </main>
        </div>         
      </div>
    </>
  );
};

export default layout;
