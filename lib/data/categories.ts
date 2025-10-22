import { Category } from "@/lib/types";
import * as LucideIcons from "lucide-react";
import { IconName } from "../types/icons";

export const iconsMap: Record<IconName, LucideIcons.LucideIcon> = {
  HousePlus: LucideIcons.HousePlus,
  Car: LucideIcons.Car,
  Gift: LucideIcons.Gift,
  PawPrint: LucideIcons.PawPrint,
  Computer: LucideIcons.Computer,
  Armchair: LucideIcons.Armchair,
  Shirt: LucideIcons.Shirt,
  Utensils: LucideIcons.Utensils,
  Wrench: LucideIcons.Wrench,
  Baby: LucideIcons.Baby,
  Calendar: LucideIcons.Calendar,
  Building: LucideIcons.Building,
  Heart: LucideIcons.Heart,
  Star: LucideIcons.Star,
  ShoppingCart: LucideIcons.ShoppingCart,
  Phone: LucideIcons.Phone,
  Mail: LucideIcons.Mail,
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Новостройки",
    icon: "Building",
    link: "https://doska.ykt.ru/nedvizhimost/kvartiry/prodau/novostroika?&region=yakutsk&utm_source=6%2F12%2F23&utm_medium=organic&utm_campaign=category_nov",
  },
  {
    id: 2,
    name: "Недвижимость",
    icon: "HousePlus",
    link: "https://doska.ykt.ru/nedvizhimost?utm_source=27%2F11%2F23&utm_medium=organic&utm_campaign=category_nedv",
  },
  {
    id: 3,
    name: "Авто",
    icon: "Car",
    link: "https://doska.ykt.ru/avto?utm_source=27%2F11%2F23&utm_medium=organic&utm_campaign=category_avto",
  },
  {
    id: 4,
    name: "Услуги",
    icon: "Wrench",
    link: "https://doska.ykt.ru/uslugi?utm_source=27%2F11%2F23&utm_medium=organic&utm_campaign=category_usl",
  },
  {
    id: 5,
    name: "Детский мир",
    icon: "Baby",
  },
  {
    id: 6,
    name: "Всё для праздников",
    icon: "Gift",
  },
  {
    id: 7,
    name: "Домашние животные",
    icon: "PawPrint",
  },
  {
    id: 8,
    name: "Компьютеры, игровые приставки",
    icon: "Computer",
  },
  {
    id: 9,
    name: "Мебель и интерьер",
    icon: "Armchair",
  },
  {
    id: 10,
    name: "Одежда, обувь, аксессуары",
    icon: "Shirt",
  },
  {
    id: 11,
    name: "Продукты питания",
    icon: "Utensils",
  },
  {
    id: 12,
    name: "Ремонт и строительство",
    icon: "Wrench",
  },
];
