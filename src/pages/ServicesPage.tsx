import { motion } from 'framer-motion';
import { GlassCard } from '@/components/GlassCard';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { works } from '@/data/content';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const services = [
  {
    title: "Mobile App Development",
    description: "High-performing, user-centric mobile apps for iOS and Android.",
    image: "/assets/images/mobile2.jpg",
  },
  {
    title: "Web Development",
    description: "Responsive, scalable websites to boost your online presence.",
    image: "/assets/images/web.jpg",
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software to streamline your business operations.",
    image: "/assets/images/mobile1.jpg",
  },
  {
    title: "Digital Invitations",
    description: "Digital invitations for the latest events with custom-themed designs.",
    image: "/assets/images/mar.jpg",
  },
  {
    title: "Logo & Branding",
    description: "Unique logos that capture your brand identity.",
    image: "/assets/images/logo_design_inner.jpg",
  },
  {
    title: "Social Media Management",
    description: "We handle your social media with creative content and strategy.",
    image: "/assets/images/Social-Media-Management-3.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 mt-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="relative container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions to empower your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <div className="space-y-4">
                  {service.image && (
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 px-4">
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

          {/* Digital Invitation Promo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <GlassCard>
              <div className="text-center space-y-4 py-8">
                <h3 className="text-3xl font-bold text-foreground">
                  Digital Invitation Service
                </h3>
                <p className="text-xl text-primary font-semibold">
                  Starts from ₹3,500 · Up to ₹10,000
                </p>
                <p className="text-muted-foreground">
                  For details & orders
                </p>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.location.href = '/#contact'}
                >
                  Contact Us
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
