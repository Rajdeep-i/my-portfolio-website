import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tools: string[];
  role: string;
  teamSize?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tools,
  role,
  teamSize,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card glow-border group cursor-pointer overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="flex items-center gap-2 text-primary font-orbitron text-sm"
          >
            <ExternalLink size={18} />
            View Details
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="font-inter text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        {/* Role & Team Size */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-inter px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            {role}
          </span>
          {teamSize && (
            <span className="text-xs font-inter px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Team: {teamSize}
            </span>
          )}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="text-xs font-inter px-2 py-1 rounded bg-muted text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
