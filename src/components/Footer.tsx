import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-inter text-sm text-muted-foreground">
            © {new Date().getFullYear()}{' '}
            <span className="neon-text-gradient font-semibold">
              Rajdeep Debnath
            </span>{' '}
            — Game Developer Portfolio
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
