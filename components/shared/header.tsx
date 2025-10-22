"use client";

import React, { Suspense } from "react";
import { Button } from "../ui/button";
import { YktLogo } from "./yktlogo";
import { AuthModal } from "./auth-modal";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 bg-secondary z-50 w-full">
      <div className="flex items-center justify-between py-2 max-w-[1240px] mx-auto">
        <Link href="/">
          <YktLogo />
        </Link>

        <Button onClick={() => setOpenAuthModal(true)}>Войти</Button>

        <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
      </div>
    </header>
  );
};
