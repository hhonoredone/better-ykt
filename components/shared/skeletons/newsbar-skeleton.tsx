import React from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

interface Props {
  className?: string;
}

export const NewsbarSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className="h-[510px] w-[220px] bg-white mt-5 rounded-sm flex justify-center items-center">
      <Spinner />
    </div>
  );
};
