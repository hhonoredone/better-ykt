"use client";

import React from "react";
import { ServiceCardWrapper } from "./service-card-wrapper";
import { CategoriesCarousel } from "./categories-carousel";
import { ImageCard } from "./image-card";
import { useServiceIntersection } from "@/hooks/use-service-intersection";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Doska: React.FC<Props> = ({ className }) => {
  const intersectionRef = useServiceIntersection("doska", 0.9);
  return (
    <ServiceCardWrapper
      id="doska"
      ref={intersectionRef}
      title="Доска"
      serviceImageUrl="https://gmenu.ykt.ru/img/logos/doska.svg"
      serviceColor="bg-red-500"
      link="https://doska.ykt.ru">
      <CategoriesCarousel />
      <div className="mt-5 flex gap-2 justify-between items-center ">
        <Link href="https://doska.ykt.ru/avto/legkovye_avto" target="_blank">
          <ImageCard imageSrc="/images/car.jpg" imageAlt="car" text="Легковые авто" />
        </Link>

        <Link href="  https://doska.ykt.ru/tovary_dlya_krasoty" target="_blank">
          <ImageCard
            imageSrc="/images/beautytools.jpg"
            imageAlt="beauty"
            text="Товары для красоты"
          />
        </Link>
        <Link href=" https://doska.ykt.ru/vse_dlya_prazdnikov" target="_blank">
          <ImageCard
            imageSrc="/images/holiday.jpg"
            imageAlt="holidyas"
            text=" Всё для праздников"
          />
        </Link>
        <Link href=" https://doska.ykt.ru/produkty_pitaniya" target="_blank">
          <ImageCard
            imageSrc="/images/groceries.jpg"
            imageAlt="groceries"
            text=" Продукты питания"
          />
        </Link>
      </div>
    </ServiceCardWrapper>
  );
};
