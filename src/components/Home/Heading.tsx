"use client";

import { motion } from "framer-motion";

export default function Heading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="z-10 text-6xl text-center font-alegreya md:text-start">
        Deryaba {""}
        <span className="z-20 xs:relative xs:text-red xs:font-semibold ">
          Collin
        </span>
      </p>

      <p className="mt-10 text-sm text-center mb-7 md:text-start ">
        Musician and Violinist from London. I have Played with Some of the
        Biggest Artists and Orchestras in the World, and Have Several Albums
        Under my Name. Cant Wait to Work With You!
      </p>
    </motion.div>
  );
}
