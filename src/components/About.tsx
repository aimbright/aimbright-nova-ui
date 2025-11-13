import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Target, Rocket, Users } from 'lucide-react';

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
                Who We Are
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Aim Bright is a forward-thinking technology agency dedicated to crafting 
              exceptional digital experiences. We combine innovative thinking with 
              cutting-edge technology to deliver solutions that drive real business results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of expert developers, designers, and strategists work collaboratively 
              to turn your vision into reality. We don't just build software – we build 
              partnerships that last.
            </p>
          </motion.div>

          {/* Values Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To empower businesses with technology that transforms possibilities into achievements.',
              },
              {
                icon: Rocket,
                title: 'Our Vision',
                description: 'Leading the future of digital innovation, one breakthrough at a time.',
              },
              {
                icon: Users,
                title: 'Our Values',
                description: 'Excellence, innovation, integrity, and client success drive everything we do.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
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
