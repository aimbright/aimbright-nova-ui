import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      {/* Empowering Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/images/w5.jpg" 
                alt="Empowering digital presence" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Empowering Your Digital Presence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We craft custom mobile apps, engaging websites, and unique digital invitations—all tailored to your business and individual needs so you can launch confidently.
              </p>
              <div className="border-t border-white/10 pt-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Turning Concepts into Reality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to deliver reliable, scalable, and innovative digital solutions that drive growth and efficiency. From idea to implementation, we partner with you every step of the way.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div id="services">
        <Services />
      </div>

      {/* Custom Apps Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Custom Apps & Digital Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialise in crafting custom mobile apps, engaging websites, and unique digital invitations, all tailored to elevate your brand and connect with your audience.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What We Do Best
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our startup designs mobile apps, web apps, websites, logos, and social media presences. We help businesses scale efficiently while working within the best possible budget.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/assets/images/mobile1.jpg" 
                alt="Custom apps" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <Portfolio />
      
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
