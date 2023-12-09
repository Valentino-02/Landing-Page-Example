import { motion } from "framer-motion";

import Divider from "../shared/Divider";

export default function Heading() {
  return (
    <motion.div
      className="md:w-1/3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="mb-5 text-4xl font-semibold font-alegreya">
        MY <span className="text-red">SKILLS</span>
      </p>
      <Divider width="w-1/3" />
      <p className="mt-10 mb-7">
        I Am Well Equiped with All Things Music. I am a Composer, Interpreter,
        Session Artist, and Much More!
      </p>
    </motion.div>
  );
}
