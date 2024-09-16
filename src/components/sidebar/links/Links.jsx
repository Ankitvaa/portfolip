import React from "react";
import { motion, stagger } from "framer-motion";

const varients = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVarients = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "About ", "Portfolio", "Contact",];

  return (
    <motion.div className="links" varients={varients}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          varients={itemVarients}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
