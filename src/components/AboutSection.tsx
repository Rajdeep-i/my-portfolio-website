import { motion } from 'framer-motion';
import { Briefcase, Calendar, Trophy } from 'lucide-react';
import profileImg from '@/assets/myimg.jpeg';

const stats = [
  { icon: Briefcase, value: '5+', label: 'Projects' },
  { icon: Calendar, value: '2', label: 'Years' },
  { icon: Trophy, value: '3', label: 'Game Jams' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title neon-text-gradient">About Me</h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-3xl opacity-30" />

              {/* Image container */}
              <div className="relative glass-card p-2 rounded-2xl"> 
                <img
                  src={profileImg}
                  alt="Rajdeep Debnath"
                  className="w-72 aspect-[3/4] object-cover rounded-xl"
                />

                {/* Decorative border */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-neon opacity-50 -z-10" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6 text-muted-foreground font-inter leading-relaxed">
              <p>
                I'm an{" "}
                <span className="text-primary font-medium">
                  Unreal Developer
                </span>{" "}
                specializing in Blueprint systems at a professional studio,
                while independently pursuing game design through personal
                projects and game jams.
              </p>

              <p>
                In solo projects, I handle everything—from gameplay programming
                to design, art integration, and polishing. In team projects, I
                contribute as a{" "}
                <span className="text-secondary font-medium">
                  Game Designer
                </span>{" "}
                focusing on mechanics, systems, and player experience.
              </p>

              <p>
                My passion lies in creating meaningful interactive experiences
                that engage players through thoughtful system design and
                polished execution. Whether working solo or collaborating with a
                team, I bring dedication to every aspect of game development.
              </p>
            </div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="stat-card"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-orbitron text-2xl md:text-3xl font-bold neon-text-cyan">
                      {stat.value}
                    </div>
                    <div className="font-inter text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
