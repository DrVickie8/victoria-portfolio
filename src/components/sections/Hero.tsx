import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../../lib/data";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] as any } },
};

const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.6, 0.05, -0.01, 0.9] as any } },
};

export function Hero() {
  const { personal, stats } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="flex-1 min-w-0"
          >
            <motion.span
              variants={fadeUpVariant}
              className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4"
            >
              Technical Writer · Email Marketer · Storyteller
            </motion.span>

            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-foreground leading-tight tracking-tight mb-4"
            >
              Hi, I'm{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 24px rgba(245,204,54,0.55)" }}
              >
                {personal.name}
              </span>
            </motion.h1>

            <motion.h2
              variants={fadeUpVariant}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            >
              {personal.headline}
            </motion.h2>

            <motion.p
              variants={fadeUpVariant}
              className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl leading-relaxed"
            >
              {personal.tagline}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() =>
                  document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground
                  hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: "0 0 0 rgba(245,204,54,0)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.boxShadow = "0 0 24px rgba(245,204,54,0.5)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.boxShadow = "none")
                }
              >
                View My Work <ArrowRight size={18} />
              </button>
              <a
                href={`mailto:${personal.email}`}
                className="px-8 py-4 rounded-xl font-semibold bg-secondary/50 text-foreground
                  border border-white/10 hover:border-primary/50 hover:bg-secondary
                  transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={18} /> Get In Touch
              </a>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/50"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-primary">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { delay: 0.3 } } }}
            className="flex-shrink-0 flex justify-center"
          >
            <motion.div variants={fadeInVariant} className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/60 via-primary/20 to-transparent blur-md" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/20 border border-primary/30 z-[-1]" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border border-primary/20 z-[-1]" />

              <div
                className="relative rounded-2xl overflow-hidden border-2 border-primary/40 w-64 md:w-80 lg:w-96"
                style={{ boxShadow: "0 0 24px rgba(245,204,54,0.25)" }}
              >
                <img
                  src="/images/victoria-johnson.jpg"
                  alt="Victoria Johnson"
                  className="w-full h-full object-cover object-top"
                  style={{ aspectRatio: "3/4" }}
                />
                <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-6 bg-card border border-border rounded-xl px-4 py-2.5 shadow-xl"
              >
                <p className="text-xs text-muted-foreground font-medium">Currently</p>
                <p className="text-sm font-semibold text-foreground">@ Turing · Team Lead</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}