import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/profile.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Floating particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 20 + 15 + 's',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="profile-frame w-32 h-32 md:w-40 md:h-40 animate-pulse-glow">
            <img src={profileImg} alt="Rajdeep Debnath" className="object-contain "/>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="text-foreground">Rajdeep Debnath</span>
          <br />
          <span className="neon-text-gradient">I am a Game Developer and a Game Designer</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Unreal Developer specializing in Blueprint systems • Gameplay Programmer • Game Designer • Passionate about creating immersive gaming experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            variant="default"
            size="lg"
            className="font-orbitron uppercase tracking-wider bg-gradient-neon text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow hover:scale-110 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <a href="/Resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="font-orbitron uppercase tracking-wider border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all hover:scale-110 duration-300"
            >
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1 },
          y: { duration: 1.5, repeat: Infinity }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
      >
        <ChevronDown size={32} className="hover-glow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
