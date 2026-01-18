import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Gamepad2, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rajdeep-debnath-427062103",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Rajdeep-i",
    color: "hover:text-foreground",
  },
  {
    name: "Itch.io",
    icon: Gamepad2,
    href: "https://itch.io/dashboard",
    color: "hover:text-[#fa5c5c]",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title neon-text-gradient">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in working together? Let's connect!
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute inset-[1px] rounded-xl bg-card" />
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--neon-cyan)), hsl(var(--neon-purple)), hsl(var(--neon-blue)), hsl(var(--neon-cyan)))',
                  backgroundSize: '300% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <div className="absolute inset-[2px] rounded-xl bg-card" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Email */}
              <div className="flex justify-center items-center flex-col ">
              <motion.a
                href="mailto:rajdeep.jg99@gmail.com"
                className="inline-flex items-center gap-3 text-lg md:text-xl text-foreground hover:text-primary transition-colors group mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary group-hover:animate-pulse" />
                <span className="font-inter">rajdeep.jg99@gmail.com</span>
                </div>
                </motion.a>

                {/* phone number */}
                <motion.a
                href="tel:+917029933526"
                className="inline-flex items-center gap-3 text-lg md:text-xl text-foreground hover:text-primary transition-colors group mb-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                <div className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-primary group-hover:animate-pulse" />
                <span className="font-inter">+91 7029933526</span>
                </div>
                </motion.a>
                </div>
             

              {/* Divider */}
              <div className="w-24 h-[1px] bg-gradient-neon mx-auto mb-10 opacity-50" />

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 glass-card rounded-xl text-muted-foreground ${link.color} transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.3)]`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="sr-only">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Labels */}
              <div className="flex justify-center gap-6 mt-4">
                {socialLinks.map((link) => (
                  <span
                    key={link.name}
                    className="font-inter text-sm text-muted-foreground w-14 text-center"
                  >
                    {link.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
