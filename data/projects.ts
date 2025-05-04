export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    // achievements: string[];
    image: string; // Make this required now that we have images
    github?: string;
    liveUrl?: string;
    featured: boolean;
  }
  
  export const projects: Project[] = [
    {
      id: "Second Brain",
      title: "Second Brain",
      description: "Organize And Share your thoughts, ideas, and information in one place. Accessible from anywhere, at any time.",
      longDescription: "Welcome to Second Brain, your personal knowledge hub. Our application is designed to help you store your valuable information, thoughts, and ideas in one secure place. Whether it's for personal growth, professional use, or future reference, we aim to make your knowledge easily accessible and organized.",
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
    }
  ];