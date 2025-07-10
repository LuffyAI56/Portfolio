
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="section-title animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            About Me
          </h2>
          <p
            className="section-subtitle animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '300ms' }}
        >
          <Card className="shadow-sm card-hover">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold">
                <UserCircle className="mr-3 h-8 w-8 text-primary" />
                <span>
                  {portfolioData.name}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-foreground/90 leading-relaxed">
              {portfolioData.aboutMe.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
