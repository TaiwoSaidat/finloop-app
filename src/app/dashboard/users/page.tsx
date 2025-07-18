import UserStatsCard from "@/components/DashboardComponents/UserStatsCard";
import { USERSTATS } from "@/constants";
import UserDashboard from "../../ui/usersui/UserDashboard";
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
        <div className=" border-4 border-red-500">
          <p className="">users</p>
                <UserDashboard />

        </div>
        {/* <div className="border-2"> */}
        {/* </div> */}
        
      </div>
    </>
  );
};

export default page;
