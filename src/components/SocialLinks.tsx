
import React from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks = ({ className, iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      <a
        href="https://x.com/hemal"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Twitter"
      >
        <Twitter size={iconSize} className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/hemaljshah/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} className="social-icon" />
      </a>
      <a
        href="mailto:hello@hem.al"
        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
        aria-label="Email"
      >
        <Mail size={iconSize} className="social-icon" />
      </a>
    </div>
  );
};

export default SocialLinks;
