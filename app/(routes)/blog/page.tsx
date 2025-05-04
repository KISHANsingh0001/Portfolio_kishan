"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, BellRing } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <CalendarDays className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Blog Coming Soon
          </h1>
          
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            I&apos;m working on some interesting articles about web development, blockchain technology, 
            and machine learning. Stay tuned for insightful content!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16 max-w-5xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="h-48 rounded-md bg-muted/70 animate-pulse flex items-center justify-center">
                      <Clock className="h-8 w-8 text-muted-foreground/40" />
                    </div>
                    
                    <div className="h-6 w-2/3 rounded-md bg-muted/70 animate-pulse"></div>
                    
                    <div className="space-y-2">
                      <div className="h-4 rounded-md bg-muted/70 animate-pulse"></div>
                      <div className="h-4 rounded-md bg-muted/70 animate-pulse"></div>
                      <div className="h-4 w-4/5 rounded-md bg-muted/70 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted/70 animate-pulse"></div>
                      <div className="h-4 w-24 rounded-md bg-muted/70 animate-pulse"></div>
                    </div>
                    <div className="h-4 w-16 rounded-md bg-muted/70 animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-md mx-auto text-center"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <BellRing className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Notified</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get notified when new blog posts are available.
              </p>
              
              {submitted ? (
                <div className="p-4 bg-primary/10 rounded-lg text-sm">
                  Thanks for subscribing! I&apos;ll notify you when new content is available.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1"
                    />
                    <Button type="submit">
                      Notify Me
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <Separator className="my-16" />
        
        <div className="text-center text-muted-foreground">
          <p>Check back soon for articles on:</p>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Web Development</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Blockchain</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Next.js</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">React</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">Machine Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}