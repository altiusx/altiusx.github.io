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
      transition-colors transition-shadow duration-300 
      
      /* --- LIGHT MODE --- */
      bg-white border border-zinc-200 
      md:hover:border-hideout-accent/50 md:hover:shadow-xl 

      /* --- DARK MODE --- */
      dark:bg-hideout-card dark:border-white/5 dark:shadow-none
      dark:md:hover:border-hideout-accent shadow-[0_0_15px_-3px_rgba(249,115,22,0.3)] dark:md:hover:bg-white/5 

      active:border-hideout-accent dark:active:border-hideout-accent
      
      ${className}
    `}
  >
    {children}
  </motion.div>
);
export default Card;
