import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "./title";

interface Props {
  serviceImageUrl: string;
  title: string;
  children?: React.ReactNode;
  serviceColor: string;
  className?: string;
}

export const ServiceCard: React.FC<Props> = ({
  className,
  children,
  title,
  serviceImageUrl,
  serviceColor,
}) => {
  return (
    <div className={cn("rounded-md bg-white mt-5 overflow-hidden", className)}>
      <div className={cn("h-10 rounded-t-md", serviceColor)} />
      <div className="px-5 pb-5 mt-[-20px]">
        <div className="flex items-start">
          <Image
            src={serviceImageUrl}
            width={50}
            height={50}
            alt="doska"
            className="border-2 border-white rounded-full bg-white"
          />
        </div>
        <div className="flex justify-between items-center">
          <Title text={title} className="font-bold mt-1 cursor-pointer" size="md" />
        </div>
        {children}
      </div>
    </div>
  );
};
