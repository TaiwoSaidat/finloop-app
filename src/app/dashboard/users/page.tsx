import DashboardColumn from "@/components/DashboardComponents/DashboardColumn";
import { USERS } from "@/constants";
import React from "react";

const page = () => {
  return (
    <>
      <div className="border-6 border-green-400 space-y-8">
        <p className=" regular-24">Users</p>
        <div className=" flexBetween flex-wrap gap-2">
          {USERS.map((item) => (
            <DashboardColumn
              title={item.title}
              key={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>

        <div className="grid grid-cols-7">
          users
        </div>
      </div>
    </>
  );
};

export default page;
