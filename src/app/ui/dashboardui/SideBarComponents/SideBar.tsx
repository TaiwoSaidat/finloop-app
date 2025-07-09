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
import { usePathname } from "next/navigation";

const SideBar = ({ isOpen }: { isOpen: React.ReactNode }) => {
  return (
    <>

        <aside
          // className="w-64  bg-red-800 text-white p-4"
          className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
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
        </aside>
    </>
  );
};

export default SideBar;
