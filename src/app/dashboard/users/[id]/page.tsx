import StatusButton from "@/app/ui/usersslugui/StatusButton";
// import UserBar from "@/app/ui/usersslugui/UserBar";
import { getUserById } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import UserNotFound from "../../userNotFound";
import Image from "next/image";
// import { CiStar } from "react-icons/ci";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
// import { FaStar } from "react-icons/fa6";
// import { UsersProp } from "@/types/dashboard";

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

        <div className="bg-card shadow-2xl px-6 pt-8 rounded space-y-6">
          {/* user bar */}
          <div className="  flexCenter flex-col md:flex-row space-y-2 md:space-x-4 ">
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

            <div className=" w-px bg-card/85 md:min-h-22 "></div>

            <div className="  p-2 w-full flexCenter flex-col gap-2 ">
              <p className=" regular-14">User's Tier</p>
              <div className="flex gap-2">
                <IoStar color="#facc15" />
                <IoStar color="#facc15" />
                <IoStarOutline color="#facc15" />
              </div>
            </div>

            <div className="  w-px bg-card/85 md:min-h-22 "></div>

            <div className="  p-2 w-full flexCenter flex-col gap-2 regular-14 ">
              <div className="regular-20 ">
                <p className=" break-words">
                  ₦
                  {((user?.loanAmount || 0) * 10000).toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <p className=" break-words">
                {user?.bankAccount} / {user?.bankName}
              </p>
            </div>
          </div>

          <div className="flexBetween">
            <p className=" text-blue-light border-b-2 px-2 border-b-blue-light ">
              General Details
            </p>
            <p className=" hidden md:block lg:block px-2 ">Documents</p>
            <p className="hidden md:block lg:block px-2">Bank Details</p>
            <p className="hidden md:block lg:block px-2">Loans</p>
            <p className="hidden md:block lg:block px-2">Savings</p>
            <p className="hidden md:block lg:block px-2">Apps and System</p>
          </div>
        </div>

        <div className="bg-card shadow-2xl p-6 rounded space-y-4 space-x-4">
          <div className="">
            <p className="regular-16 pb-2">Personal Information</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 space-y-4 space-x-4 small-12 ">
              <div className=" space-y-2 ">
                <p className=" uppercase ">Full Name</p>
                <p className="">{user?.name}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Phone Number</p>
                <p className="">
                  {user?.phoneNumber
                    ? `+234${
                        [7, 8][Math.floor(Math.random() * 2)]
                      }${user.phoneNumber.replace(/\D/g, "").slice(0, 10)}`
                    : "No phone number"}
                </p>
              </div>

              <div className="space-y-2 ">
                <p className=" uppercase break-words ">Email Address</p>
                <p className="">{user?.email?.toLowerCase()}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">BVN</p>
                <p className="">{user?.bvn}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Gender</p>
                <p className=" capitalize">{user?.gender}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Marital Status</p>
                <p className="">
                  {user.maritalStatus ||
                    (["Married", "Divorced", "Single"][
                      Math.floor(Math.random() * 3)
                    ] as "Married" | "Divorced" | "Single")}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Children</p>
                <p>{Math.floor(Math.random() * 6) + 1}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Type of Residence</p>
                <p className="">
                  {user.residence ||
                    ([
                      "Parents",
                      "Mini-flat",
                      "2-Bedroom Flat",
                      "3-Bedroom Flat",
                      "4-Bedroom Flat",
                      "5-Bedroom Flat",
                      "Duplex",
                      "Other",
                    ][Math.floor(Math.random() * 8)] as
                      | "Parents"
                      | "Mini-flat"
                      | "2-Bedroom Flat"
                      | "3-Bedroom Flat"
                      | "4-Bedroom Flat"
                      | "5-Bedroom Flat"
                      | "Duplex"
                      | "Other")}
                </p>
              </div>
            </div>
          </div>

          <hr className="border border-b-gray-400 " />

          <div className="">
            <p className="regular-16 pb-2">Education and Employment</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 space-y-4 space-x-4 small-12 ">
              <div className=" space-y-2 ">
                <p className=" uppercase ">Level of Education</p>
                <p className="">
                  {user.educationLevel ||
                    (["SSCE", "B.Sc", "M.Sc", "PhD", "HND", "OND"][
                      Math.floor(Math.random() * 6)
                    ] as "SSCE" | "B.Sc" | "M.Sc" | "PhD" | "HND" | "OND")}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Employment Status</p>
                <p className="">
                  {user.employmentStatus ||
                    (["Employed", "Unemployed", "Self-Employed"][
                      Math.floor(Math.random() * 3)
                    ] as "Employed" | "Unemployed" | "Self-Employed")}
                </p>
              </div>

              <div className="space-y-2 ">
                <p className=" uppercase  ">Sector of Employment</p>
                <p className="">{user?.sector}</p>
              </div>

              <div className="space-y-2 ">
                <p className=" uppercase  ">Duration of Employment</p>
                <p>{Math.floor(Math.random() * 15) + 1}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Office Email</p>
                <p className=" break-words ">
                  {`${user?.name || ""}@${user?.companyName || ""}}.com`
                    .replace(/\s+/g, ".")
                    .replace(/[^a-zA-Z0-9@.]/g, "")
                    .toLowerCase()}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Monthly Income</p>
                <p className="capitalize">
                  ₦
                  {((user?.monthlyIncome || 0) * 10000).toLocaleString(
                    "en-NG",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Loan Repayment</p>
                <p className="">
                  ₦
                  {((user?.loanRepayment || 0) * 100).toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Type of Residence</p>
                <p className="">
                  {user.residence ||
                    ([
                      "Parents",
                      "Mini-flat",
                      "2-Bedroom Flat",
                      "3-Bedroom Flat",
                      "4-Bedroom Flat",
                      "5-Bedroom Flat",
                      "Duplex",
                      "Other",
                    ][Math.floor(Math.random() * 8)] as
                      | "Parents"
                      | "Mini-flat"
                      | "2-Bedroom Flat"
                      | "3-Bedroom Flat"
                      | "4-Bedroom Flat"
                      | "5-Bedroom Flat"
                      | "Duplex"
                      | "Other")}
                </p>
              </div>
            </div>
          </div>
          <hr className="border border-b-gray-400 " />

          <div className="">
            <p className="regular-16 pb-2">Socials</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 space-y-4 space-x-4 small-12 ">
              <div className=" space-y-2 ">
                <p className=" uppercase ">Twitter</p>
                <p className="">@{user?.userName?.toLowerCase()}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Facebook</p>
                <p className="">{user?.name}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Instagram</p>
                <p className="">@{user?.userName?.toLowerCase()}</p>
              </div>
            </div>
          </div>
          <hr className="border border-b-gray-400 " />
          <div className="">
            <p className="regular-16 pb-2">Guarantor(s)</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 space-y-4 space-x-4 small-12 ">
              <div className=" space-y-2 ">
                <p className=" uppercase ">Full Name</p>
                <p className="">{user?.guarantorName}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Phone Number</p>
                <p className="">
                  {" "}
                  {user?.guarantorPhone
                    ? `+234${
                        [7, 8][Math.floor(Math.random() * 2)]
                      }${user.guarantorPhone.replace(/\D/g, "").slice(0, 10)}`
                    : "No phone number"}
                </p>
              </div>

              <div className="space-y-2 ">
                <p className=" uppercase  ">Email Address</p>
                <p className=" break-words">
                  {`${user?.guarantorName}@gmail.com`
                    .replace(/\s+/g, ".")
                    .replace(/[^a-zA-Z0-9@.]/g, "")
                    .toLowerCase()}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">relationship</p>
                <p className="">
                  {user.relationship ||
                    ([
                      "Sibling",
                      "Parent",
                      "Grand-Parent",
                      "Uncle",
                      "Aunt",
                      "Cousin",
                      "Friend",
                    ][Math.floor(Math.random() * 7)] as
                      | "Sibling"
                      | "Parent"
                      | "Grand-Parent"
                      | "Uncle"
                      | "Aunt"
                      | "Cousin"
                      | "Friend")}
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2 space-y-4 space-x-4 small-12 ">
              <div className=" space-y-2 ">
                <p className=" uppercase ">Full Name</p>
                <p className="">{user?.guarantor2Name}</p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">Phone Number</p>
                <p className="">
                  {" "}
                  {user?.guarantor2Phone
                    ? `+234${
                        [7, 8][Math.floor(Math.random() * 2)]
                      }${user.guarantorPhone.replace(/\D/g, "").slice(0, 10)}`
                    : "No phone number"}
                </p>
              </div>

              <div className="space-y-2 ">
                <p className=" uppercase  ">Email Address</p>
                <p className=" break-words">
                  {`${user?.guarantor2Name}@gmail.com`
                    .replace(/\s+/g, ".")
                    .replace(/[^a-zA-Z0-9@.]/g, "")
                    .toLowerCase()}
                </p>
              </div>
              <div className="space-y-2 ">
                <p className=" uppercase  ">relationship</p>
                <p className="">
                  {user.relationship ||
                    ([
                      "Sibling",
                      "Parent",
                      "Grand-Parent",
                      "Uncle",
                      "Aunt",
                      "Cousin",
                      "Friend",
                    ][Math.floor(Math.random() * 7)] as
                      | "Sibling"
                      | "Parent"
                      | "Grand-Parent"
                      | "Uncle"
                      | "Aunt"
                      | "Cousin"
                      | "Friend")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
