import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Users,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { projects } from "../data/projects";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-gradient-neon">
              {project.title}
            </h1>
            <p className="font-inter text-xl text-muted-foreground mb-6 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                <Users size={16} className="text-secondary" />
                <span className="text-sm font-medium text-secondary">
                  {project.role}
                </span>
              </div>
              {project.teamSize && (
                <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-muted-foreground/20">
                  <Users size={16} className="text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Team: {project.teamSize}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-inter px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities Section */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div className="mb-16">
              <h2 className="font-orbitron text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                Key Responsibilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 glass-card p-4 rounded-lg border border-white/5"
                  >
                    <CheckCircle
                      className="text-green-500 flex-shrink-0"
                      size={20}
                    />
                    <span className="font-inter text-foreground/90">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Video Section */}
          {project.videoUrl && (
            <div className="mb-16">
              <h2 className="font-orbitron text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-primary rounded-full"></span>
                Demo Video
              </h2>
              <div className="glass-card p-2 rounded-xl border border-primary/20">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/50">

                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full relative z-10"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>


                </div>
              </div>
            </div>
          )}

          {/* Screenshots Section */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="font-orbitron text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-8 bg-secondary rounded-full"></span>
                Screenshots Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.screenshots.map((shot, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl overflow-hidden border border-white/5"
                  >
                    <img
                      src={shot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
