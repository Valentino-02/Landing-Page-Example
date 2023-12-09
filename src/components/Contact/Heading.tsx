import { motion } from "framer-motion";

import Divider from "../shared/Divider";

export default function Heading() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex justify-end w-full"
    >
      <div>
        <p className="text-4xl font-semibold font-alegreya">
          <span className="text-yellow">SEND ME</span> A MESSAGE
        </p>
        <div className="flex my-5 md:justify-end">
          <Divider width="w-1/2" />
        </div>
      </div>
    </motion.div>
  );
}
