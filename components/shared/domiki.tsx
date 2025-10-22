"use client";
import React from "react";
import { ServiceCardWrapper } from "./service-card-wrapper";
import { WidgetCard } from "./widget-card";
import { domiki } from "@/lib/data/domiki";
import { useServiceIntersection } from "@/hooks/use-service-intersection";

interface Props {
  className?: string;
}

export const Domiki: React.FC<Props> = ({ className }) => {
  const intersectionRef = useServiceIntersection("domiki", 1);
  return (
    <ServiceCardWrapper
      id="domiki"
      title="Домики"
      serviceColor="bg-yellow-600"
      serviceImageUrl="https://gmenu.ykt.ru/img/logos/domiki.svg"
      ref={intersectionRef}
      link="https://domiki.ykt.ru">
      <div className="mt-6 grid grid-cols-2 gap-3">
        {domiki.map((item) => (
          <WidgetCard
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            tags={item.tags}
            link={item.link}
          />
        ))}
      </div>
    </ServiceCardWrapper>
  );
};
