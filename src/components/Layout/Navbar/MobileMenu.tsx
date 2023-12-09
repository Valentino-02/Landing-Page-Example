"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { LuMenu } from "react-icons/lu";
import { AiFillCloseCircle } from "react-icons/ai";

import { PageInfo } from "..";
import MenuItem from "./MenuItem";

export default function MobileMenu({
  pagesInfo,
}: {
  pagesInfo: Array<PageInfo>;
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <button
        className="p-2 rounded-full bg-red"
        onClick={() => setShowMenu(!showMenu)}
      >
        <LuMenu />
      </button>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 h-[100px] bg-red w-full  justify-center "
          >
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="fixed top-0 right-0 m-2 mt-4 text-2xl text-yellow "
            >
              <AiFillCloseCircle />
            </button>
            <div className="grid justify-between grid-cols-3 gap-4 m-4 text-sm font-semibold">
              {pagesInfo.map((pageInfo) => (
                <MenuItem key={pageInfo.id} pageInfo={pageInfo} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
