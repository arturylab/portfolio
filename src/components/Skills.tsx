"use client";

import {
  Box,
  SimpleGrid,
  Heading,
  Wrap, WrapItem,
  Text,
  HStack,
  Icon,
  Separator
} from "@chakra-ui/react";
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiLinux,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiOracle,
  SiNotion,
  SiSlack,
  SiOllama,
  SiFigma,
} from "react-icons/si";
import { FaBrain, FaServer, FaCloud, FaDatabase, FaCode, FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Data Science & Machine Learning",
    icon: FaBrain,
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "NumPy", icon: SiNumpy },
      { name: "pandas", icon: SiPandas },
      { name: "Matplotlib", icon: FaBrain },
      { name: "SciPy", icon: SiPython },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Ollama", icon: SiOllama },
    ],
  },
  {
    category: "Full Stack Development",
    icon: FaCode,
    technologies: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    category: "Database Management",
    icon: FaDatabase,
    technologies: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: FaCloud,
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Azure", icon: FaCloud },
      { name: "Oracle Cloud", icon: SiOracle },
      { name: "SLURM", icon: FaServer },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    category: "Work Tools",
    icon: FaTools,
    technologies: [
      { name: "Notion", icon: SiNotion },
      { name: "Slack", icon: SiSlack },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

const SkillsCards = () => {
  return (
    <Box id="skills" w={{ base: "95%", md: "75%" }} mx="auto" py={12}>
      <Separator mb={8} />
      <Heading
          as="h1"
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb={8}
          textAlign={"center"}
        >
        Tech Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {skillsData.map((category) => (
          <Box
            m={2}
            key={category.category}
            borderRadius="lg"
            p={6}
            boxShadow="sm"
            _hover={{ shadow: "md" }}
            _dark={{ borderWidth: "1px"}}
          >
            <HStack mb={4} justify={"center"}>
              <Icon as={category.icon} boxSize={6} color="#4DE3AF" />
              <Heading as="h3" size="md">
                {category.category}
              </Heading>
            </HStack>
            <Wrap justify={"center"}>
                {category.technologies.map((tech) => (
                <WrapItem key={tech.name}>
                <HStack>
                    <Icon as={tech.icon} boxSize={5} color="gray.500" />
                    <Text fontSize="sm">{tech.name}</Text>
                </HStack>
                </WrapItem>
                ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default SkillsCards;
