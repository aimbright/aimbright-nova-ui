import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { solutionCards } from '@/data/content';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

export const Services = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="relative container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        {/* Services Stack */}
        <ScrollStack 
          className="solutions-scroll-stack"
          itemDistance={120}
          itemScale={0.03}
          itemStackDistance={35}
          stackPosition="20%"
          scaleEndPosition="12%"
          baseScale={0.92}
          rotationAmount={1.5}
          blurAmount={1}
        >
          {solutionCards.map((service, index) => {
            const Icon = (Icons as any)[service.icon] || Icons.Code;
            return (
              <ScrollStackItem key={index}>
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </div>
    </section>
  );
};
