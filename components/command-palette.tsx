"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Home, User, Briefcase, Code, BookOpen, Mail } from 'lucide-react';
import { 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup,
  CommandItem,
} from '@/components/ui/commands';
import { Button } from '@/components/ui/button';
import { socialLinks } from "@/data/social";

// Get icon component for social links
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <ArrowRight className="mr-2 h-4 w-4" />;
    case "linkedin":
      return <ArrowRight className="mr-2 h-4 w-4" />;
    case "mail":
      return <ArrowRight className="mr-2 h-4 w-4" />;
    case "phone":
      return <ArrowRight className="mr-2 h-4 w-4" />;
    default:
      return <ArrowRight className="mr-2 h-4 w-4" />;
  }
};

// Get icon for navigation items
const getNavIcon = (href: string) => {
  switch (href) {
    case "/":
      return <Home className="mr-2 h-4 w-4" />;
    case "/about":
      return <User className="mr-2 h-4 w-4" />;
    case "/experience":
      return <Briefcase className="mr-2 h-4 w-4" />;
    case "/projects":
      return <Code className="mr-2 h-4 w-4" />;
    case "/blog":
      return <BookOpen className="mr-2 h-4 w-4" />;
    case "/contact":
      return <Mail className="mr-2 h-4 w-4" />;
    default:
      return <ArrowRight className="mr-2 h-4 w-4" />;
  }
};

// Navigation items
const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="hidden md:flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent hover:bg-accent hover:text-accent-foreground ml-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="h-8 md:hidden rounded-md border border-input"
        onClick={() => setOpen(true)}
      >
        <Search className="h-3.5 w-3.5 mr-2" />
        <span className="sr-only">Search</span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
              >
                {getNavIcon(item.href)}
                <span>{item.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          
          {/* <CommandGroup heading="Social">
            {socialLinks.map((social) => (
              <CommandItem
                key={social.id}
                onSelect={() => {
                  window.open(social.url, '_blank');
                  setOpen(false);
                }}
              >
                {getIconComponent(social.icon)}
                <span>{social.name}</span>
              </CommandItem>
            ))}
          </CommandGroup> */}
          
          {/* <CommandGroup heading="Theme">
            <CommandItem onSelect={() => {
              document.documentElement.classList.toggle('dark');
              setOpen(false);
            }}>
              <ArrowRight className="mr-2 h-4 w-4" />
              <span>Toggle Theme</span>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}