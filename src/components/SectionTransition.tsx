import React from 'react';
import { motion } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`min-h-screen w-full relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
};
