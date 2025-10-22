import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  image: string;
}

export const EdaCard: React.FC<Props> = ({ className, image }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative w-[300px] h-[150px] rounded-md overflow-hidden">
        <img src={image} alt="discount" className="w-full h-full object-cover cursor-pointer" />
      </div>
    </div>
  );
};
