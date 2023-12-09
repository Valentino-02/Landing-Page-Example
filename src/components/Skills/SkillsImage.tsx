import skills from "@/../public/skills.png";
import Image from "next/image";

export default function SkillsImage() {
  return (
    <div className="mt-16 md:mt-0">
      <div
        className="hidden lg:flex relative z-0 ml-20 before:absolute before:-top-5 before:-left-5
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
      >
        <Image alt="skills" className="z-10 w-[600px]" src={skills} />
      </div>

      <div className="flex lg:hidden">
        <Image alt="skills" className="z-10" src={skills} />
      </div>
    </div>
  );
}
