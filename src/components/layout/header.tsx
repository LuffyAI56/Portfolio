
"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Briefcase, User, Lightbulb, School, Mail, Building2 } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import React, { useState, useEffect } from "react";

const navItems = [
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Lightbulb },
  { href: "#projects", label: "Projects", icon: Briefcase },
  { href: "#experience", label: "Experience", icon: Building2 },
  { href: "#education", label: "Education", icon: School },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          variant="ghost"
          asChild
          className={`font-medium ${inSheet ? 'w-full justify-start py-3 text-base' : 'text-sm'}`}
          onClick={() => inSheet && setOpenMobileNav(false)}
        >
          <Link href={item.href}>
            {inSheet && <item.icon className="mr-2 h-5 w-5" />}
            {item.label}
          </Link>
        </Button>
      ))}
    </>
  );

  const nameParts = portfolioData.name.split(" ");
  const firstWord = nameParts[0];
  const restOfName = nameParts.slice(1).join(" ");

  if (!hasMounted) {
    // Simplified placeholder for the name
    const placeholderName = (
      <div className="flex items-center">
        <div className="h-6 w-20 animate-pulse rounded-md bg-muted"></div>
        <div className="ml-1 h-6 w-32 animate-pulse rounded-md bg-muted"></div>
      </div>
    );

    return (
      <header
        className={`sticky top-0 z-50 w-full bg-transparent`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="text-xl font-bold">
            {placeholderName}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.label} className="h-9 w-20 rounded-md bg-muted animate-pulse" />
            ))}
            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
          </div>
          <div className="md:hidden">
            <div className="h-10 w-10 rounded-md bg-muted animate-pulse" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold">
          <span className="text-primary">{firstWord}</span>
          <span className="text-foreground"> {restOfName}</span>
        </Link>
        
        <nav className="hidden items-center space-x-2 md:flex">
          <NavLinks />
          <ThemeToggle />
        </nav>

        <div className="md:hidden">
          <Sheet open={openMobileNav} onOpenChange={setOpenMobileNav}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <div className="mb-6 text-xl font-bold">
                <span className="text-primary">{firstWord}</span>
                <span className="text-foreground"> {restOfName}</span>
              </div>
              <nav className="flex flex-col space-y-3">
                <NavLinks inSheet />
                <div className="pt-4">
                 <ThemeToggle />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
