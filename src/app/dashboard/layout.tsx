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
      {/*flex md:flex-row md:overflow-hidden */}
      <div className="flex flex-col">
        <div className=" flex-1 ">
          <DashboardHeader
            sideBarOpen={sideBarOpen}
            toggleSideBar={toggleSideBar}
          />
        </div>
        <div className="flex flx-1 overflow-hidden ">
          {/* hidden md:block" */}
          {/* <div className=""> */}
          {/* </div> */}
          <SideBar isOpen={sideBarOpen} />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>

          {/* this is the app page.tsx below */}
        </div>
      </div>
    </>
  );
};

export default layout;
