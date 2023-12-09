import { motion } from "framer-motion";

import { ReferenceInfo } from "./ReferencesList";
import { cn } from "@/lib/utils";

interface ReferenceItemProps {
  referenceInfo: ReferenceInfo;
  index: number;
}

export default function ReferenceItem({
  referenceInfo,
  index,
}: ReferenceItemProps) {
  return (
    <motion.div
      className={cn(
        `mx-auto relative  max-w-[400px] h-[350px] flex flex-col justify-top gap-4 p-16 mt-48
      `,
        index % 3 === 0 && "bg-blue ",
        index % 3 === 1 && "bg-red ",
        index % 3 === 2 && "bg-yellow "
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <p className="mb-2 text-4xl font-bold text-black ">
        {referenceInfo.title}
      </p>
      <p className="text-xl text-center text-black ">
        {referenceInfo.description}
      </p>
    </motion.div>
  );
}
