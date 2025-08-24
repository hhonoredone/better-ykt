"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ChevronDown, ChevronUp } from "lucide-react";
import { news } from "../../lib/constants";
import { Separator } from "../ui/separator";

interface Props {
  className?: string;
}

export const Newsbar: React.FC<Props> = ({ className }) => {
  const [visibleCount, setVisibleCount] = React.useState(4);

  const showMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const showLess = () => {
    setVisibleCount(4);
  };

  const hasMore = visibleCount < news.length;

  const isExpandedToMax = visibleCount == news.length + 1;

  return (
    <div className={cn("py-4 px-4 rounded-sm  bg-white h-fit mt-5", className)}>
      <Title
        text="Интересное"
        size="xs"
        className="font-bold mb-3 cursor-pointer  hover:text-gray-500 w-fit"
      />
      <Separator />
      {news.slice(0, visibleCount).map((newsItem) => (
        <div key={newsItem.id} className="mb-4 cursor-pointer hover:text-gray-500 mt-3">
          <p className="text-sm leading-4">{newsItem.title}</p>
          <p className="text-[11px] mt-1  text-gray-400">{newsItem.date}</p>
        </div>
      ))}

      <Separator />

      {hasMore && (
        <div
          className="flex justify-end items-center cursor-pointer mt-3 w-fit ml-auto  hover:text-gray-500"
          onClick={showMore}>
          <ChevronDown size={15} />
          <p className="text-[13px] font-bold ml-1">Показать еще</p>
        </div>
      )}

      {isExpandedToMax && (
        <div
          className="flex justify-end items-center cursor-pointer mt-3 w-fit ml-auto  hover:text-gray-500"
          onClick={showLess}>
          <ChevronUp size={15} />
          <p className="text-[13px] font-bold ml-1 ">Скрыть</p>
        </div>
      )}
    </div>
  );
};
