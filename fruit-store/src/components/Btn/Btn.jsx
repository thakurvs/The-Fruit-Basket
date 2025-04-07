import React from 'react'
import { motion } from "framer-motion";

function Btn( { fade, children } ) {
  return (
    <motion.div
        variants={fade}
        initial="hidden"
        animate="visible"
        className="flex justify-center md:justify-start">
        <button className="primary-btn flex items-center gap-2">
            {children}
        </button>
    </motion.div>
  )
}

export default Btn;