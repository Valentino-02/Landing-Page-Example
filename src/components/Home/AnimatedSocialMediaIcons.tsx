"use client";

import { motion } from "framer-motion";
import SocialMediaIcons from "../shared/SocialMediaIcons";

export default function AnimatedSocialMediaIcons() {
  return (
    <motion.div
      className="flex justify-center mt-5 md:justify-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <SocialMediaIcons />
    </motion.div>
  );
}
