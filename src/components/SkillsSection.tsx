import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Code2, 
  Wrench, 
  Layers, 
  Boxes, 
  Palette,
  Target,
  Settings,
  MonitorPlay,
  PenTool,
  Cog,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Game Design',
    icon: Gamepad2,
    color: 'primary',
    skills: [
      { name: 'Level Design', icon: Layers },
      { name: 'Gameplay Mechanics', icon: Target },
      { name: 'UI/UX Planning', icon: Palette },
      { name: 'System Design', icon: Settings },
      { name: 'Game Balancing', icon: Cog },
    ],
  },
  {
    title: 'Development',
    icon: Code2,
    color: 'secondary',
    skills: [
      { name: 'Unity (C#)', icon: Boxes },
      { name: 'Unreal Engine (Blueprints)', icon: Cpu },
      { name: 'Player Controller Systems', icon: Gamepad2 },
      { name: 'UI Systems', icon: MonitorPlay },
      { name: '2D & 3D Gameplay Programming', icon: Code2 },
    ],
  },
  {
    title: 'Tools I Use',
    icon: Wrench,
    color: 'accent',
    skills: [
      { name: 'Unity', icon: Boxes },
      { name: 'Unreal Engine', icon: Cpu },
      { name: 'Visual Studio / VS Code', icon: Code2 },
      { name: 'Blender', icon: Boxes },
      { name: 'Figma', icon: PenTool },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const SkillsSection = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          border: 'border-primary/30 hover:border-primary/60',
          bg: 'bg-primary/5',
          text: 'text-primary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)]',
        };
      case 'secondary':
        return {
          border: 'border-secondary/30 hover:border-secondary/60',
          bg: 'bg-secondary/5',
          text: 'text-secondary',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]',
        };
      case 'accent':
        return {
          border: 'border-accent/30 hover:border-accent/60',
          bg: 'bg-accent/5',
          text: 'text-accent',
          glow: 'group-hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.3)]',
        };
      default:
        return {
          border: 'border-primary/30',
          bg: 'bg-primary/5',
          text: 'text-primary',
          glow: '',
        };
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title neon-text-gradient">Skills & Tools</h2>
          <p className="section-subtitle">
            Technologies and expertise I bring to every project
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => {
            const colors = getColorClasses(category.color);
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className={`skill-card group transition-all duration-500 ${colors.border} ${colors.glow}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${colors.bg}`}>
                    <CategoryIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className={`font-orbitron text-xl font-semibold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <SkillIcon className={`w-4 h-4 ${colors.text} opacity-60`} />
                        <span className="font-inter text-sm">{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
