import { motion } from 'framer-motion';

// --- REUSABLE CARD COMPONENT ---
const Card = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`
      rounded-3xl p-6 transition-all duration-300 relative overflow-hidden
      /* Light Mode Styles */
      bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-hideout-accent/50
      /* Dark Mode Styles */
      dark:bg-hideout-card dark:border-white/5 dark:shadow-none
      ${className}
    `}
  >
    {children}
  </motion.div>
);
export default Card;
