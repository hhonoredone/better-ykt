import React from "react";
import { cn } from "@/lib/utils";
import { Triangle } from "lucide-react";

interface Props {
  className?: string;
}

export const ExchangeRate: React.FC<Props> = ({ className }) => {
  return (
    <div className="ml-4 mt-3 mb-1 flex justify-between">
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-[12px] text-gray-600">USD 82.25</span>
        <Triangle size={8} fill="green" color="green" />{" "}
        <span className="text-[12px] text-gray-600 ml-5">EUR 93.5</span>
        <Triangle size={8} fill="green" color="green" />
      </div>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-[12px] text-gray-600">KZT 0.15</span>
        <Triangle size={8} fill="green" color="green" />{" "}
        <span className="text-[12px] text-gray-600 ml-5">CNY 11.16</span>
        <Triangle size={8} fill="green" color="green" />
      </div>
    </div>
  );
};
