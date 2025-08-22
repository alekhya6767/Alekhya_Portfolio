import { motion } from 'framer-motion';

export const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
      />
    </div>
  );
};

export default ProgressBar;
