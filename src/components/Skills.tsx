"use client";

import {
  Box,
  SimpleGrid,
  Heading,
  Wrap,
  WrapItem,
  Text,
  HStack,
  Icon,
  Separator,
} from "@chakra-ui/react";
import {
  SiPython,
  SiLinux,
  SiGit,
  SiGoogle,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiNumpy,
} from "react-icons/si";
import {
  FaBrain,
  FaChalkboardTeacher,
  FaBookReader,
  FaAtom,
  FaChartLine,
  FaDatabase,
  FaCode,
  FaServer,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Docencia",
    icon: FaChalkboardTeacher,
    technologies: [
      { name: "Planeación didáctica", icon: FaBookReader },
      { name: "Evaluación por competencias", icon: FaChartLine },
      { name: "Educación presencial", icon: FaBrain },
      { name: "Educación virtual", icon: FaCode },
      { name: "Diseño de recursos", icon: FaBookReader },
    ],
  },
  {
    category: "Investigación",
    icon: FaBrain,
    technologies: [
      { name: "Investigación científica", icon: FaAtom },
      { name: "Química computacional", icon: FaAtom },
      { name: "Análisis estadístico", icon: FaChartLine },
      { name: "Modelación computacional", icon: FaServer },
      { name: "Nanotecnología", icon: FaDatabase },
    ],
  },
  {
    category: "Tecnologías",
    icon: FaCode,
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Linux", icon: SiLinux },
      { name: "Git", icon: SiGit },
      { name: "HPC", icon: FaServer },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
];

const SkillsCards = () => {
  return (
    <Box id="skills" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Habilidades
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {skillsData.map((category) => (
          <Box key={category.category} m="2" borderRadius="lg" p="6" boxShadow="sm" _hover={{ shadow: "md" }} _dark={{ borderWidth: "1px" }}>
            <HStack mb="4" justify="center">
              <Icon as={category.icon} boxSize="6" color="#4DE3AF" />
              <Heading as="h3" size="md">
                {category.category}
              </Heading>
            </HStack>
            <Wrap justify="center">
              {category.technologies.map((tech) => (
                <WrapItem key={tech.name}>
                  <HStack>
                    <Icon as={tech.icon} boxSize="5" color="gray.500" />
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
