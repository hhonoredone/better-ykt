import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  companyName: string;
  vacancies: number;
  logo?: string;
  link?: string;
}

export const RabotaCard: React.FC<Props> = ({ className, companyName, vacancies, logo, link }) => {
  return (
    <div
      className={cn(
        className,
        "bg-white w-[225px] h-[180px] rounded-xl p-5 flex flex-col border border-gray-200 hover:border-blue-200 transition-all duration-300 cursor-pointer group hover:shadow-md",
      )}>
      <div className="flex items-start justify-between mb-4">
        <h1 className="font-medium text-[17px] leading-tight text-gray-900 max-w-[155px] group-hover:text-primary transition-color line-clamp-2 group-hover:line-clamp-3 transition duration-300">
          {companyName}
        </h1>
      </div>

      <div className="flex-grow"></div>

      <div className="flex justify-between items-center mt-auto">
        <a href={link} target="_blank">
          <Button
            className="rounded-full py-3 font-semibold text-[13px] bg-gray-100  hover:text-white text-gray-700"
            size="sm">
            {vacancies} вакансии
          </Button>
        </a>

        <img
          src={logo}
          className="border-2 border-white rounded-full bg-white h-11 w-11 shadow-md"
          alt="companyLogo"
        />
      </div>
    </div>
  );
};
