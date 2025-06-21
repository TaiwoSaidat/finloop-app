"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import homeImage from "../../assets/homeImage.svg";

const LogInForm = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-5  ">
        {/* left side */}
        <div className="bg-white rounded-2xl border ">
          <Image
            src={homeImage}
            alt=""
            className=" w-full rounded-2xl h-full "
          />
        </div>

        {/* right side */}
        <div className=" px-10 py-6 rounded-2xl space-y-8">
          <div className="text-blue-dark space-y-4 py-6">
            <h3 className=" large-40 ">Welcome!</h3>
            <p className=" regular-20 ">Enter details to login.</p>
          </div>

          {/* form */}
          <div className=" ">
            <form action="#" method="post" className=" space-y-8 ">
              {/* Email */}
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="inputClass border border-white"
              />
              {/* Password */}
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="inputClass border border-white"
              />

              {/* Forgot Password */}
              <Link href="/">
                <p className=" text-blue-light hover:text-blue-dark">
                  FORGOT PASSWORD
                </p>
              </Link>
              {/* button */}
              <Link href="/dashboard">
                <button
                  type="submit"
                  className=" w-full md:w-[80%] lg:w-[80%]  bg-blue-light hover:bg-blue-dark text-white mt-12 py-3 border border-blue-light rounded-lg"
                >
                  LOG IN
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
