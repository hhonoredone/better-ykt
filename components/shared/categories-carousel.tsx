"use client";

import React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { categories, IconName, iconsMap } from "@/lib/data";

interface Props {
  className?: string;
}

export const CategoriesCarousel: React.FC<Props> = ({ className }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

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

  const getIconComponent = (iconName: IconName) => {
    const IconComponent = iconsMap[iconName];
    if (!IconComponent) {
      console.warn(`Иконка ${iconName} не найдена!`);
      return null;
    }
    return IconComponent;
  };

  return (
    <div className={cn("relative w-full group mt-6", className)}>
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{
          align: "end",
          slidesToScroll: 1,
          dragFree: true,
        }}>
        <CarouselContent className="-ml-2">
          {categories.map((category) => {
            const IconComponent = getIconComponent(category.icon);

            return (
              <CarouselItem key={category.id} className="basis-auto pl-2">
                <a href={category.link}>
                  <div className="flex items-center gap-2 whitespace-nowrap px-2 py-2 bg-gray-100 rounded-md text-[14px] text-center min-w-[120px] transition-all duration-200 hover:bg-gray-200  cursor-pointer">
                    {IconComponent && <IconComponent className="w-5 h-5 text-gray-600" />}
                    <span className="font-medium">{category.name}</span>
                  </div>
                </a>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {canScrollPrev && (
          <CarouselPrevious
            variant="ghost"
            className="left-0 bg-white border-none shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
          />
        )}

        {canScrollNext && (
          <CarouselNext
            variant="ghost"
            className="right-0 bg-white border-none shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 disabled:opacity-0"
          />
        )}
      </Carousel>
    </div>
  );
};
