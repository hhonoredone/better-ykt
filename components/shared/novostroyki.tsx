"use client";
import React from "react";

import { ServiceCardWrapper } from "./service-card-wrapper";
import { novostroyki } from "@/lib/data/novostroyki";
import { WidgetCard } from "./widget-card";
import { useServiceIntersection } from "@/hooks/use-service-intersection";

interface Props {
  className?: string;
}

export const Novostroyki: React.FC<Props> = ({ className }) => {
  const intersectionRef = useServiceIntersection("novostroyki");
  return (
    <ServiceCardWrapper
      id="novostroyki"
      ref={intersectionRef}
      title="Новостройки"
      serviceColor="bg-red-300"
      serviceImageUrl="https://gmenu.ykt.ru/img/logos/stroy.svg"
      link="https://stroy.ykt.ru">
      <div className="mt-6 grid grid-cols-2 gap-3">
        {novostroyki.map((item) => (
          <WidgetCard
            key={item.title}
            title={item.title}
            image={item.image}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </ServiceCardWrapper>
  );
};
