
import React from "react";
import SocialLinks from "@/components/SocialLinks";
import ContactButton from "@/components/ContactButton";
import CompanyIcons from "@/components/CompanyIcons";
import Articles from "@/components/Articles";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-background animate-fade-in">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0 space-y-10 md:space-y-16">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-scale-in">
                Hey, I'm <span className="text-primary">Hemal</span>.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
                I love to build products, help entrepreneurs, and jam on fun ideas.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <ContactButton className="w-full md:w-auto" />
            </div>
            
            <div className="pt-4">
              <CompanyIcons />
            </div>
            
            <div className="pt-4 bg-accent/20 rounded-lg p-6 shadow-sm">
              <Articles />
            </div>
            
            <div className="pt-4 border-t border-border">
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
