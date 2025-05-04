// components/shared/smooth-scroll-provider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

// Page transition variants
const pageVariants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      ease: "easeInOut" 
    }
  },
  exit: { 
    opacity: 0, 
    transition: { 
      duration: 0.2,
      ease: "easeInOut" 
    } 
  }
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Add smooth scrolling to the html element
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );
    
    // Observe all data-scroll elements
    const scrollElements = document.querySelectorAll("[data-scroll]");
    scrollElements.forEach((el) => {
      observer.observe(el);
    });
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = "";
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [pathname]); // Re-run when pathname changes

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}