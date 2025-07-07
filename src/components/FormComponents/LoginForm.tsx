"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import homeImage from "../../assets/homeImage.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IFormInput } from "@/types/dashboard";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string().min(6).required("passwrod is required"),
});

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const router = useRouter();

  const onSubmit = (data: IFormInput) => {
    console.log("data is", data);
    router.push('/dashboard');
  };

  // useEffect(() => {
  //   setValue("email", "a@b.gmail.com");
  // }, [setValue]);
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 space-y-5  ">
        {/* left side */}
        <div className="bg-white rounded-2xl  ">
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
            <form
              // action="#"
              // method="post"
              className=" space-y-8 "
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Email */}
              <div className="">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email"
                  className="inputClass border border-white outline-0"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className="">
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Your Password"
                  className="inputClass border border-white outline-0"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Forgot Password */}
              <Link href="/">
                <p className=" text-blue-light hover:text-blue-dark">
                  FORGOT PASSWORD
                </p>
              </Link>
              {/* button */}
              {/* <Link href="/dashboard"> */}
              <button
                type="submit"
                className=" w-full md:w-[80%] lg:w-[80%]  bg-blue-light hover:bg-blue-dark text-white mt-12 py-3 border border-blue-light hover:border-blue-dark rounded-lg"
              >
                LOG IN
              </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
