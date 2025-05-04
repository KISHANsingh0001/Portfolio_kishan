export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "Global",
      degree: "Bechlors's in Computer Science",
      institution: "at Baderia Global Institute of Engineering and Management",
      location: "Jabalpur, M.P, India",
      startDate: "Oct 2022",
      endDate: "Sep 2026"
    },
    {
      id: "Saraswati",
      degree: "High School",
      institution: "Saraswati Higher Sec. School",
      location: "Adhartal,Jabalpur, M.P. ,India",
      startDate: "Apr 2021",
      endDate: "May 2022",
    }
  ];