import UserStatsCard from "@/components/DashboardComponents/UserStatsCard";
import { USERSTATS } from "@/constants";
import UserDashboard from '../../ui/usersui/UserDashboard'
import React from "react";

const page = () => {
  return (
    <>
      <div className="border-6 border-green-400 space-y-8">
        <p className=" regular-24">Users</p>
        <div className=" flexBetween flex-wrap gap-2">
          {USERSTATS.map((item) => (
            <UserStatsCard
              title={item.title}
              key={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="">
          users
        </div>
        <UserDashboard />
      </div>
    </>
  );
};

export default page;
