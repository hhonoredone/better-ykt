import {
  Afisha,
  Domiki,
  Eda,
  Novostroyki,
  Rabota,
  Sidebar,
  Newsbar,
  Doska,
} from "@/components/shared";
import { NewsbarSkeleton } from "@/components/shared/skeletons/newsbar-skeleton";

import React, { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_740px_220px] gap-10">
      <div>
        <Sidebar />
      </div>

      <div>
        <Doska />
        <Afisha />
        <Rabota />
        <Eda />
        <Domiki />
        <Novostroyki />
      </div>

      <div>
        {/* <ExchangeRate /> */}
        <Suspense fallback={<NewsbarSkeleton />}>
          <Newsbar />
        </Suspense>
      </div>
    </div>
  );
}
