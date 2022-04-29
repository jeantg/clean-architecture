import { AnimatePresence, motion } from "framer-motion";
export const AnimateOpacity: React.FC = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
