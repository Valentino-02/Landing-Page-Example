import { PageId } from "@/hooks/usePageSelect";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideNavDots from "./SideNavDots";

export type PageInfo = {
  name: string;
  id: PageId;
};

const pagesInfo: Array<PageInfo> = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Skills",
    id: "skills",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "References",
    id: "references",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

interface NavbarProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: NavbarProps) {
  return (
    <>
      <Navbar pagesInfo={pagesInfo} />
      <SideNavDots pagesInfo={pagesInfo} />
      {children}
      <Footer />
    </>
  );
}
