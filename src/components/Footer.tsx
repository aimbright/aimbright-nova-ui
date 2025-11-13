import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-br from-white to-blue-50/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="/assets/images/an2.png" 
              alt="Aim Bright Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground">
              Building the future, one innovation at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About', 'Contact', 'Careers'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-card/40 border border-white/10 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Aim Bright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
