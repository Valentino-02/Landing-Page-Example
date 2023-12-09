import { PageInfo } from "..";
import MenuItem from "./MenuItem";

export default function DesktopMenu({
  pagesInfo,
}: {
  pagesInfo: Array<PageInfo>;
}) {
  return (
    <div className="flex justify-between gap-16 text-sm font-semibold font-opensans">
      {pagesInfo.map((pageInfo) => (
        <MenuItem key={pageInfo.id} pageInfo={pageInfo} />
      ))}
    </div>
  );
}
