import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import * as Icons from 'lucide-react';
import { featureCards } from '@/data/content';

export const Features = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose Aim Bright
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Your success is our mission
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feature, index) => {
            const Icon = (Icons as any)[feature.icon] || Icons.Star;
            return (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
