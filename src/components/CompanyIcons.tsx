
import React from "react";
import { Instagram, Twitter, AtSign } from "lucide-react";
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png" 
          alt="Meta" 
          className="h-6 w-6"
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
          src="https://www.stickpng.com/assets/images/5847f31bcef1014c0b5e4a70.png" 
          alt="Crashlytics" 
          className="h-6 w-6"
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
      color: "text-[#00A651] hover:text-[#008442]"
    }
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-muted-foreground">Companies I've worked with</p>
      <div className={cn("flex flex-wrap justify-center gap-6", className)}>
        {companies.map((company) => (
          <div 
            key={company.name} 
            className={cn("flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110", company.color)}
          >
            <div className="bg-background border border-border rounded-full p-3 shadow-sm">
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
