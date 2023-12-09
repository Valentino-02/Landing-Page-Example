"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { usePageSelect } from "@/hooks/usePageSelect";

export default function CTAs() {
  const { selectPage } = usePageSelect();

  return (
    <motion.div
      className="flex justify-center mt-5 md:justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link
        className="py-3 font-semibold transition duration-500 rounded-l-lg bg-red text-deep-blue px-7 hover:text-white"
        onClick={() => selectPage("contact")}
        href="#contact"
      >
        Contact Me
      </Link>
      <Link
        className="rounded-r-lg  py-0.5 pr-0.5 border-red border-4"
        onClick={() => selectPage("contact")}
        href="#contact"
      >
        <div className="flex items-center justify-center w-full h-full px-10 transition duration-500 bg-deep-blue hover:text-red ">
          {"Let's talk."}
        </div>
      </Link>
    </motion.div>
  );
}
