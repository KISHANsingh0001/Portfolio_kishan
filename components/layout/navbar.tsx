"use client";

import { useState, useEffect } from "react";
export const runtime = "edge";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitch } from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// Import but hide the visible button
import { ThreeDCard } from "@/components/3d-card";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();



  // Update active section based on URL
  useEffect(() => {
    const pathname = window.location.pathname;
    setActiveSection(pathname);
  }, []);

  // Navbar container variants for animations
  const navbarVariants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5,
        duration: 0.1
      }
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  // Navbar link item variants for animations
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

 

  return (
    <>  
      <AnimatePresence>
       
          <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-xl py-3 px-4 border-2"
          >
            <ThreeDCard className="w-full">
              <div className="flex items-center justify-between">
                {/* Logo with fixed width */}
                <div className="w-[160px]">
                  <Link 
                    href="/"
                    className="font-display text-xl font-bold transition-colors hover:text-primary"
                  >
                    <motion.span
                      className="whitespace-nowrap"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Kishan Singh Thakur
                    </motion.span>
                  </Link>
                </div>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex justify-center flex-1">
                  <nav className="flex items-center gap-1">
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.href}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-all hover:text-primary hover:bg-muted/50 variable-font",
                            activeSection === item.href
                              ? "text-primary bg-muted/60 font-variation-settings: 'wght' 600"
                              : "text-muted-foreground"
                          )}
                          onClick={() => setActiveSection(item.href)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>
                
                {/* Theme toggle - Right aligned with fixed width */}
                <div className="w-[160px] flex justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <ThemeSwitch />
                  </motion.div>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="md:hidden ml-4" 
                  >
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full bg-muted/50">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                  </motion.div>
                  <SheetContent side="right" className="p-0">
                    <div className="flex flex-col h-full">
                      <div className="p-6 flex justify-between items-center">
                        <Link 
                          href="/"
                          className="font-display text-2xl font-bold transition-colors hover:text-primary"
                        >
                          Kishan Singh Thakur
                        </Link>
                        <ThemeSwitch />
                      </div>
                      <div className="flex-1 px-6 py-8">
                        <ul className="flex flex-col gap-1">
                          {navItems.map((item, i) => (
                            <motion.li 
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              <Link
                                href={item.href}
                                className={cn(
                                  "block py-3 px-4 text-lg font-medium rounded-md transition-colors",
                                  activeSection === item.href
                                    ? "text-primary bg-muted/60"
                                    : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                                )}
                                onClick={() => setActiveSection(item.href)}
                              >
                                {item.title}
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </ThreeDCard>
          </motion.header>
        
      </AnimatePresence>
    </>
  );
}