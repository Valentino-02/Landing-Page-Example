import { motion } from "framer-motion";
import Divider from "../shared/Divider";

export default function Heading() {
  return (
    <motion.div
      className="mx-auto text-center md:w-2/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div>
        <p className="text-4xl font-semibold font-alegreya">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <Divider width="w-2/3" />
        </div>
      </div>
      <p className="mt-10 mb-10">
        This are All my Mainstream Releases. Each Album is Close to my Heart and
        I Hope you Can Enjoy Them, as Much as I did Making Them! You Can Find
        Them on Spotify
      </p>
    </motion.div>
  );
}
