// components/hero-artwork.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroArtwork() {

  return (
    <div className="relative">

      <div className="">
          <Image
            src="/hero.png"
            alt="Product design & engineering—dashboards and growth tooling"
            width={1200}
            height={900}
            className="h-auto w-[90%] object-cover"
            priority
          />
        

        
      </div>
    </div>
  );
}
