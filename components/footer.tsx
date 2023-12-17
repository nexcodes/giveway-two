import Link from "next/link";
import React from "react";

const Footer = () => {
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
    <footer className="bg-[#202228]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <ul className="flex items-center gap-4">
          {items?.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-sm font-medium transition-colors text-white hover:text-white/80 sm:text-base"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="relative">
            <div className="absolute w-full top-1/2 border border-[#3F4248]" />
            <div className="text-white z-10 relative">
                heyyy
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
