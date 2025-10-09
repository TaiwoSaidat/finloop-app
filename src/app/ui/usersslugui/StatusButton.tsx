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
  return (
    <>
      <div className="  gap-2 flex flex-col items-center md:flex-row  p-2 rounded-2xl">
        {STATUS.map((status: StatusProp) => {
          return (
            <Button
              key={status.value}
              variant="outline"
              className={clsx(
                " bg-card/50 rounded-lg hover:bg-card-foreground md:w-[10rem] lg:w-[16rem]",
                StatusStyles[status.value as keyof typeof StatusStyles]
              )}
            >
              {status.text}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default StatusButton;
