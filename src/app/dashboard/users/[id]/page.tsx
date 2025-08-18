import StatusButton from "@/app/ui/usersslugui/StatusButton";
import UserBar from "@/app/ui/usersslugui/UserBar";
import { getUserById } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import UserNotFound from "../../userNotFound";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

type Props = {
  params: Promise<{
    id: string;
  }>;
};
export default async function Page({ params }: Props) {
  const { id } = await params;
  const user = await getUserById(id);
  console.log(id, "awaited param is");
  if (!user) return <UserNotFound />;

  return (
    <>
      <div className=" space-y-6 p-4 ">
        <Link href="/dashboard/users">
          <div className="flex gap-2 items-center">
            <IoIosArrowRoundBack className="h-6 w-6" />
            <span>Back to Users</span>
          </div>
        </Link>

        <div className=" flexBetween ">
          <h1 className="regular-24">User Details</h1>
          <StatusButton />
        </div>

        <div className="bg-card shadow-3xl px-6 pt-8 rounded space-y-6 ">
          {/* user bar */}
          {/* grid grid-cols-1 justify-center md:grid-cols-4  gap-4      */}
          <div className="  flexCenter flex-col md:flex-row space-y-2 md:space-x-4   ">
            <Image
              src={user?.avatar}
              alt={user?.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className=" p-2 w-full flexCenter flex-col gap-2  ">
              <h2 className="small-20 md:regular-24 ">{user?.name}</h2>
              <p className="small-14  flexStart uppercase ">
                {user?.userId?.slice(0, 10)}
              </p>
            </div>

            <div className=" w-px bg-gray-400 md:min-h-22 "></div>
            <div className="  p-2 w-full flexCenter flex-col gap-2 ">
              <p className=" regular-14">User's Tier</p>
              <div className="flex gap-2">
                <IoStar />
                <IoStar />
                <IoStarOutline />
              </div>
            </div>
            <div className="  w-px bg-gray-400 md:min-h-22 "></div>
            <div className="  p-2 w-full flexCenter flex-col gap-2 regular-14 ">
              <p className="regular-20 ">
                <span className="line-through ">N</span>
                {/* {user?.currency} */}
                {user?.loanAmount}
              </p>
              <p className="">
                {user?.bankAccount} / {user?.bankName}
              </p>
            </div>
          </div>
          <div className="flexBetween">
            <p className="">General Details</p>
            <p className="">Documents</p>
            <p className="">Bank Details</p>
            <p className="">Loans</p>
            <p className="">Savings</p>
            <p className="">Apps and System</p>
          </div>
        </div>

        <div className="bg-card shadow-2xl p-6 rounded space-y-4">
          <div className="">
            <p className="regular-16">Personal Information</p>
            <div className=" grid grid-cols-1 lg:grid-cols-5 py-2 space-y-4">
              <div className=" space-y-2 ">
                <p className=" small-12 border bg-white ">Full Name</p>
                <p className="regular-16 border">{user?.name}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Phone Number</p>
                <p className="regular-16 border">{user?.phoneNumber}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Email Address</p>
                <p className="regular-16 border">{user?.email}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">BVN</p>
                <p className="regular-16 border">{user?.bvn}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Gender</p>
                <p className="regular-16 border">{user?.gender}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Marital Status</p>
                <p className="regular-16 border">{user?.maritalStatus}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Children</p>
                <p className="regular-16 border">{user?.children}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" small-12 border bg-white ">Type of Residence</p>
                <p className="regular-16 border">{user?.residence}</p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="regular-16">Education and Employment</p>
          </div>
          <div className="">
            <p className="regular-16">Socials</p>
          </div>
          <div className="">
            <p className="regular-16">Guarantor(s)</p>
          </div>
        </div>
        {/* user bar */}
        {/* <UserBar user={user} /> */}
      </div>
    </>
  );
}
