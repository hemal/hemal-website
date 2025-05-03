
import React from "react";
import SocialLinks from "@/components/SocialLinks";
import ContactButton from "@/components/ContactButton";
import CompanyIcons from "@/components/CompanyIcons";
import Articles from "@/components/Articles";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-background animate-fade-in">
      <div className="w-full max-w-3xl mx-auto">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0 space-y-8 md:space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Hello, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
                A brief description about yourself. Keep it simple and to the point.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <ContactButton className="w-full md:w-auto" />
            </div>
            
            <div className="pt-4">
              <CompanyIcons />
            </div>
            
            <div className="pt-4">
              <Articles />
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="flex flex-col items-center gap-6">
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
