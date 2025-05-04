"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, Home, User, Briefcase, Code, BookOpen, Mail, Github, Linkedin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { socialLinks } from "@/data/social";

// Navigation items
const navItems = [
  { title: "Home", href: "/", icon: <Home className="mr-2 h-4 w-4" /> },
  { title: "About", href: "/about", icon: <User className="mr-2 h-4 w-4" /> },
  { title: "Experience", href: "/experience", icon: <Briefcase className="mr-2 h-4 w-4" /> },
  { title: "Projects", href: "/projects", icon: <Code className="mr-2 h-4 w-4" /> },
  { title: "Blog", href: "/blog", icon: <BookOpen className="mr-2 h-4 w-4" /> },
  { title: "Contact", href: "/contact", icon: <Mail className="mr-2 h-4 w-4" /> },
];

// Social icon map
const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <Github className="mr-2 h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="mr-2 h-4 w-4" />;
    case "mail":
      return <Mail className="mr-2 h-4 w-4" />;
    case "phone":
      return <Phone className="mr-2 h-4 w-4" />;
    default:
      return null;
  }
};

export function FloatingActionButton() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed right-6 bottom-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            size="lg" 
            className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            </motion.div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Navigate</DropdownMenuLabel>
          {navItems.map(item => (
            <DropdownMenuItem
              key={item.href}
              className="flex items-center cursor-pointer"
              onClick={() => {
                router.push(item.href);
                setIsOpen(false);
              }}
            >
              {item.icon}
              <span>{item.title}</span>
            </DropdownMenuItem>
          ))}
          
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel>Connect</DropdownMenuLabel>
          {socialLinks.map(link => (
            <DropdownMenuItem
              key={link.id}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.open(link.url, '_blank');
                setIsOpen(false);
              }}
            >
              {getSocialIcon(link.icon)}
              <span>{link.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}