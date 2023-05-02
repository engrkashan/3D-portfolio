import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.div>
        <Component />
      </motion.div>
    );
  }
};

export default SectionWrapper;
