import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../lib/data";
import { ExternalLink, Layout, PenTool, TrendingUp, Mail as MailIcon, Send } from "lucide-react";
import type { ReactNode } from "react";

const getProjectIcon = (title: string) => {
  if (title.includes("Yelo Room")) return <Layout size={24} />;
  if (title.includes("SEO")) return <PenTool size={24} />;
  if (title.includes("Growth")) return <TrendingUp size={24} />;
  if (title.includes("Newsletter")) return <MailIcon size={24} />;
  return <Layout size={24} />;
};

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function ApplePodcastsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5c2.601 0 4.5 1.899 4.5 4.5 0 2.601-1.899 4.5-4.5 4.5S7.5 11.601 7.5 9c0-2.601 1.899-4.5 4.5-4.5zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 15c3.75 0 7.2 1.8 9 4.5H3c1.8-2.7 5.25-4.5 9-4.5z" />
    </svg>
  );
}

const platformConfig: Record<string, { icon: ReactNode; label: string; color: string }> = {
  youtube: {
    icon: <YouTubeIcon />,
    label: "YouTube",
    color: "hover:bg-red-500/10 hover:border-red-500/40 hover:text-red-500",
  },
  spotify: {
    icon: <SpotifyIcon />,
    label: "Spotify",
    color: "hover:bg-green-500/10 hover:border-green-500/40 hover:text-green-500",
  },
  apple: {
    icon: <ApplePodcastsIcon />,
    label: "Apple Podcasts",
    color: "hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-400",
  },
};

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 flex items-center gap-4">
              <span className="w-12 h-0.5 bg-primary"></span>
              Selected Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of platforms built, campaigns run, and content architectures designed to
              drive measurable impact.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card/60 backdrop-blur-xl border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                style={{ ["--tw-shadow" as string]: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(245,204,54,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {getProjectIcon(project.title)}
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {!("links" in project && project.links) && (
                    <ExternalLink
                      size={20}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                    />
                  )}
                </div>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {"links" in project && project.links && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.links as { label: string; url: string; platform: string }[]).map(
                      (link) => {
                        const config = platformConfig[link.platform];
                        return (
                          <a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium border border-border text-muted-foreground transition-all duration-200 ${config.color}`}
                          >
                            {config.icon}
                            {link.label}
                          </a>
                        );
                      }
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative bg-card/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-10 md:p-14 overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mx-auto mb-6">
                <Send size={24} />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Let's Work Together
              </h3>

              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                I'm open to{" "}
                <span className="text-foreground font-medium">technical writing</span>,{" "}
                <span className="text-foreground font-medium">AI agent training</span>,{" "}
                <span className="text-foreground font-medium">
                  science & technical communications
                </span>
                ,{" "}
                <span className="text-foreground font-medium">email marketing</span> and{" "}
                <span className="text-foreground font-medium">website content management</span>{" "}
                full-time or contract roles.
              </p>

              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Open to relocate
                </span>
              </div>

              <a
                href="mailto:victoriaagbomeji@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground
                  hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-300 text-base"
              >
                <MailIcon size={20} />
                victoriaagbomeji@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}