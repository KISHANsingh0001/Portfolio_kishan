"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TechIcon } from "@/components/tech-icon";
import { Badge } from "@/components/ui/badge";
import { skills, SkillCategory } from "@/data/skills";


export function SkillsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Languages");
  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <Tabs defaultValue="Languages" 
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value as SkillCategory)}
            className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap gap-2 h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="w-full">
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {skills[category].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                    <Badge 
                        variant="outline" 
                        className="text-sm py-2 px-4 bg-background hover:bg-accent transition-colors flex items-center gap-2"
                        >
                        <TechIcon logoKey={skill.logoKey} name={skill.name} className="h-5 w-5" />
                        {skill.name}
                    </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}