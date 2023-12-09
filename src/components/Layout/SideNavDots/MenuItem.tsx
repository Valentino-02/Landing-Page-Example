"use client";

import Link from "next/link";

import { PageInfo } from "..";
import { usePageSelect } from "@/hooks/usePageSelect";
import { cn } from "@/lib/utils";

export default function MenuItem({ pageInfo }: { pageInfo: PageInfo }) {
  const { selectedPage } = usePageSelect();

  return (
    <Link
      href={`#${pageInfo.id}`}
      className={cn(
        "w-3 h-3 rounded-full hover:bg-amber-300 hover:scale-110 transition duration-200 bg-gray-800",
        selectedPage === pageInfo.id ? ` bg-yellow  ` : " "
      )}
    />
  );
}
