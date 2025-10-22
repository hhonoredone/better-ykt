import React from "react";
import { cn } from "@/lib/utils";
import { Afisha, Domiki, Doska, Eda, Novostroyki, Rabota } from ".";

interface Props {
  className?: string;
}

export const MainContent: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Doska />
      <Afisha />
      <Rabota />
      <Eda /> <Domiki />
      <Novostroyki />
    </div>
  );
};
