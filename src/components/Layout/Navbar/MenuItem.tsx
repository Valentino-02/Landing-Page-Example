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
        "hover:text-yellow transition duration-500",
        selectedPage === pageInfo.id && "text-yellow"
      )}
    >
      {pageInfo.name}
    </Link>
  );
}
