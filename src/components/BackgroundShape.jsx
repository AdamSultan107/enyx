// import React from "react";
// import { motion } from "framer-motion";

// const BackgroundShape = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
//       {/* Left floating DNA-ish blob */}
//       <motion.div
//         initial={{ opacity: 1, x: -100, scale: 0.8 }}
//         animate={{ opacity: 1, x: 50, scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute top-10 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
//       />

//       {/* Right floating blob */}
//       <motion.div
//         initial={{ opacity: 0, x: 50, scale: 0.8 }}
//         animate={{ opacity: 0.05, x: 0, scale: 1 }}
//         transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
//         className="absolute bottom-10 right-0 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl"
//       />

//       {/* Subtle center helix-inspired shape */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 0.03, y: 0 }}
//         transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
//         className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-gradient-to-tr from-blue-300 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
//       />
//     </div>
//   );
// };

// export default BackgroundShape;