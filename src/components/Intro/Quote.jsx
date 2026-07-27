import { motion, AnimatePresence } from "framer-motion";

function Quote({ text }) {

  return (

    <AnimatePresence mode="wait">

      <motion.h1
        key={text}
        className="quote"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.7 }}
      >

        {text}

      </motion.h1>

    </AnimatePresence>

  );

}

export default Quote;