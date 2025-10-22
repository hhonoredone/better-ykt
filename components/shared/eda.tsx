"use client";

import React from "react";
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
import { EdaCard } from "./eda-card";
import { eda } from "@/lib/data/eda";
import { useServiceIntersection } from "@/hooks/use-service-intersection";

interface Props {
  className?: string;
}

export const Eda: React.FC<Props> = ({ className }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [isAutoplay, setIsAutoplay] = React.useState(true);

  const intersectionRef = useServiceIntersection("eda");
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

  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  return (
    <ServiceCardWrapper
      id="eda"
      title="Еда"
      serviceColor="bg-orange-400"
      serviceImageUrl="https://gmenu.ykt.ru/img/logos/eda.svg"
      ref={intersectionRef}
      link="https://eda.ykt.ru">
      <div
        className={cn("relative w-full group mt-3", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Carousel
          className="w-full mt-6"
          setApi={setApi}
          autoplay={isAutoplay}
          autoplayInterval={5000}
          opts={{
            align: "start",
            slidesToScroll: 2,
            dragFree: false,
            loop: true,
          }}>
          <CarouselContent className="-ml-2">
            {eda.map((item) => (
              <CarouselItem key={item.id} className="basis-auto pl-2">
                <EdaCard image={item.image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {canScrollPrev && (
            <CarouselPrevious
              variant="ghost"
              className="left-0 top-18 bg-white border-none shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
            />
          )}
          {canScrollNext && (
            <CarouselNext
              variant="ghost"
              className="right-0 top-18 bg-white border-none shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
            />
          )}
        </Carousel>
      </div>
    </ServiceCardWrapper>
  );
};
