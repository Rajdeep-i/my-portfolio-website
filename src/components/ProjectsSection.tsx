import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Button } from "./ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const ProjectsSection = () => {
  const navigate = useNavigate();

  const professionalProjects = projects.filter(
    (p) => p.category === "professional"
  );
  const soloProjects = projects.filter((p) => p.category === "solo");
  const teamProjects = projects.filter((p) => p.category === "team");

  const renderCategorySection = (
    title: string,
    items: typeof projects,
    categoryRoute: string
  ) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="mb-20"
    >
      <div className="flex justify-between items-center mb-8">
        <motion.h3
          variants={itemVariants}
          className="font-orbitron text-2xl font-semibold text-foreground flex items-center gap-4"
        >
          <span className="w-8 h-[2px] bg-gradient-neon" />
          {title}
        </motion.h3>
        {items.length > 3 && (
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              onClick={() => navigate(`/projects/${categoryRoute}`)}
              className="font-orbitron text-sm border-primary/20 hover:bg-primary/10 hover:text-primary"
            >
              View All
            </Button>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.slice(0, 3).map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            onClick={() => navigate(`/project/${project.id}`)}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tools={project.tools}
              role={project.role}
              teamSize={project.teamSize}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title neon-text-gradient">Projects</h2>
          <p className="section-subtitle">
            A collection of professional and personal game development work
          </p>
        </motion.div>

        {/* Professional Works */}
        {renderCategorySection(
          "Professional Works",
          professionalProjects,
          "professional"
        )}

        {/* Solo Personal Projects */}
        {renderCategorySection("Solo Personal Projects", soloProjects, "solo")}

        {/* Team Personal Projects */}
        {renderCategorySection("Team Personal Projects", teamProjects, "team")}
      </div>
    </section>
  );
};

export default ProjectsSection;
