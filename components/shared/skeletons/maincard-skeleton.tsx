import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  className?: string;
}

export const MaincardSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-white rounded-md w-[740px] h-[400px] mt-5 px-5 pt-[25px] pb-[100px]">
      <Skeleton className="rounded-full w-[50px] h-[50px]" />
      <Skeleton className="h-[40px] w-[90px] mt-2" />
      <div className="mt-6 flex gap-2 justify-center">
        <Skeleton className="h-[230px] w-[170px] rounded-md" />
        <Skeleton className="h-[230px] w-[170px] rounded-md" />
        <Skeleton className="h-[230px] w-[170px] rounded-md" />
        <Skeleton className="h-[230px] w-[170px] rounded-md" />
        <div className="flex-grow" />
      </div>
    </div>
  );
};
