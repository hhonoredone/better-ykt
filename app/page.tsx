import { Newsbar } from "@/components/shared/newsbar";
import { Sidebar } from "@/components/shared/sidebar";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr_220px] gap-8">
      <div>
        <Sidebar />
      </div>
      <div className="h-[1500px]">
        <div className="rounded-md bg-white mt-5 overflow-hidden">
          <div className="bg-amber-400 h-10 rounded-t-md" />
          <div className="px-5 mt-[-20px]">
            <div className="flex items-start">
              <Image
                src={"https://gmenu.ykt.ru/img/logos/rabota.svg"}
                width={50}
                height={50}
                alt="doska"
                className="border-2 border-white rounded-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <Title text="Доска" className="font-bold mt-2" />
              <Button variant="outline" size="sm">
                Перейти
              </Button>
            </div>
          </div>
          <div className="h-15" />
        </div>
        <div className="rounded-md bg-white mt-5 overflow-hidden">
          <div className="bg-blue-400 h-10 rounded-t-md" />
          <div className="flex items-center justify-between p-5">
            <Title text="Афиша" className="font-bold" />
            <Button variant="outline">Перейти</Button>
          </div>
          <div className="h-15" />
        </div>{" "}
        <div className="rounded-md bg-white mt-5 overflow-hidden">
          <div className="bg-green-400 h-10 rounded-t-md" />
          <div className="flex items-center justify-between p-5">
            <Title text="Работа" className="font-bold" />
            <Button variant="outline">Перейти</Button>
          </div>
          <div className="h-15" />
        </div>
      </div>
      <Newsbar />
    </div>
  );
}
