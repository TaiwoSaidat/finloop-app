"use client";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const page = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-full my-32  flexCenter  ">
          <p className=" regular-24 uppercase">
            this is the dashboard page. click{" "}
            <span className="capitalize">'Users'</span> on sidebar to view Users
          </p>
        </div>
      )}
    </>
  );
};

export default page;
