import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

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
  const info = [
    {
      title: "Location",
      value: "New york, USA",
    },
    {
      title: "Phone",
      value: "+92 300 0000000",
    },
    {
      title: "Email",
      value: "contact@giveway.com",
    },
  ];

  return (
    <footer className="bg-[#202228] space-y-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        {/* navigation links */}
        <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          {items?.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-sm font-medium transition-colors text-white hover:text-white/80 sm:text-base"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        {/* social media icons */}
        <div className="relative mt-2">
          <div className="absolute w-full top-1/2 border border-[#3F4248]" />
          <div className="text-black z-10 relative">
            <div className="flex items-center justify-center md:justify-end">
              <div className="px-4 py-2 bg-white rounded-full flex items-center gap-4">
                <Link href="#">
                  <FaFacebookF
                    size={20}
                    className="hover:text-orange-600 transition"
                  />
                </Link>
                <Link href="#">
                  <FaTwitter
                    size={20}
                    className="hover:text-orange-600 transition"
                  />
                </Link>
                <Link href="#">
                  <FaLinkedinIn
                    size={20}
                    className="hover:text-orange-600 transition"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* information */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mt-4">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {info?.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm font-medium transition-colors text-white hover:text-white/80 sm:text-base"
              >
                <div className="font-trip-sans text-center md:text-left">
                  <h6 className="font-medium text-white text-base">
                    {item.title}
                  </h6>
                  <p className="font-normal text-white/75 text-sm">
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <span className="text-sm text-white/80 font-trip-sans text-center md:text-left">
              Copyrights © 2023. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
