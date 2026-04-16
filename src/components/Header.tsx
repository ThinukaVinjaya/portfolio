"use client";

import { motion } from "framer-motion";
export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-12 py-6 pointer-events-none"
    >
    </motion.header>
  );
}
