"use client";

import { motion } from "framer-motion";

import { PageId, usePageSelect } from "@/hooks/usePageSelect";
import Heading from "./Heading";
import SkillsImage from "./SkillsImage";
import SkillsList from "./SkillsList";

export default function Skills() {
  const { selectPage } = usePageSelect();

  const id: PageId = "skills";

  return (
    <motion.div onViewportEnter={() => selectPage(id)} className="mb-[200px]">
      <section id={id} className="pt-10 pb-24">
        <div className="mt-32 md:flex md:justify-between md:gap-16">
          <Heading />
          <SkillsImage />
        </div>
        <SkillsList />
      </section>
    </motion.div>
  );
}
