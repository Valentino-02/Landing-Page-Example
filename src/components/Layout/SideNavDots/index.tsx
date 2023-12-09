import React from "react";
import { PageInfo } from "..";
import MenuItem from "./MenuItem";
import Arrow from "./Arrow";

export default function SideNavDots({
  pagesInfo,
}: {
  pagesInfo: Array<PageInfo>;
}) {
  return (
    <div className="hidden md:flex flex-col gap-6 fixed top-[60%] right-7">
      <Arrow pagesInfo={pagesInfo} variant="up" />
      {pagesInfo.map((pageInfo) => (
        <MenuItem key={pageInfo.id} pageInfo={pageInfo} />
      ))}
      <Arrow pagesInfo={pagesInfo} variant="down" />
    </div>
  );
}
