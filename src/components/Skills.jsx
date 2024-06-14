import { IconButton, Tooltip, useTheme } from "@mui/material";
import React from "react";
import Title from "./Title";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaNodeJs,
  FaLinux,
  FaAtlassian,
  FaJava,
} from "react-icons/fa";
import { SiJunit5 } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";

const Skills = () => {
  const theme = useTheme();

  const languages = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3 },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: BsFiletypeSql },
    { name: "PHP", icon: FaPhp },
  ];
  const technologies = [
    { name: "ReactJS", icon: FaReact },
    { name: "Git", icon: FaGitAlt },
    { name: "JUnit", icon: SiJunit5 },
    { name: "NodeJS", icon: FaNodeJs },
    { name: "Linux", icon: FaLinux },
    { name: "Atlassian", icon: FaAtlassian },
  ];

  return (
    <div className="flex flex-col mb-10 mx-auto mt-[100px] p-8">
      <Title>Skills</Title>
      <div className="flex justify-center mt-12">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px]">
          {languages.map((skill, index) => (
            <div key={index}>
              <Tooltip title={skill.name} placement="top" enterDelay={100}>
                <IconButton
                  sx={{
                    borderRadius: "6px",
                    border: `2px solid ${theme.palette.primary.main}`,
                    p: "30px",
                    "&:hover": {
                      backgroundColor: theme.palette.accent.background,
                    },
                    "&:hover svg": {
                      color: `${theme.palette.accent.main} !important`,
                    },
                  }}
                >
                  <skill.icon size={50} color={theme.palette.primary.main} />
                </IconButton>
              </Tooltip>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-center mt-5">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[20px]">
          {technologies.map((skill, index) => (
            <div key={index}>
              <Tooltip title={skill.name} placement="top" enterDelay={100}>
                <IconButton
                  sx={{
                    borderRadius: "6px",
                    border: `2px solid ${theme.palette.primary.main}`,
                    p: "30px",
                    "&:hover": {
                      backgroundColor: theme.palette.accent.background,
                    },
                    "&:hover svg": {
                      color: `${theme.palette.accent.main} !important`,
                    },
                  }}
                >
                  <skill.icon size={50} color={theme.palette.primary.main} />
                </IconButton>
              </Tooltip>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
