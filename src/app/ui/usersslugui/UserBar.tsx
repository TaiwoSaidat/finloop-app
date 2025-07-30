// import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import logo from "@/assets/logo.png";
// import { getUsers } from "@/lib/api";
import { UsersProp } from "@/types/dashboard";
// import { notFound } from "next/navigation";
// import { getUserById } from "@/lib/api";

type Props = {
  user: UsersProp;
};
const UserBar = ({ user }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between border-b border-gray-300 py-2">
        <div className="flex items-center">
          <Image
            src={user?.avatar}
            alt={user?.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-2">
            <div key={user?.id}>
              <h2 className="font-semibold">{user?.name}</h2>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBar;
