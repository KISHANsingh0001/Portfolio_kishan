"use client";

import { motion} from 'framer-motion';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ThreeDCard({ children, className }: ThreeDCardProps) {
  return (
    <motion.div
      className={className}
    >
      {children}
    </motion.div>
  );
}