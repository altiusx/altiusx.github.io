import { motion } from 'framer-motion';

// --- REUSABLE CARD COMPONENT ---
const Card = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    // Move the hover animation to Framer Motion for smoother physics
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    transition={{
      duration: 0.5,
      delay,
      ease: 'easeOut',
    }}
    className={`
      rounded-3xl p-6 relative overflow-hidden group
      
      /* 1. REMOVED 'transition-all' to stop the jerk */
      transition-colors transition-shadow duration-300 
      
      /* --- LIGHT MODE --- */
      bg-white border border-zinc-200 
      /* Removed 'hover:-translate-y-1' because whileHover handles it now */
      hover:border-hideout-accent/50 hover:shadow-xl 

      /* --- DARK MODE --- */
      dark:bg-hideout-card dark:border-white/5 dark:shadow-none
      dark:hover:border-hideout-accent dark:hover:bg-white/5 
      
      ${className}
    `}
  >
    {children}
  </motion.div>
);
export default Card;
