import { motion } from "framer-motion";
import Image from "next/image";

import ContactImg from "@/../public/contact.jpeg";

export default function ContactImage() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="flex justify-center basis-1/2"
    >
      <Image src={ContactImg} alt="contact" className=" w-[400px]" />
    </motion.div>
  );
}
