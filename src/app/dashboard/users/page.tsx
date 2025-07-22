"use client";
import UserStatsCard from "@/components/DashboardComponents/UserStatsCard";
import { USERSTATS } from "@/constants";
import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";
import { getUsers } from "@/lib/api";
import { UsersProp } from "@/types/dashboard";
import Loading from "../loading";

const page = () => {
  const [users, setUsers] = useState<UsersProp[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const cached = localStorage.getItem("cachedUsers");

      if (cached) {
        setUsers(JSON.parse(cached));
        setLoading(false);
        console.log("Using cached data");
      } else {
        try {
          const data = await getUsers();
          setUsers(data);
          localStorage.setItem("cachedUsers", JSON.stringify(data));
          console.log("Fetching from network");
        } catch (err) {
          console.error("Error fetching users", err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <div className=" space-y-8  ">
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
          <DataTable columns={columns} data={users} />
        </div>
      </div>
    </>
  );
};

export default page;
