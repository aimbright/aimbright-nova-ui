import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export const Testimonials = () => {
  return (
    <section className="relative py-32 px-4">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by startups like yours
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-primary/50" />
                <p className="text-lg text-foreground leading-relaxed italic">
                  "{testimonial.message}"
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-bold text-foreground">
                    {testimonial.clientName}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
