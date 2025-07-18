import { columns } from "@/app/dashboard/users/columns";
import { DataTable } from "@/components/data-table";
import React from "react";

export async function getUsers() {
  // const res = await fetch(`${process.env.MOCKAPI_URL}users/`, {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}users/`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error("Network response was not ok");
  }
}

const UserDashboard = async () => {
  const data = await getUsers();

  return (
    <>
      <div className="">this is the user dashboard page</div>
      {/* <div className="">USING A TABLE</div> */}
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default UserDashboard;
