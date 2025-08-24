import { ExchangeRate } from "@/components/shared/exchange-rate";
import { ImageCard } from "@/components/shared/image-card";
import { Newsbar } from "@/components/shared/newsbar";
import { ServiceCard } from "@/components/shared/service-card";
import { Sidebar } from "@/components/shared/sidebar";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr_220px] gap-10">
      <div>
        <Sidebar />
      </div>
      <div className="h-[1500px]">
        <ServiceCard
          title="Доска"
          serviceImageUrl="https://gmenu.ykt.ru/img/logos/doska.svg"
          serviceColor="bg-red-500">
          <div className="mt-5 flex gap-2 justify-between items-center ">
            <ImageCard imageSrc="/images/car.jpg" imageAlt="car" text="Легковые авто" />
            <ImageCard
              imageSrc="/images/beautytools.jpg"
              imageAlt="beauty"
              text="Товары для красоты"
            />
            <ImageCard
              imageSrc="/images/holiday.jpg"
              imageAlt="holidyas"
              text=" Всё для праздников"
            />
            <ImageCard
              imageSrc="/images/groceries.jpg"
              imageAlt="groceries"
              text=" Продукты питания"
            />
          </div>
        </ServiceCard>
        <ServiceCard
          title="Афиша"
          serviceColor="bg-blue-400"
          serviceImageUrl="https://gmenu.ykt.ru/img/logo/afisha.svg"></ServiceCard>
        <ServiceCard
          title="Работа"
          serviceColor="bg-green-400"
          serviceImageUrl="https://gmenu.ykt.ru/img/logos/rabota.svg"></ServiceCard>
        <ServiceCard
          title="Еда"
          serviceColor="bg-orange-400"
          serviceImageUrl="https://gmenu.ykt.ru/img/logos/eda.svg"></ServiceCard>
        <ServiceCard
          title="Домики"
          serviceColor="bg-yellow-600"
          serviceImageUrl="https://gmenu.ykt.ru/img/logos/domiki.svg"></ServiceCard>
        <ServiceCard
          title="Новостройки"
          serviceColor="bg-red-300"
          serviceImageUrl="https://gmenu.ykt.ru/img/logos/stroy.svg"></ServiceCard>
      </div>
      <div>
        {/* <ExchangeRate /> */}
        <Newsbar />
      </div>
    </div>
  );
}
