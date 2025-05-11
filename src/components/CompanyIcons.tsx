
import React from "react";
import { Twitter, Instagram, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyIconsProps {
  className?: string;
}

const CompanyIcons = ({ className }: CompanyIconsProps) => {
  const companies = [
    {
      name: "Atlassian",
      icon: (
        <img 
          src="https://logosandtypes.com/wp-content/uploads/2020/07/atlassian.svg" 
          alt="Atlassian" 
          className="h-6 w-6"
        />
      ),
      color: "text-[#0052CC] hover:text-[#0043a6]"
    },
    {
      name: "Meta",
      icon: (
        <img 
          src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png" 
          alt="Meta" 
          className="h-6 w-6 object-contain"
        />
      ),
      color: "text-[#0668E1] hover:text-[#0552b6]"
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
      icon: (
        <img 
          src="https://cdn.iconscout.com/icon/free/png-512/free-crashlytics-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-13-pack-icons-283414.png?f=webp&w=512" 
          alt="Crashlytics" 
          className="h-6 w-6 object-contain"
        />
      ),
      color: "text-[#4285F4] hover:text-[#2a75e8]"
    },
    {
      name: "Root",
      icon: (
        <img 
          src="https://usercontent.one/wp/cashinvoice.it/wp-content/uploads/sites/6/2020/03/Root-Logo-Orange-Big-2048x512.png?media=1705480444" 
          alt="Root Insurance" 
          className="h-6 w-6 object-contain"
        />
      ),
      color: "text-[#FF6B35] hover:text-[#e85f2d]"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">Companies I've worked with</p>
      <div className={cn("grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center", className)}>
        {companies.map((company, index) => (
          <div 
            key={company.name} 
            className={cn(
              "flex flex-col items-center gap-2 opacity-0 animate-fade-up", 
              company.color
            )}
            style={{ 
              animationDelay: `${index * 150}ms`, 
              animationFillMode: "forwards" 
            }}
          >
            <div className="bg-background border border-border rounded-full p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 hover:rotate-3">
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
