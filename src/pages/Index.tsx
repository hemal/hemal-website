
import React, { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import CompanyIcons from "@/components/CompanyIcons";
import Articles from "@/components/Articles";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center p-4 md:p-8 py-16 md:py-24 bg-background transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-3xl mx-auto">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0 space-y-14 md:space-y-20">
            <div className="space-y-12 text-center">
              <h1 className={`text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                Hey, I'm <span className="text-primary">Hemal</span>.
              </h1>
              <p className={`text-lg md:text-xl text-muted-foreground max-w-lg mx-auto transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                I love to build products, help entrepreneurs, and jam on fun ideas.
              </p>
            </div>
            
            <div className={`pt-4 bg-accent/20 rounded-lg p-6 shadow-sm transition-all duration-700 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Articles />
            </div>
            
            <div className={`pt-4 transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <CompanyIcons />
            </div>
            
            <div className={`pt-4 border-t border-border transition-all duration-700 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <div className="flex flex-col items-center gap-6 mt-6">
                <p className="text-sm text-muted-foreground">Connect with me</p>
                <SocialLinks iconSize={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
