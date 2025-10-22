"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ServiceCardWrapper } from "./service-card-wrapper";
import { Title } from "./title";
import { Button } from "../ui/button";
import { RabotaCard } from "./rabota-card";
import { rabota } from "@/lib/data";
import { useIntersection } from "react-use";
import { useServiceStore } from "@/store/service";
import { useServiceIntersection } from "@/hooks/use-service-intersection";

interface Props {
  className?: string;
}

export const Rabota: React.FC<Props> = ({ className }) => {
  const intersectionRef = useServiceIntersection("rabota", 0.9);
  return (
    <ServiceCardWrapper
      id="rabota"
      ref={intersectionRef}
      className={cn(className)}
      title="Работа"
      serviceColor="bg-green-400"
      serviceImageUrl="https://gmenu.ykt.ru/img/logos/rabota.svg"
      link="https://rabota.ykt.ru">
      <div className="mt-6 grid grid-cols-3 gap-3">
        {rabota.map((item) => (
          <RabotaCard
            key={item.id}
            companyName={item.companyName}
            vacancies={item.vacancies}
            logo={item.logo}
            link={item.link}
          />
        ))}
      </div>
    </ServiceCardWrapper>
  );
};
