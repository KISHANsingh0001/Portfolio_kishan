
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
      id: "Second Brain",
      title: "Second Brain",
      description: "Welcome to Second Brain, your personal knowledge hub. Our application is designed to help you store your valuable information, thoughts, and ideas in one secure place. Whether it's for personal growth, professional use, or future reference, we aim to make your knowledge easily accessible and organized.",
      technologies: ["React.js", "Tailwind CSS", "Express", "Zod", "MongoDB","TypeScript"],
      // achievements: [
      //   "",
      //   "",
      //   "",
      //   ""
      // ],
      image: "/images/projects/Second-Brain/Second-Brain.png", // Path to your image
      github: "https://github.com/KISHANsingh0001/Second-Brain-App",
      liveUrl:"/",
      featured: true
    },
    {
      id: "Second Brain",
      title: "Second Brain",
      description: "Welcome to Second Brain, your personal knowledge hub. Our application is designed to help you store your valuable information, thoughts, and ideas in one secure place. Whether it's for personal growth, professional use, or future reference, we aim to make your knowledge easily accessible and organized.",
      technologies: ["React.js", "Tailwind CSS", "Express", "Zod", "MongoDB","TypeScript"],
      // achievements: [
      //   "",
      //   "",
      //   "",
      //   ""
      // ],
      image: "/images/projects/Second-Brain/Second-Brain.png", // Path to your image
      github: "https://github.com/KISHANsingh0001/Second-Brain-App",
      liveUrl:"/",
      featured: false
    },
    {
      id: "Second Brain",
      title: "Second Brain",
      description: "Welcome to Second Brain, your personal knowledge hub. Our application is designed to help you store your valuable information, thoughts, and ideas in one secure place. Whether it's for personal growth, professional use, or future reference, we aim to make your knowledge easily accessible and organized.",
      technologies: ["React.js", "Tailwind CSS", "Express", "Zod", "MongoDB","TypeScript"],
      // achievements: [
      //   "",
      //   "",
      //   "",
      //   ""
      // ],
      image: "/images/projects/Second-Brain/Second-Brain.png", // Path to your image
      github: "https://github.com/KISHANsingh0001/Second-Brain-App",
      liveUrl:"/",
      featured: true
    },
    {
      id: "Portfolio Website",
      title: "Portfolio Website",
      description: "This portfolio website is built with Next.js, Tailwind CSS, and Framer Motion. It features smooth animations, a responsive design, and a dark mode with a starry background. The site is optimized for performance and accessibility, providing a seamless user experience.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/images/projects/portfolio/portfolio_1.png", 
      liveUrl: "https:portfolio-kishan.pages.dev", 
      featured: true,
    },
  ];