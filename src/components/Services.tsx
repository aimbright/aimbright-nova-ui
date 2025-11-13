import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Code, Smartphone, Cloud, Sparkles, Cpu, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Cutting-edge web applications built with the latest technologies for optimal performance and user experience.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions that deliver seamless experiences on any device.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that grow with your business needs.',
  },
  {
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Intelligent automation and machine learning solutions to transform your business operations.',
  },
  {
    icon: Cpu,
    title: 'IoT Development',
    description: 'Connected device solutions that bridge the physical and digital worlds seamlessly.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast systems engineered for maximum efficiency and minimal downtime.',
  },
];

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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <GlassCard key={index} delay={index * 0.1}>
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
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
