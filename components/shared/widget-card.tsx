import React from "react";
import { cn } from "@/lib/utils";
import { TAG_COLORS, TagColor } from "@/lib/types";

interface Props {
  className?: string;
  title: string;
  description?: string;
  image: string;
  link?: string;
  tags?: {
    name: string;
    color: TagColor;
  }[];
}

export const WidgetCard: React.FC<Props> = ({
  className,
  title,
  description,
  image,
  tags,
  link,
}) => {
  return (
    <a href={link} target="_blank">
      <div className="flex justify-between gap-4 rounded-2xl p-4  hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200 cursor-pointer">
        <img
          src={image}
          className="h-[155px] w-[155px] rounded-md object-cover"
          alt="WidgetImage"
        />

        <div className="flex flex-col">
          <h1 className="font-bold text-[18px] text-gray-900 leading-tight">{title}</h1>
          <p className="text-gray-500 text-[12px] mt-0.5">{description}</p>
          <div className="flex-grow" />
          <div className="flex flex-wrap gap-1">
            {tags?.map((item) => (
              <span
                key={item.name}
                className={cn("text-[11px] px-1 py-1 rounded-full border", TAG_COLORS[item.color])}>
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};
