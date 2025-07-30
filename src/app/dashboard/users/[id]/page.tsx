import Button from "@/app/ui/usersslugui/StatusButton";
import UserBar from "@/app/ui/usersslugui/UserBar";
import { getUserById } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id);
  if (!user) return <div>User not found</div>;

  return (
    <>
      <div className="">
        <Link href="/dashboard/users">
          <div className="flex gap-2 items-center">
            <IoIosArrowRoundBack className="h-6 w-6" />
            <span>Back to Users</span>
          </div>
        </Link>

        <div className=" flexBetween ">
          <h1 className="regular-24">User Details</h1>
          <Button />
        </div>

        {/* user bar */}
        <UserBar user={user} />
      </div>
    </>
  );
}

// export default page;
