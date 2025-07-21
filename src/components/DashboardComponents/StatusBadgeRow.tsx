import clsx from "clsx";
import React from "react";

const statusStyles = {
  Pending: " bg-color-card text-yellow-800",
  Active: "  border-green-500 text-green-800",
  Blacklisted: " bg-color-destructive text-red-800",
  Inactive: " text-red-800",
};

export function StatusBadgeRow({ status }: { status: string }) {
  return (
    // <div className="">
      <span
        className={clsx(
          "py-1.5 px-3 rounded-full small-12  capitalize",
          statusStyles[status as keyof typeof statusStyles] ||
            "bg-gray-100 text-gray-800 border-2 border-color-destructive"
        )}
      >
        {status}
      </span>
        //   <div className="border-4 border-green-500"> test</div>
    // </div>
  );
}
