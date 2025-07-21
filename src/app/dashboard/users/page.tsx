import UserStatsCard from "@/components/DashboardComponents/UserStatsCard";
import { USERSTATS } from "@/constants";
import React from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { getUsers } from "@/lib/api";

const page = async () => {
  const data = await  getUsers();

  return (
    <>
      <div className=" space-y-8">
        <p className=" regular-24">Users</p>
        <div className="  flexBetween flex-wrap gap-2">
          {USERSTATS.map((item) => (
            <UserStatsCard
              title={item.title}
              key={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
          {/* {data.map((user: any) => (
            <UserStatsCard
              title={user.name}
              key={user.id}
              description={user.email}
              icon={user.avatar}
            />
          ))} */}
        </div>

        <div className="  ">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default page;
