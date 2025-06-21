import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import search from "../../../../assets/search.png";
import bell from "@/assets/bell.png";
import profile from "@/assets/profile.png";

const DashboardHeader = () => {
  return (
    <>
      <div className="w-full border-4 bg-grey-800  grid md:grid-cols-2 py-4 border-red-500 ">
        {/* search */}
        <div className="hidden md:flex justify-start">
          <form
            action="submit"
            className="border-2 border-blue-dark flexBetween rounded-lg "
          >
            <input
              type="text"
              name="email"
              placeholder="Search for anything"
              className="  small-16 mx-4 text-gray-300"
            />
            {/* <div className="  bg-black flexCenter rounded"> */}
            <Image
              alt="arrow"
              src={search}
              className="w-8 h-8 p-2 bg-blue-dark rounded-r-md "
            />
            {/* </div> */}
          </form>
        </div>

        {/* <div className="flex justify-center"> */}
        <div className="flexBetween px-12  ">
          <p className="  underline ">
            <Link href="https://github.com/TaiwoSaidat/finloop-app">Docs</Link>
          </p>

          <Image
            src={bell}
            alt="notification"
            className="border-white rounded-3xl w-6 h-6"
          />

          <div className="md:flex justify-between items-center gap-3">
            <Image
              src={profile}
              alt="profile"
              width={24}
              height={24}
              className="rounded-2xl "
            />
            <p className="hidden md:block">Adedeji</p>
            <IoIosArrowDown className="hidden md:block" />
          </div>
        </div>
        {/* </div> */}

        {/* <div className="bg-red-800">
          <p className=""> DashboardHeader Header</p>{" "}
        </div> */}
      </div>
    </>
  );
};

export default DashboardHeader;
