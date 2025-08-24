import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  imageSrc: string;
  imageAlt: string;
  width?: number;
  height?: number;
  text: string;
}

export const ImageCard: React.FC<CardProps> = ({
  text,
  className,
  imageSrc,
  imageAlt,
  width = 165,
  height = 190,
}) => {
  return (
    <div
      className={cn(
        "border-2 border-white rounded-md bg-white overflow-hidden relative cursor-pointer ",
        className,
      )}
      style={{ width, height }}>
      <Image alt={imageAlt} src={imageSrc} fill style={{ objectFit: "cover" }} className="z-0 " />

      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black/15 to-transparent z-5 " />

      <div className="relative z-10 w-full h-full p-3 flex flex-col justify-start ">
        <p className="text-white text-[22px]/7 font-bold">{text}</p>
      </div>
    </div>
  );
};
