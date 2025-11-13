import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import * as Icons from 'lucide-react';
import { aboutContent, aboutHighlights } from '@/data/content';

export const About = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {aboutContent.heading}
              </span>
            </h2>
            <h3 className="text-2xl text-foreground font-semibold">
              {aboutContent.subheading}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {aboutContent.body}
            </p>
          </motion.div>

          {/* Values Cards */}
          <div className="space-y-6">
            {aboutHighlights.map((item, index) => {
              const Icon = (Icons as any)[item.icon] || Icons.Target;
              return (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
