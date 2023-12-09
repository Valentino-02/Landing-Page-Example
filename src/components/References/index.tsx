"use client";

import { motion } from "framer-motion";

import { PageId, usePageSelect } from "@/hooks/usePageSelect";
import Heading from "./Heading";
import ReferencesList from "./ReferencesList";

export default function References() {
  const { selectPage } = usePageSelect();

  const id: PageId = "references";
  return (
    <motion.div onViewportEnter={() => selectPage(id)} className="mb-[200px]">
      <section id={id} className="pt-32 pb-16">
        <Heading />
        <ReferencesList />
      </section>
    </motion.div>
  );
}
