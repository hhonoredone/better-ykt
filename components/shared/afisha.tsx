"use client";

import React, { RefObject } from "react";
import { cn } from "@/lib/utils";
import { ServiceCardWrapper } from "./service-card-wrapper";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { afisha } from "@/lib/data/afisha";
import { AfishaCard } from "./afisha-card";
import { useIntersection } from "react-use";
import { useServiceStore } from "@/store/service";
import { useServiceIntersection } from "@/hooks/use-service-intersection";

interface Props {
  className?: string;
}

export const Afisha: React.FC<Props> = ({ className }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const intersectionRef = useServiceIntersection("afisha", 0.85);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <ServiceCardWrapper
      ref={intersectionRef}
      id={"afisha"}
      title="Афиша"
      serviceColor="bg-blue-400"
      serviceImageUrl="https://gmenu.ykt.ru/img/logo/afisha.svg"
      link="https://afisha.ykt.ru">
      <div className={cn("relative w-full group mt-3", className)}>
        <Carousel
          className="w-full mt-6"
          setApi={setApi}
          opts={{
            align: "start",
            slidesToScroll: 1,
            dragFree: false,
          }}>
          <CarouselContent className="-ml-2">
            {afisha.map((item) => (
              <CarouselItem key={item.id} className="basis-1/4 pl-2">
                <AfishaCard
                  image={item.image}
                  title={item.title}
                  tags={item.tags}
                  link={item.link}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          {canScrollPrev && (
            <CarouselPrevious
              variant="ghost"
              className="left-0 top-32 bg-white border-none shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
            />
          )}

          {canScrollNext && (
            <CarouselNext
              variant="ghost"
              className="right-0 top-32 bg-white border-none shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
            />
          )}
        </Carousel>
      </div>
    </ServiceCardWrapper>
  );
};
