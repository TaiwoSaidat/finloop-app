import React from "react";
import SideBar from "@/app/ui/dashboardui/SideBarComponents/SideBar";
import DashboardHeader from "../ui/dashboardui/DashboardHeader/DashboardHeader";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/*flex md:flex-row md:overflow-hidden */}
      <div className="flex">
        <div className=" hidden md:block flex-1 ">
          <SideBar />
        </div>
        <div className="flex-4">
          <DashboardHeader />
          {/* this is the app page.tsx below */}
          {children}
        </div>
      </div>
    </>
  );
};

export default layout;
