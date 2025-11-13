import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { works } from '@/data/content';

export const Portfolio = () => {
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
              Our Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore some of our successful projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <GlassCard key={index} delay={index * 0.05}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {work.title}
                </h3>
                <p className="text-muted-foreground">
                  {work.description}
                </p>
                {work.link && work.link !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="group bg-background/10 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    onClick={() => window.open(work.link, '_blank')}
                  >
                    Visit
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
