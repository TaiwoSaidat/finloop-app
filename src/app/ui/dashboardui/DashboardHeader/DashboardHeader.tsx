import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import search from "../../../../assets/search.png";
import bell from "@/assets/bell.png";
import profile from "@/assets/profile.png";

const DashboardHeader = ({
  sideBarOpen,
  toggleSideBar,
}: {
  sideBarOpen: boolean;
  toggleSideBar: () => void;
}) => {
  return (
    <>
      <div className="w-full border-2 grid grid-cols-2 md:grid-cols-3 py-4  items-center ">
        {/* logo */}
        <div className="flex gap-4 items-center px-4 ">
          <Link href="/dashboard">
            <Image src={logo} alt="" width={24} height={16}  />
          </Link>
          <p className="regular-20 hidden md:block ">finloop</p>
        </div>

        {/* search */}
        <div className="hidden  md:flex justify-start ">
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
            <Image
              alt="arrow"
              src={search}
              className="w-8 h-8 p-2 bg-blue-dark rounded-r-md "
            />
          </form>
        </div>

        {/* third grid */}
        <div className="flexBetween px-12 gap-3 ">
          <p className="  underline ">
            <Link href="https://github.com/TaiwoSaidat/finloop-app">Docs</Link>
          </p>

          <Image
            src={bell}
            alt="notification"
            className=" border-white rounded-3xl w-6 h-6 "
          />
          {/* profile */}
          <div className="md:flex  justify-between items-center gap-3">
            <Image
              src={profile}
              alt="profile"
              width={24}
              height={24}
              className=" rounded-2xl "
            />
            <p className="hidden md:block">Adedeji</p>
            <IoIosArrowDown className="hidden md:block" />
          </div>

          {/* menu and close */}
          <button onClick={toggleSideBar} className="md:hidden">
            {sideBarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#213f7d"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#213f7d"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
