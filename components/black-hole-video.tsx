// "use client";

// import { useEffect, useState } from "react";
// import { useTheme } from "next-themes";
// import { motion } from "framer-motion";

// export function BlackHoleVideo() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);
  
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   if (theme !== 'dark') return null;

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="fixed inset-0 overflow-hidden z-[-2] pointer-events-none"
//     >
//       <video
//         src="/blackhole.webm"
//         className="absolute rotate-180 top-[-340px] left-0 w-[700px] h-[670px] lg:w-full lg:h-[700px] object-cover overflow-hidden opacity-70"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//     </motion.div>
//   );
// }