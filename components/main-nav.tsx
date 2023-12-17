"use client";

import * as React from "react";
import Link from "next/link";

import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

interface MainNavProps {}

export default function Navbar({}: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Prizes",
      href: "/prize",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-8 z-40d">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Image
              width={40}
              height={40}
              className="overflow-hidden"
              alt="logo"
              src="/assets/svg/logo.svg"
            />
            <span className="font-semibold tracking-[-0.02em] leading-[1rem] inline-block w-20">
              {siteConfig.name}
            </span>
          </Link>

          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <IoClose /> : <RiMenu2Fill />}
            <span className="sr-only">Menu</span>
          </button>
          {showMobileMenu && items && <MobileNav items={items} />}
        </div>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex items-center justify-center">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={
                  "flex items-center text-lg font-medium transition-colors hover:underline sm:text-sm"
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <div className="flex items-center space-x-2">
          <nav>
            <Link href={"/login"}>
              <div className="flex flex-row items-center justify-start gap-[1rem]">
                <div className="relative tracking-[-0.02em] font-medium hover:underline">
                  {"Sign In"}
                </div>
                <div className="rounded-lg [background:linear-gradient(90deg,_#ff4c06,_#ff750a)] hover:[background:linear-gradient(180deg,_#ff4c06,_#ff750a)] flex flex-row items-center justify-center py-3 px-4 box-border text-white">
                  <span className="tracking-[-0.02em] font-medium">
                    {"Get Started"}
                  </span>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
