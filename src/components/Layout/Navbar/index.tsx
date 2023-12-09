"use client";

import { useEffect, useState } from "react";
import { PageInfo } from "..";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import { usePageSelect } from "@/hooks/usePageSelect";
import Link from "next/link";

export default function Navbar({ pagesInfo }: { pagesInfo: Array<PageInfo> }) {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const { selectPage } = usePageSelect();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        selectPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectPage]);

  return (
    <nav
      className={cn(
        " z-40 w-full fixed top-0 py-6 ",
        isTopOfPage
          ? "transition-colors duration-500"
          : "md:bg-red transition-colors duration-500 "
      )}
    >
      <div className="flex items-center justify-between w-5/6 mx-auto">
        <Link href={"#home"}>
          <h4 className="p-1 text-lg font-bold duration-300 rounded-full hover:text-yellow md:text-3xl font-alegreya text-red md:text-white md:bg-transparent bg-deep-blue">
            DC
          </h4>
        </Link>
        <div className="hidden md:flex">
          <DesktopMenu pagesInfo={pagesInfo} />
        </div>
        <div className="flex md:hidden">
          <MobileMenu pagesInfo={pagesInfo} />
        </div>
      </div>
    </nav>
  );
}
