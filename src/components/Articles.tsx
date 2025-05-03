
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Book } from "lucide-react";

interface Article {
  title: string;
  description: string;
  url: string;
}

const Articles = () => {
  const articles: Article[] = [
    {
      title: "When to Hire a Head of Product",
      description: "Guidelines for determining the right timing for your organization",
      url: "https://theskip.substack.com/p/hiring-your-first-head-of-product?"
    },
    {
      title: "Good vs. Bad Product Manager",
      description: "Key differences that separate exceptional PMs from the rest",
      url: "https://medium.com/@hemal/the-modern-day-good-product-manager-bad-product-d5b537398e3a"
    },
    {
      title: "How Do I Become a Product Manager?",
      description: "Career path insights and essential skills for aspiring PMs",
      url: "https://medium.com/@hemal/should-i-become-a-product-manager-5ce77949a13a"
    }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">Articles I've written</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {articles.map((article, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
              <CardContent className="p-5">
                <a 
                  href={article.url} 
                  className="flex flex-col gap-2 h-full no-underline text-foreground"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <h3 className="font-medium text-lg">{article.title}</h3>
                  <Separator />
                  <p className="text-sm text-muted-foreground">{article.description}</p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
