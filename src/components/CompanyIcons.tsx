
import React from "react";
import { Facebook, Instagram, Twitter, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyIconsProps {
  className?: string;
}

const CompanyIcons = ({ className }: CompanyIconsProps) => {
  const companies = [
    {
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      color: "text-[#1877F2] hover:text-[#0b5fcc]"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      color: "text-[#E4405F] hover:text-[#d62d50]"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      color: "text-[#1DA1F2] hover:text-[#0d8edb]"
    },
    {
      name: "Crashlytics",
      icon: <AtSign className="h-6 w-6" />, // Using AtSign as a placeholder
      color: "text-[#4285F4] hover:text-[#2a75e8]"
    },
    {
      name: "Root Insurance",
      icon: <AtSign className="h-6 w-6" />, // Using AtSign as a placeholder
      color: "text-[#00A651] hover:text-[#008442]"
    },
    {
      name: "Atlassian",
      icon: (
        <img 
          src="https://logosandtypes.com/alphabet/letter-a/atlassian/" 
          alt="Atlassian" 
          className="h-6 w-6"
        />
      ),
      color: "text-[#0052CC] hover:text-[#0043a6]"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-muted-foreground">Companies I've worked with</p>
      <div className={cn("flex flex-wrap justify-center gap-8", className)}>
        {companies.map((company) => (
          <div 
            key={company.name} 
            className={cn("flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110", company.color)}
          >
            <div className="bg-background border border-border rounded-full p-4">
              {company.icon}
            </div>
            <span className="text-xs font-medium">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyIcons;
