import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-primary"></span>
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative border-l border-border/60 ml-4 md:ml-0 space-y-12">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative ml-8 md:ml-12"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-background border-4 border-primary z-10" />

              <div className="bg-card/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300 group">
                <h3 className="text-2xl font-display font-bold text-foreground mb-1 flex items-center gap-2">
                  <Briefcase
                    size={20}
                    className="text-primary hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {job.company}
                </h3>

                <div className="space-y-8 mt-6">
                  {job.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {job.roles.length > 1 && (
                        <div className="absolute -left-5 top-2 w-2 h-2 rounded-full bg-primary/40" />
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-3 gap-2">
                        <h4 className="text-lg font-semibold text-foreground">{role.title}</h4>
                        <div className="flex flex-col sm:items-end text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-md w-fit">
                          <span>{role.period}</span>
                          {role.location && (
                            <span className="opacity-80 text-xs">{role.location}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}