import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { GlassCard } from './GlassCard';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contactInfo } from '@/data/content';

export const Contact = () => {
  return (
    <section className="relative py-32 px-4">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering Your Digital Future
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: 'Contact Number',
                content: contactInfo.phone,
              },
              {
                icon: Mail,
                title: 'Email',
                content: contactInfo.email,
              },
              {
                icon: Phone,
                title: 'WhatsApp',
                content: contactInfo.whatsapp,
              },
              {
                icon: MapPin,
                title: 'Address',
                content: contactInfo.location,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <GlassCard key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30 flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-foreground font-medium">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {/* Contact Form */}
          <GlassCard className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-background/50 border-white/10 focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background/50 border-white/10 focus:border-primary/50"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="How can we help?"
                  className="bg-background/50 border-white/10 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="bg-background/50 border-white/10 focus:border-primary/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-cyan transition-all duration-300 hover:shadow-glow-purple"
              >
                Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
