
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from 'react';

// Simple Kaggle Icon SVG component
const KaggleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Kaggle</title>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="18px" fontFamily="system-ui, sans-serif" fontWeight="bold" fill="currentColor">k</text>
  </svg>
);


export function ContactSection() {
  const contactItems = [
    {
      href: `mailto:${portfolioData.contact.email}`,
      icon: Mail,
      text: portfolioData.contact.email,
      ariaLabel: "Email Ginjala Sri Ram Kumar Reddy",
      minWidthClass: "sm:min-w-[280px]",
    },
    {
      href: `tel:${portfolioData.contact.phone.replace(/\s/g, "")}`,
      icon: Phone,
      text: portfolioData.contact.phone,
      ariaLabel: "Call Ginjala Sri Ram Kumar Reddy",
      minWidthClass: "sm:min-w-[240px]",
    },
    {
      href: portfolioData.contact.linkedin,
      icon: Linkedin,
      text: "LinkedIn",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's LinkedIn Profile",
      minWidthClass: "sm:min-w-[180px]",
    },
    {
      href: portfolioData.contact.github,
      icon: Github,
      text: "GitHub",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's GitHub Profile",
      minWidthClass: "sm:min-w-[180px]",
    },
  ];

  if (portfolioData.contact.kaggle) {
    contactItems.push({
      href: portfolioData.contact.kaggle,
      icon: KaggleIcon,
      text: "Kaggle",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's Kaggle Profile",
      minWidthClass: "sm:min-w-[180px]",
    });
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-headline text-4xl font-bold sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            <span className="bg-gradient-to-r from-primary via-green-400 to-secondary-foreground bg-clip-text text-transparent animate-text-gradient-flow bg-[size:200%_auto]">
              Get In Touch
            </span>
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            Feel free to reach out for collaborations, opportunities, or just a chat.
          </p>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '300ms' }}
        >
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 md:gap-8">
            {contactItems.map((item) => (
              <Link 
                key={item.text} 
                href={item.href} 
                target={item.target} 
                rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
                className={`block p-4 sm:p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:-translate-y-1 bg-card text-center ${item.minWidthClass} group`}
              >
                <div className="flex flex-col items-center justify-center">
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-accent-foreground mb-3 sm:mb-4 transition-colors" />
                  <span className="text-base sm:text-lg font-medium text-foreground/90 break-words">
                    {item.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
