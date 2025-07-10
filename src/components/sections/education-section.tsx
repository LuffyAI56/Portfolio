
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="section-title animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Education
          </h2>
          <p
            className="section-subtitle animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            My academic background and qualifications.
          </p>
        </div>
        
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <div
              key={edu.institution + '-' + index}
              className="animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${300 + index * 150}ms` }}
            >
              <Card 
                className="shadow-sm card-hover glassmorphic"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {edu.institution}
                  </CardTitle>
                  <CardDescription className="text-md text-muted-foreground">{edu.degree}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-base text-foreground/90">
                    <CalendarDays className="mr-2 h-4 w-4 text-primary/80" />
                    <span>{edu.dates}</span>
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center text-base text-foreground/90">
                      <Award className="mr-2 h-4 w-4 text-primary/80" />
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  )}
                  {edu.details && edu.details.map((detail, i) => (
                    <p key={i} className="text-base text-foreground/90 leading-relaxed">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
