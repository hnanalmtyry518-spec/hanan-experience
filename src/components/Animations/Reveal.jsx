import { motion } from "framer-motion";
import useScrollReveal from "../../hooks/useScrollReveal";

function Reveal({ children }) {

  const { ref, inView } = useScrollReveal();

  return (
    <div ref={ref}>

      <motion.div

        initial={{ opacity: 0, y: 60 }}

        animate={
          inView
            ? { opacity: 1, y: 0 }
            : {}
        }

        transition={{
          duration: .7
        }}

      >

        {children}

      </motion.div>

    </div>
  );

}

export default Reveal;