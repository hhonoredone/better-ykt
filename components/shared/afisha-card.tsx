import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  image: string;
  title: string;
  tags: string;
  link?: string;
}

export const AfishaCard: React.FC<Props> = ({ className, image, title, tags, link }) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <a href={link} target="_blank">
        <div className="relative w-[170px] h-[250px] rounded-md overflow-hidden">
          <img src={image} alt="poster" className="w-full h-full object-cover cursor-pointer" />
        </div>
      </a>
      <div className="mt-2 w-[170px]">
        <h3 className="text-[15px] font-medium">{title}</h3>
        <p className="text-[13px] text-gray-600">{tags}</p>
      </div>
    </div>
  );
};
