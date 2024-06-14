// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { Box, IconButton, Typography, Stack } from "@mui/material";
// import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
// import profile from "./../../public/assets/profile.jpg";
// import { motion } from "framer-motion";
// import { useTheme } from "@emotion/react";

// function About() {
//   const theme = useTheme();

//   return (
//     <div className="flex flex-col mb-10 mx-auto mt-[40px] md:mt-[200px] p-8 items-center justify-center">
//       <Stack
//         direction={{ xs: "column-reverse", lg: "row" }}
//         spacing={{ xs: 2, md: 10 }}
//       >
//         <Box justifyContent="center" alignItems="center">
//           <Typography
//             variant="h1"
//             fontWeight="bold"
//             mb="10px"
//             fontSize={{ xs: "56px", md: "6rem" }}
//           >
//             Ryan Nguyen
//           </Typography>
//           <Typography
//             variant="h4"
//             textAlign="left"
//             mb="10px"
//             fontSize={{ xs: "24px", md: "2.125rem" }}
//           >
//             <TypeAnimation
//               sequence={[
//                 "I'm a Software Engineer",
//                 1000,
//                 "I'm a FullStack Developer",
//                 1000,
//               ]}
//               wrapper="span"
//               speed={200}
//               repeat={Infinity}
//             />
//           </Typography>
//           <Typography maxWidth="400px" textAlign="left" mb="10px">
//             Hello World! Welcome to my portfolio. I am pleased to share with you
//             my skills and experiences. Thank you for visiting!
//           </Typography>
//           <Stack display="flex" direction="row" spacing={2}>
//             <IconButton
//               href="https://github.com/RyanGitWing"
//               sx={{
//                 borderRadius: "6px",
//                 backgroundColor: "secondary.background",
//                 "&:hover": {
//                   backgroundColor: "accent.background",
//                   "& svg": {
//                     color: "accent.main",
//                   },
//                 },
//               }}
//             >
//               <GitHub fill-current sx={{ color: "secondary.main" }} />
//             </IconButton>
//             <IconButton
//               href="https://www.linkedin.com/in/ryan-nguyen-156837202/"
//               sx={{
//                 borderRadius: "6px",
//                 backgroundColor: "secondary.background",
//                 "&:hover": {
//                   backgroundColor: "accent.background",
//                   "& svg": {
//                     color: "accent.main",
//                   },
//                 },
//               }}
//             >
//               <LinkedIn fill-current sx={{ color: "secondary.main" }} />
//             </IconButton>
//             <IconButton
//               href="https://www.instagram.com/daryanwing/"
//               sx={{
//                 borderRadius: "6px",
//                 backgroundColor: "secondary.background",
//                 "&:hover": {
//                   backgroundColor: "accent.background",
//                   "& svg": {
//                     color: "accent.main",
//                   },
//                 },
//               }}
//             >
//               <Instagram fill-current sx={{ color: "secondary.main" }} />
//             </IconButton>
//           </Stack>
//         </Box>
//         <div className="relative flex items-center justify-center w-80 h-80">
//           <img src={profile} className="w-auto h-60 md:h-80 rounded-full" />
//           <motion.svg
//             viewBox="0 0 500 500"
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[450px]"
//             fill="transparent"
//           >
//             <motion.circle
//               cx="250"
//               cy="250"
//               r="200"
//               stroke={theme.palette.primary.main}
//               strokeWidth="4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               initial={{ strokeDasharray: "24 10 0 0" }}
//               animate={{
//                 strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//           </motion.svg>
//         </div>
//       </Stack>
//     </div>
//   );
// }

// export default About;
