import { motion } from "framer-motion";
import Divider from "../shared/Divider";

export default function Heading() {
  return (
    <motion.div
      className="text-center md:w-1/3 md:text-left"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <p className="mb-5 text-4xl font-semibold font-alegreya text-red">
        REFERENCES
      </p>
      <Divider width="mx-auto w-2/5" />
      <p className="mt-10">
        {
          "Here's What People are Saying About My Work. I Am Forever Grateful for their Kind Words."
        }
      </p>
    </motion.div>
  );
}
