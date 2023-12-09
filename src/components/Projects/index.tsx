"use client";

import { motion } from "framer-motion";

import { PageId, usePageSelect } from "@/hooks/usePageSelect";
import Heading from "./Heading";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const { selectPage } = usePageSelect();

  const id: PageId = "projects";
  return (
    <motion.div onViewportEnter={() => selectPage(id)} className="mb-[200px]">
      <section id={id} className="pt-48 pb-48">
        <Heading />
        <ProjectsList />
      </section>
    </motion.div>
  );
}
