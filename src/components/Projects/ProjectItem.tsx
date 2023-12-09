import { motion } from "framer-motion";
import Image from "next/image";

import { ProjectInfo } from "./ProjectsList";

export default function ProjectItem({
  projectInfo,
  index,
}: {
  projectInfo: ProjectInfo;
  index: number;
}) {
  const altTitle = projectInfo.name.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{ duration: 0.6, delay: index * 0.3 }}
      className="relative"
    >
      <div className="absolute z-30 flex flex-col items-center justify-center w-full h-full p-16 text-center transition duration-500 bg-gray-200 opacity-0 hover:opacity-90 text-deep-blue">
        <p className="text-2xl font-alegreya">{projectInfo.name}</p>
        <p className="mt-7">{projectInfo.description}</p>
      </div>
      <Image src={projectInfo.imgSrc} alt={altTitle} />
    </motion.div>
  );
}
