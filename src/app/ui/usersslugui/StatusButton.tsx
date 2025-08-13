import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React from "react";

const STATUS = [
  { text: "Blacklist User", value: "Blacklist" },
  {
    text: "Activate User",
    value: "Activate",
  },
];

type StatusProp = {
  // value: "Activate" | "Blacklist";
  value: string;
  text: string;
};

const StatusStyles = {
  Blacklist: " border border-[#E4033B] text-[#E4033B] ",
  Activate: " border border-[#39CDCC] text-[#39CDCC] ",
};

const StatusButton = () => {
  // const className =
  //   statusStyles[normalizedValue as keyof typeof statusStyles] ??
  //   " bg-blue-light text-gray-800 border border-gray-300";

  return (
    <>
      <div className="  gap-2 flex flex-col items-center md:flex-row  p-2 rounded-2xl">
        {/* <span className="gap-2 w-full border border-purple-700  "> */}
        {STATUS.map((status: StatusProp) => {
          return (
            <Button
              key={status.value}
              variant="outline"
              className={clsx(
                " bg-gray-400 rounded-lg hover:bg-card-foreground md:w-[10rem] lg:w-[16rem]",
                StatusStyles[status.value as keyof typeof StatusStyles]
              )}
            >
              {status.text}
            </Button>
          );
        })}
        {/* </span> */}
      </div>
    </>
  );
};

export default StatusButton;
