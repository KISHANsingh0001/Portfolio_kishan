"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  console.log("current theme:", theme);

  return (
    <>
      {theme === "light" ? (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("dark")} 
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all " />
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")} 
        >
         
          <Moon className="h-5 w-5 rotate-0 scale-100 transition-all " />
        </Button>
      )}
    </>
  );
}