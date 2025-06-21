"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../../assets/logo.png";
import { BUSINESSES, CUSTOMERS, SETTINGS } from "@/constants";
import { CustomerProps } from "@/types/dashboard";
import { MdOutlineHouse } from "react-icons/md";
import { RiBriefcase3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

const SideBar = () => {
  // const pathname = usePathname;
  // console.log(pathname ,"is pathname");
  return (
    <>
      <div className="  border-4 border-amber-500 rounded-2xl p-4 ">
        {/* This is the full side bar */}
        <div className="flex gap-4 py-4 ">
          <Link href="/dashboard">
            <Image src={logo} alt="" width={36} height={24} />
          </Link>
          <p className="regular-20 md:large-30 lg:larger-48 ">finloop</p>
        </div>
        {/* <div className=" text-xl md:text-3xl lg:text-5xl"></div> */}
        <div className="space-y-12">
          <div className="flex items-center space-x-2 small-16  ">
            <RiBriefcase3Fill />
            <span>Switch Organisation</span>
            <IoIosArrowDown />
          </div>

          <div className=" flex items-center space-x-2 small-16 font-bold ">
            <MdOutlineHouse />
            <span>Dashboard</span>
          </div>
        </div>

        <div className="space-y-4 my-4 py-2">
          <div className="flex flex-col   space-y-8  ">
            <h2 className="small-12  ">CUSTOMERS</h2>
            <ol className="small-16 space-y-2">
              {CUSTOMERS.map((item: CustomerProps) => {
                const Icon = item.icon;
                const isSelected = item.path !== "dashboard";
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 hover:opacity-50"
                    >
                      <span className="">
                        <Icon className="" />
                      </span>
                      <p> {item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col   space-y-8  ">
            <h2 className="small-12  ">BUSINESSES</h2>
            <ol className="small-16 space-y-2">
              {BUSINESSES.map((item: CustomerProps) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 hover:opacity-50"
                    >
                      <span className="">
                        <Icon />
                      </span>
                      <p> {item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col   space-y-8  ">
            <h2 className="small-12  ">SETTINGS</h2>
            <ol className="small-16 space-y-2">
              {SETTINGS.map((item: CustomerProps) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 hover:opacity-50"
                    >
                      <span className="">
                        <Icon />
                      </span>
                      <p> {item.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
