"use client";

import { motion } from "framer-motion";

import ProfileImage from "./ProfileImage";
import Heading from "./Heading";
import CTAs from "./CTAs";
import AnimatedSocialMediaIcons from "./AnimatedSocialMediaIcons";
import { PageId, usePageSelect } from "@/hooks/usePageSelect";

export default function Home() {
  const { selectPage } = usePageSelect();

  const id: PageId = "home";

  return (
    <motion.div onViewportEnter={() => selectPage(id)} className="mb-[200px]">
      <section
        id={id}
        className="gap-16 py-10 md:flex md:justify-between md:items-center md:h-full"
      >
        <ProfileImage />

        <div className="z-30 mt-12 basis-2/5 md:mt-32">
          <Heading />
          <CTAs />
          <AnimatedSocialMediaIcons />
        </div>
      </section>
    </motion.div>
  );
}
