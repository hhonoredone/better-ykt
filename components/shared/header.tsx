import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
import { YktLogo } from "./yktlogo";
import { ModeToggle } from "./mode-toggle";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className="sticky top-0 w-[100%] bg-secondary">
      <div className="flex items-center justify-between p-2  w-[1240px] m-auto">
        <YktLogo />
        <div className="flex items-center gap-3">
          <Button>Войти</Button>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
};
