"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const page = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-full my-32  flexCenter flex-col space-y-3 regular-24 uppercase  ">
          <p className=" ">This is the dashboard page.</p>
          <p>
            {" "}
            Navigate to <span className="capitalize ">'Users'</span> on sidebar
            to view Users
          </p>
        </div>
      )}
    </>
  );
};

export default page;
