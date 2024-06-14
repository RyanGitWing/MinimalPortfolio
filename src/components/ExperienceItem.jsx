// import React from "react";
// import { useTheme, Typography } from "@mui/material";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { Work, School } from "@mui/icons-material";

// function ExperienceItem({ json1, json2 }) {
//   const theme = useTheme();

//   return (
//     <div>
//       <VerticalTimeline lineColor={theme.palette.primary.main}>
//         {json1.map((item, index) => (
//           <VerticalTimelineElement
//             key={`json1_${index}`}
//             className="vertical-timeline-element--education"
//             iconStyle={{
//               background: theme.palette.primary.background,
//               color: theme.palette.primary.main,
//               boxShadow: `0 0 0 4px ${theme.palette.primary.main}, inset 0 2px 0 rgba(255,0,0,.08), 0 3px 0 4px rgba(255,0,0,.05)`,
//             }}
//             style={{ marginBottom: "25px", marginTop: "25px" }}
//             contentStyle={{
//               background: theme.palette.primary.main,
//               color: theme.palette.primary.background,
//               borderRadius: "6px",
//             }}
//             contentArrowStyle={{
//               borderRight: `7px solid ${theme.palette.primary.main}`,
//             }}
//             icon={item.type === "work" ? <Work /> : <School />}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               {item.title}
//             </Typography>
//             <Typography variant="h7">{item.company}</Typography>
//             <Typography>{item.year}</Typography>
//           </VerticalTimelineElement>
//         ))}

//         {json2.map((item, index) => (
//           <VerticalTimelineElement
//             key={`json2_${index}`}
//             className="vertical-timeline-element--education"
//             iconStyle={{
//               background: theme.palette.primary.background,
//               color: theme.palette.primary.main,
//               boxShadow: `0 0 0 4px ${theme.palette.primary.main}, inset 0 2px 0 rgba(255,0,0,.08), 0 3px 0 4px rgba(255,0,0,.05)`,
//             }}
//             style={{ marginBottom: "25px", marginTop: "25px" }}
//             contentStyle={{
//               background: theme.palette.primary.main,
//               color: theme.palette.primary.background,
//             }}
//             contentArrowStyle={{
//               borderRight: `7px solid ${theme.palette.primary.main}`,
//             }}
//             icon={item.type === "work" ? <Work /> : <School />}
//           >
//             <Typography variant="h6" fontWeight="bold">
//               {item.title}
//             </Typography>
//             <Typography variant="h7">{item.company}</Typography>
//             <Typography>{item.year}</Typography>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </div>
//   );
// }
// export default ExperienceItem;
