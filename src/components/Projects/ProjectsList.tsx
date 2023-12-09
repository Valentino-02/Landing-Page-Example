import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

import project1Img from "@/../public/project-1.jpg";
import project2Img from "@/../public/project-2.jpg";
import project3Img from "@/../public/project-3.jpg";
import project4Img from "@/../public/project-4.jpg";
import project5Img from "@/../public/project-5.jpg";

import ProjectItem from "./ProjectItem";

export type ProjectInfo = {
  imgSrc: StaticImageData;
  name: string;
  description: string;
};

const projectsInfo: Array<ProjectInfo> = [
  {
    imgSrc: project1Img,
    name: "Stereotypes",
    description:
      "My first album, which I released under the name Black Violin. A blend of clasical and modern sounds.",
  },
  {
    imgSrc: project3Img,
    name: "Violin Sounds",
    description:
      "Now working with my real name, Deryaba, my second release was aiming at a much more mainstream sound. This album is meant to be enjoyed with a cup of tea .",
  },
  {
    imgSrc: project2Img,
    name: "Violin",
    description:
      "My third project, simply named violin, had me moving away from the instrument and imitating the sounds of a violin using mainly synthesizers and computers.",
  },
  {
    imgSrc: project4Img,
    name: "Art Nuvau x-23",
    description:
      "My first venture into avant-garde ground. Explore unique sound infused landscapes, and enjoy the ride.",
  },
];

export default function ProjectsList() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-alegreya font-semibold"
        >
          ART IS EXPLORATION
        </div>
        {projectsInfo.map((projectInfo, index) => (
          <ProjectItem key={index} projectInfo={projectInfo} index={index} />
        ))}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6, delay: projectsInfo.length * 0.3 }}
          className="flex justify-center text-center items-center p-10 bg-blue
          max-w-[400px] max-h-[400px] text-2xl font-alegreya font-semibold"
        >
          NEVER STOP MOVING FORWARD
        </motion.div>
      </motion.div>
    </div>
  );
}
