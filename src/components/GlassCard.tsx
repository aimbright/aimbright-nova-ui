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
        y: -5,
        boxShadow: '0 20px 60px rgba(0, 217, 255, 0.2), 0 0 0 1px rgba(0, 217, 255, 0.3)',
      }}
      className={cn(
        "relative backdrop-blur-xl bg-white/70 border border-primary/20 rounded-3xl p-8",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]",
        "transition-all duration-500 ease-out",
        "hover:border-primary/40 hover:bg-white/80",
        "before:absolute before:inset-0 before:rounded-3xl before:p-[1px]",
        "before:bg-gradient-to-br before:from-primary/30 before:via-transparent before:to-secondary/30",
        "before:-z-10 before:blur-xl before:opacity-50",
        "after:absolute after:inset-0 after:rounded-3xl",
        "after:bg-gradient-to-br after:from-white/40 after:to-transparent",
        "after:-z-10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
