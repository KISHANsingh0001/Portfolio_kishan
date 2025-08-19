
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  // achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "Second_Brain",
    title: "Second Brain",
    description: "Welcome to Second Brain, your personal knowledge hub. Our application is designed to help you store your valuable information, thoughts, and ideas in one secure place. Whether it's for personal growth, professional use, or future reference, we aim to make your knowledge easily accessible and organized.",
    technologies: ["React.js", "Tailwind CSS", "Express", "Zod", "MongoDB", "TypeScript"],
    // achievements: [
    //   "",
    //   "",
    //   "",
    //   ""
    // ],
    image: "/images/projects/Second-Brain/Second-Brain.png", // Path to your image
    github: "https://github.com/KISHANsingh0001/Second-Brain-App",
    liveUrl: "https://profile.secondbrain.sbs",
    featured: true
  },
  {
    id: "Noter.AI",
    title: "Noter.AI",
    description: "An intelligent PDF management tool built with Next.js and Convex. Users can upload PDFs, take notes, and leverage AI to extract insights from documents. Features include AI-powered search, rich text note-taking, and a premium subscription model via PayPal and Razorpay integration Soon.",
    technologies: ["Next.js", "Tailwind CSS", "Convex", "Clerk Auth", "AI Embeddings"],
    image: "/images/projects/noterAi/noterAi.png",
    github: "https://github.com/KISHANsingh0001/Noter.AI",
    liveUrl: "https://noter-ai-pdf.vercel.app",
    featured: true
  },
  {
    id: "PayMate",
    title: "PayMate | P2P Money Transfer",
    description: "A peer-to-peer money transfer application with dark-themed UI. Features include user authentication, secure money transfers between users, transaction history tracking, real-time balance updates, and user search functionality. The responsive design works seamlessly across devices.",
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "Recoil", "JWT", "Axios"],
    image: "/images/projects/paymate/paymate.png",
    github: "https://github.com/KISHANsingh0001/PayMate",
    liveUrl: "https://pay-mate-eight.vercel.app/",
    featured: true
  },
  {
    id: "Portfolio Website",
    title: "Portfolio Website",
    description: "This portfolio website is built with Next.js, Tailwind CSS, and Framer Motion. It features smooth animations, a responsive design, and a dark mode with a starry background. The site is optimized for performance and accessibility, providing a seamless user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    image: "/images/projects/portfolio/portfolio_1.png",
    liveUrl: "https:portfolio-kishan.pages.dev",
    featured: false,
  },
];