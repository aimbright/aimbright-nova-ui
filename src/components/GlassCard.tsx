import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
      }}
      className={cn(
        "relative backdrop-blur-md bg-card/40 border border-white/10 rounded-2xl p-8",
        "shadow-glass transition-all duration-300",
        "hover:border-primary/50 hover:bg-card/60",
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-primary/20 before:via-transparent before:to-secondary/20",
        "before:-z-10 before:blur-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
