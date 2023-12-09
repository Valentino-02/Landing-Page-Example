"use client";

import { motion } from "framer-motion";

import { PageId, usePageSelect } from "@/hooks/usePageSelect";
import Heading from "./Heading";
import ContactImage from "./ContactImage";
import Form from "./Form";

export default function Contact() {
  const { selectPage } = usePageSelect();

  const id: PageId = "contact";
  return (
    <motion.div onViewportEnter={() => selectPage(id)} className="mb-[200px]">
      <section id={id} className="py-48 contact">
        <Heading />
        <div className="gap-16 mt-5 md:flex md:justify-between">
          <ContactImage />
          <Form />
        </div>
      </section>
    </motion.div>
  );
}
