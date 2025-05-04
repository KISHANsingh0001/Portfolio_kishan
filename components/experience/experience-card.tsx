// // components/experience/experience-card.tsx
// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight, MapPin } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { Experience } from "@/data/experience";

// interface ExperienceCardProps {
//   experience: Experience;
//   index: number; // For animation staggering
// }

// export function ExperienceCard({ experience, index }: ExperienceCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="mb-10"
//     >
//       <Card className="overflow-hidden">
//         <CardHeader className="bg-muted/50 p-4">
//           <CardTitle className="flex flex-wrap justify-between items-start gap-2">
//             <div>
//               <h3 className="text-xl font-bold">{experience.title}</h3>
//               <p className="text-sm text-muted-foreground">{experience.company}</p>
//             </div>
//             <Badge variant="outline">
//               {experience.startDate} - {experience.endDate}
//             </Badge>
//           </CardTitle>
//           <div className="flex items-center text-sm text-muted-foreground mt-2">
//             <MapPin className="mr-1 h-4 w-4" />
//             {experience.location}
//           </div>
//         </CardHeader>
//         <CardContent className="p-4">
//           <p className="mb-4">{experience.description}</p>
//           <Separator className="my-4" />
//           <h4 className="font-medium mb-2">Key Achievements:</h4>
//           <ul className="space-y-2">
//             {experience.achievements.map((achievement, i) => (
//               <li key={i} className="flex items-start">
//                 <ArrowRight className="mr-2 h-4 w-4 text-primary mt-0.5 shrink-0" />
//                 <span className="text-sm">{achievement}</span>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }