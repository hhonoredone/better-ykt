import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building, ClipboardCheck, House, HousePlus, Popcorn, Users, Utensils } from "lucide-react";

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div className="sticky top-[70px] py-4 max-w-[220px] ">
      <ul className="grid gap-[4px]">
        {/* <Button variant="secondary" className="pl-5">
          <div className="flex items-center">
            <House className="mr-3 icon " color="hsl(var(--primary))" />
            <p className="text-[17px]">Главная</p>
          </div>
        </Button> */}
        <Button variant="secondary" className="pl-5">
          <div className="flex items-center">
            <ClipboardCheck className="mr-3" color="hsl(var(--primary))" />
            <p className="text-[17px]">Доска</p>
          </div>
        </Button>
        <Button variant="ghost" className="pl-5">
          <div className="flex items-center">
            <Popcorn className="mr-3" opacity={0.7} />
            <p className="text-[17px]">Афиша</p>
          </div>
        </Button>
        <Button variant="ghost" className="pl-5">
          <div className="flex items-center">
            <Users className="mr-3" opacity={0.7} />
            <p className="text-[17px]">Работа</p>
          </div>
        </Button>
        <Button variant="ghost" className="pl-5">
          <div className="flex items-center">
            <Utensils className="mr-3" opacity={0.7} />
            <p className="text-[17px]">Еда</p>
          </div>
        </Button>
        <Button variant="ghost" className="pl-5">
          <div className="flex items-center">
            <HousePlus className="mr-3" opacity={0.7} />
            <p className="text-[17px]">Домики</p>
          </div>
        </Button>
        <Button variant="ghost" className="pl-5">
          <div className="flex items-center">
            <Building className="mr-3" opacity={0.7} />
            <p className="text-[17px]">Новостройки</p>
          </div>
        </Button>
      </ul>
    </div>
  );
};
