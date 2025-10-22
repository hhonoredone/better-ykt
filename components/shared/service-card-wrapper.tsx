import React, { RefObject, Suspense } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Title } from "./title";
import Link from "next/link";
import { MaincardSkeleton } from "./skeletons/maincard-skeleton";

interface Props {
  id: string;
  serviceImageUrl: string;
  title: string;
  children?: React.ReactNode;
  serviceColor: string;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  link: string;
}

export const ServiceCardWrapper: React.FC<Props> = ({
  id,
  className,
  children,
  title,
  serviceImageUrl,
  serviceColor,
  ref,
  link,
}) => {
  return (
    <div
      className={cn("rounded-md bg-white mt-5 overflow-hidden scroll-mt-22", className)}
      ref={ref}
      id={id}>
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
          <Link href={link} target="_blank">
            <Title text={title} className="font-bold mt-1 cursor-pointer" size="md" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};
