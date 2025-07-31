import Link from "next/link";
import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

const userNotFound = () => {
  return (
    <>
      <div className=" flexCenter bg-card  flex-col my-24 mx-12 p-6 space-y-6 rounded shadow-2xl ">
        <h2 className=" regular-30">User Not Found</h2>
        <p className=" regular-24">Could not find requested resource</p>

        <div className="flexBetween space-x-6">
          <Link href="/dashboard/users">
            <span className="  flexStart gap-2 cursor-pointer small-18">
              <RiArrowGoBackLine />
              Back to Users
            </span>
          </Link>
          <span> or </span>
          <Link href="/dashboard">
            <span className="italic underline cursor-pointer animate-pulse small-18">
              Return to Dashboard
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default userNotFound;
