"use client";

import { ColumnDef, getPaginationRowModel } from "@tanstack/react-table";
import { UsersProp } from "@/types/dashboard";
import { IoMdMore } from "react-icons/io";
import { TiEyeOutline } from "react-icons/ti";
import { SlUserUnfollow, SlUserFollowing, SlUserFollow } from "react-icons/sl";
import { HiUserAdd } from "react-icons/hi";
import { TbUserCancel, TbUserBolt } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgSortAz } from "react-icons/cg";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

// export type Users = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<UsersProp>[] = [
  {
    accessorKey: "organization",
    // header: "Organization",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          // className="flex w-full justify-start"
        >
          Organization
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "userName",
    // header: "User Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          User Name
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    // header: "Email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    // header: "Phone Number",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    // header: () => <div>Date Joined</div>,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date Joined
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formatted = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  //   don't forget to change to status
  {
    accessorKey: "name",
    // header: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CgSortAz className="h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <IoMdMore className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel> </DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator /> */}
            <DropdownMenuItem>
              {/* className="mr-2 h-4 w-4" */}
              <TiEyeOutline className="h-4 w-4" />
              View customer
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SlUserUnfollow className="h-4 w-4" />
              Blacklist User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SlUserFollowing className="h-4 w-4" />
              Activate User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
