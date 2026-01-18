import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const ProjectsCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const filteredProjects = projects.filter((p) => p.category === category);

  const getCategoryTitle = (cat: string | undefined) => {
    switch (cat) {
      case "professional":
        return "Professional Works";
      case "solo":
        return "Solo Personal Projects";
      case "team":
        return "Team Personal Projects";
      default:
        return "Projects";
    }
  };

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

  if (filteredProjects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title neon-text-gradient">
            {getCategoryTitle(category)}
          </h1>
          <p className="section-subtitle">
            All available projects in this category
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
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
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsCategory;
