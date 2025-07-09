import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { Roboto, Michroma } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight:['400']
});
const Header = () => {
  return (
    <>
      {/* m-12 p-6 h-screen gap-12 md:gap-22 lg:gap-24 */}
      <div
        className={`${roboto.className} flex mx-4 md:mx-12 lg:mx-14 gap-4 py-6 `}
      >
        <Link href="/">
          <Image src={logo} alt="" className=" w-6 md:w-8 lg:w-12" />
        </Link>
        <p className=" text-blue-dark flexCenter text-xl md:text-3xl lg:text-5xl ">
          finloop
        </p>
      </div>
    </>
  );
};

export default Header;
