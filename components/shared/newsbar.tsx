import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ChevronDown } from "lucide-react";

interface Props {
  className?: string;
}

export const Newsbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("py-4 px-4 rounded-sm mt-5 bg-white h-fit", className)}>
      <Title text="Интересное" size="xs" className="font-bold mb-2 cursor-pointer" />
      <div className="mb-4 cursor-pointer hover:text-gray-500">
        <p className="text-sm leading-4">
          Объем выданной якутянам за полугодие ипотеки снизился вдвое{" "}
        </p>
        <p className="text-[11px] mt-1  text-gray-400">14 августа 2025</p>
      </div>
      <div className="mb-4 cursor-pointer hover:text-gray-500">
        <p className="text-sm leading-4">
          Якутские кинематографисты могут выиграть грант в 5 миллионов рублей на производство своего
          короткометражного фильма
        </p>
        <p className="text-[11px] mt-1 text-gray-400">14 августа 2025</p>
      </div>
      <div className="mb-4 cursor-pointer hover:text-gray-500">
        <p className="text-sm leading-4">
          Nothing beats a Jet2 holiday: в парке Якутска появился новый аттракцион
        </p>
        <p className="text-[11px] mt-1 text-gray-400">13 августа 2025</p>
      </div>
      <div className="mb-2 cursor-pointer hover:text-gray-500">
        <p className="text-sm leading-4">
          Люди все такие же клевые!» Артем Cut The Crap – о прошедшем гик-фестивале, Якутии, местной
          еде и творческих планах
        </p>
        <p className="text-[11px] mt-1  text-gray-400">12 августа 2025</p>
      </div>
      <div className="flex justify-end items-center cursor-pointer">
        <ChevronDown size={15} />
        <p className="text-[13px] font-bold ml-1">Показать еще</p>
      </div>
    </div>
  );
};
