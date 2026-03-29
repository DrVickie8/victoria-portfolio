import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../lib/data";
import { GraduationCap, Award, Languages, Code2, CheckCircle2 } from "lucide-react";

function renderWithEmphasis(text: string) {
  const parts = text.split(/\*([^*]+)\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <em key={i} className="italic text-foreground font-medium">
        {part}
      </em>
    ) : (
      part
    )
  );
}

export function About() {
  const { personal, skills, education, certifications, languages } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-primary"></span>
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
          {/* Left — Summary + Expertise */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed mb-12">
              <p>{renderWithEmphasis(personal.summary)}</p>
            </div>

            {/* Expertise */}
            <div className="bg-card/60 backdrop-blur-xl border border-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                <Code2 className="text-primary" size={20} /> Expertise
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-secondary/60 border border-white/5 hover:border-primary/40 hover:bg-secondary transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary shrink-0 transition-colors" />
                    <span className="text-sm font-medium text-secondary-foreground leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Education + Certs + Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-10"
          >
            {/* Education */}
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="text-primary" size={20} /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l border-border">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-primary" />
                    <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                    <div className="text-primary font-medium text-sm mb-2">
                      {edu.school} • {edu.period}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.highlights.map((h, j) => (
                        <span key={j} className="text-xs px-2 py-1 rounded bg-white/5 text-muted-foreground">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-5 flex items-center gap-2">
                <Award className="text-primary" size={20} /> Certified In
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-primary/60 group-hover:text-primary shrink-0 mt-0.5 transition-colors"
                    />
                    <span className="text-xs font-medium text-muted-foreground leading-snug">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
                <Languages className="text-primary" size={20} /> Languages
              </h3>
              <div className="flex gap-4">
                {languages.map((lang, i) => (
                  <div
                    key={i}
                    className="bg-card/60 backdrop-blur-xl border border-white/5 px-4 py-3 rounded-xl flex-1 text-center"
                  >
                    <div className="font-bold text-foreground">{lang.name}</div>
                    <div className="text-sm text-primary mt-1">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}