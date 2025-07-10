
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-headline text-4xl font-bold sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            <span className="bg-gradient-to-r from-primary via-green-400 to-secondary-foreground bg-clip-text text-transparent animate-text-gradient-flow bg-[size:200%_auto]">
              About Me
            </span>
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '300ms' }}
        >
          <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold">
                <UserCircle className="mr-3 h-8 w-8 text-primary" />
                <span className="bg-gradient-to-r from-primary via-green-400 to-secondary-foreground bg-clip-text text-transparent animate-text-gradient-flow bg-[size:200%_auto]">
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
