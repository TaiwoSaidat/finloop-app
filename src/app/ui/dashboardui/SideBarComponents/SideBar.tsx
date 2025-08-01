"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../../assets/logo.png";
import { BUSINESSES, CUSTOMERS, SETTINGS } from "@/constants";
import { CustomerProps } from "@/types/dashboard";
import { MdOutlineHouse } from "react-icons/md";
import { RiBriefcase3Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
// import { getUsers } from "@/lib/api";

const SideBar =  ({ isOpen }: { isOpen: React.ReactNode }) => {
//   const data = await getUsers()
//   const organizations = [...new Set(data.map((user: any) => user.organization))];
//  console.log(organizations)

 

  
  return (
    <>
      <aside
        className={`fixed  shadow-2xl md:static top-0 left-0 h-full  w-64 pb-2 pt-6 transition-transform duration-300 z-40  overflow-y-auto
          ${isOpen ? "translate-x-0 " : "-translate-x-full"} md:translate-x-0`}
      >
         <div className="flex gap-4 items-center px-4 md:hidden lg:hidden ">
          <Link href="/dashboard">
            <Image src={logo} alt="" width={24} height={16}  />
          </Link>
          <p className="regular-20  ">finloop</p>
        </div>
        <div className="space-y-12">
          <div className="flex items-center space-x-2 small-16 pt-2 px-6 hover:opacity-50 hover:bg-blue-light   ">
            <RiBriefcase3Fill />
            <span>Switch Organisation</span>
            <IoIosArrowDown />
          </div>

          {/* {
            organizations.map((org: any, index) => (
              
                <span>{org}</span>
             
            ))
          } */}

          <div>
            <Link
              href="/dashboard"
              className=" flex items-center space-x-2 small-16  px-6 hover:opacity-50 hover:bg-blue-light "
            >
              <MdOutlineHouse />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4 my-4 py-2">
          <div className="flex flex-col   space-y-8  ">
            <h2 className="small-12 px-6 ">CUSTOMERS</h2>
            <ol className="small-16 space-y-2">
              {CUSTOMERS.map((item: CustomerProps) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 px-6  hover:opacity-50"
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
            <h2 className="small-12 px-6  ">BUSINESSES</h2>
            <ol className="small-16 space-y-2">
              {BUSINESSES.map((item: CustomerProps) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 px-6  hover:opacity-50"
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
            <h2 className="small-12 px-6  ">SETTINGS</h2>
            <ol className="small-16 space-y-2">
              {SETTINGS.map((item: CustomerProps) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Link
                      href={item.path}
                      className="flex items-center space-x-2 hover:bg-blue-light py-2 px-6  hover:opacity-50"
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
      </aside>
    </>
  );
};

export default SideBar;
