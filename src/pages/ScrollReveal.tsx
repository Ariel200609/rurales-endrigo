// src/pages/ScrollReveal.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({ children, width = "100%" }: Props) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }} // Para que solo anime la primera vez que scrolleas
      >
        {children}
      </motion.div>
    </div>
  );
};