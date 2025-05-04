import { Hero } from "@/components/home/hero";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsShowcase } from "@/components/home/skills-showcase";
export const runtime = "edge";

// import { Achievements } from "@/components/home/achievements";
// import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProjects />
      <SkillsShowcase />
    </div>
  );
}