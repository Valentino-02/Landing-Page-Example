"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { SkillInfo } from "./SkillsList";

interface SkillItemProps {
  skillInfo: SkillInfo;
  index: number;
}

export default function SkillItem({ skillInfo, index }: SkillItemProps) {
  return (
    <motion.div
      className="mt-10 md:w-1/3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="relative h-32">
        <div className="z-10">
          <p className="text-5xl font-semibold ">{`0${index + 1}`}</p>
          <p className="mt-3 text-3xl font-semibold ">{skillInfo.name}</p>
        </div>
        <div
          className={cn(
            "w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]",
            index % 3 === 0 && "bg-blue",
            index % 3 === 1 && "bg-red",
            index % 3 === 2 && "bg-yellow"
          )}
        />
      </div>
      <p className="mt-5">{skillInfo.description}</p>
    </motion.div>
  );
}
