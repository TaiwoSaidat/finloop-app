// import clsx from "clsx";
// import React from "react";

// const statusStyles = {
//   Pending: " bg-color-card text-yellow-800",
//   Active: "  border-green-500 text-green-800",
//   Blacklisted: " bg-color-destructive text-red-800",
//   Inactive: " text-red-800",
// };

// export function StatusBadgeRow({ status }: { status: string }) {
//   return (
//     // <div className="">
//       <span
//         className={clsx(
//           "py-1.5 px-3 rounded-full small-12  capitalize",
//           statusStyles[status as keyof typeof statusStyles] ||
//             "bg-gray-100 text-gray-800  "
//         )}
//       >
//         {status}
//       </span>
//         //   <div className="border-4 border-green-500"> test</div>
//     // </div>
//   );
// }
// StatusBadgeRow.tsx


import clsx from "clsx";
import React from "react";
//  --color-pending: #E9B200;

    //  --color-active: #39CD62;
    //   --color-inactive: #545F7D;
    //   --color-blacklisted: #E4033B;

const statusStyles = {
  Pending: "bg-[#E9B20014]  text-[#E9B200]",
  Active: "bg-[#39CD6214]  text-[#39CD62]",
  Blacklisted: "bg-[#E4033B14]  text-[#E4033B]",
  Inactive: "bg-[#545F7D14]  text-[#545F7D]",
};


export function StatusBadgeRow({ value }: { value: string }) {
  // Capitalize the first letter to match the keys in statusStyles
  const normalizedValue =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

  const className =
    statusStyles[normalizedValue as keyof typeof statusStyles] ??
    " bg-blue-light text-gray-800 border border-gray-300";

  return (
    <span
      className={clsx("py-1.5 px-3 rounded-full text-sm capitalize w-full", className)}
    >
      {value}
    </span>
  );
}


