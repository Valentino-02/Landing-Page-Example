"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

import { PageInfo } from "..";
import { usePageSelect } from "@/hooks/usePageSelect";

export default function Arrow({
  pagesInfo,
  variant,
}: {
  pagesInfo: Array<PageInfo>;
  variant: "up" | "down";
}) {
  const [nextPage, setNextPage] = useState("home");
  const { selectedPage } = usePageSelect();

  const getNextPage = () => {
    if (!pagesInfo) return;

    const currentIndex = pagesInfo.findIndex(
      (pageInfo) => pageInfo.id === selectedPage
    );

    if (currentIndex === -1) return;
    console.log(currentIndex);

    if (variant === "up") {
      if (currentIndex === 0) return selectedPage;

      return pagesInfo[currentIndex - 1].id;
    }

    if (variant === "down") {
      if (currentIndex === pagesInfo.length - 1) return selectedPage;

      return pagesInfo[currentIndex + 1].id;
    }
  };

  useEffect(() => {
    let page = getNextPage();
    if (!page) return;
    setNextPage(page);
  }, [selectedPage]);

  return (
    <Link
      href={`#${nextPage}`}
      className="transition duration-200 hover:text-amber-300 "
    >
      {variant === "up" && <BiUpArrow className="pr-1" />}
      {variant === "down" && <BiDownArrow className="pr-1" />}
    </Link>
  );
}
