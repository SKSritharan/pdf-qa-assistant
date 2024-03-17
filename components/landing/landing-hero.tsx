"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const LandingHero = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
          <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            PDF Q&A Assistant
          </span>
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Simplify your PDF document analysis and question answering process
          with our PDF Q&A Assistant.
        </p>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
          alt="Flowbite logo"
          width={400}
          height={400}
          layout="responsive"
          src="/logo.png"
        />
      </div>
    </div>
  );
};
