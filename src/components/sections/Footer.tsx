import { PORTFOLIO_DATA } from "../../lib/data";
import { Mail, Linkedin, ArrowUp } from "lucide-react";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-display font-bold text-foreground mb-2">
            V<span className="text-primary">.</span>J
            <span className="text-primary">.</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
        >
          Back to top
          <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </span>
        </button>
      </div>
    </footer>
  );
}