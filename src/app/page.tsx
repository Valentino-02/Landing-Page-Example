import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import References from "@/components/References";
import Skills from "@/components/Skills";
import Divider from "@/components/shared/Divider";

const pages = [
  <Home key={1} />,
  <Skills key={2} />,
  <Projects key={3} />,
  <References key={4} />,
  <Contact key={5} />,
];

export default async function RootPage() {
  return (
    <div className="w-5/6 mx-auto md:h-full">
      {pages.map((page, index) => (
        <>
          {page}
          {index !== pages.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
}
