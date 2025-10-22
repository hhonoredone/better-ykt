"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Building, ClipboardCheck, Home, Popcorn, Users, Utensils } from "lucide-react";
import { useServiceStore } from "@/store/service";

interface Props {
  className?: string;
}

const services = [
  { id: "doska", name: "Доска", icon: ClipboardCheck },
  { id: "afisha", name: "Афиша", icon: Popcorn },
  { id: "rabota", name: "Работа", icon: Users },
  { id: "eda", name: "Еда", icon: Utensils },
  { id: "domiki", name: "Домики", icon: Home },
  { id: "novostroyki", name: "Новостройки", icon: Building },
];

export const Sidebar: React.FC<Props> = ({ className }) => {
  const serviceActiveId = useServiceStore((state) => state.activeId);

  return (
    <div className={cn("sticky top-[70px] py-4 max-w-[220px]", className)}>
      <ul className="grid gap-[4px]">
        {services.map((service) => {
          const IconComponent = service.icon;
          const isActive = serviceActiveId === service.id;

          return (
            <a key={service.id} href={`#${service.id}`}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className="pl-5 justify-start w-full">
                <div className="flex items-center">
                  <IconComponent
                    className="mr-3"
                    color={isActive ? "hsl(var(--primary))" : undefined}
                    opacity={isActive ? 1 : 0.7}
                  />
                  <p className="text-[17px]">{service.name}</p>
                </div>
              </Button>
            </a>
          );
        })}
      </ul>
    </div>
  );
};
