
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

export function ExperienceSection() {
  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="section-title animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Work Experience
          </h2>
          <p
            className="section-subtitle animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            My professional roles and contributions.
          </p>
        </div>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.company + '-' + index}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${300 + index * 100}ms` }}
            >
              <Card 
                className="shadow-sm card-hover"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {exp.role}
                  </CardTitle>
                  <CardDescription className="text-md text-muted-foreground">{exp.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-base text-foreground/90">
                    <CalendarDays className="mr-2 h-4 w-4 text-primary/80" />
                    <span>{exp.dates}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center text-base text-foreground/90">
                      <MapPin className="mr-2 h-4 w-4 text-primary/80" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                  <ul className="list-disc list-inside space-y-1 pl-1 text-base text-foreground/90 leading-relaxed">
                    {exp.description.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
