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
  FaBrain,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCode,
  FaTools,
  FaRegChartBar,
  FaFlask,
  FaAtom,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

const skillsData = [
    {
      category: "Full Stack Development",
      icon: FaCode,
      technologies: [
        { name: "HTML", icon: FaCode },
        { name: "CSS", icon: FaCode },
        { name: "JavaScript", icon: FaCode },
        { name: "TypeScript", icon: FaCode },
        { name: "React", icon: FaCode },
        { name: "Next.js", icon: FaCode },
        { name: "Django", icon: FaCode },
        { name: "Flask", icon: FaFlask },
      ],
    },
  {
    category: "Data Science & Machine Learning",
    icon: FaBrain,
    technologies: [
      { name: "Python", icon: FaCode },
      { name: "NumPy", icon: FaRegChartBar },
      { name: "pandas", icon: FaRegChartBar },
      { name: "Matplotlib", icon: FaRegChartBar },
      { name: "SciPy", icon: FaRegChartBar },
      { name: "Scikit-learn", icon: FaRegChartBar },
      { name: "Ollama", icon: FaBrain },
    ],
  },
  {
    category: "Database Management",
    icon: FaDatabase,
    technologies: [
      { name: "MySQL", icon: FaDatabase },
      { name: "PostgreSQL", icon: FaDatabase },
      { name: "SQLite", icon: FaDatabase },
    ],
  },
  {
    category: "DevOps & Cloud",
    icon: FaCloud,
    technologies: [
      { name: "Git", icon: FaTools },
      { name: "GitHub", icon: FaTools },
      { name: "Docker", icon: FaTools },
      { name: "Azure", icon: VscAzure },
      { name: "Oracle Cloud", icon: FaCloud },
      { name: "Linux", icon: FaCode },
    ],
  },
  {
    category: "Work Tools",
    icon: FaTools,
    technologies: [
      { name: "Notion", icon: FaTools },
      { name: "Slack", icon: FaTools },
      { name: "Figma", icon: FaTools },
    ],
  },
  {
    category: "Computational Chemistry",
    icon: FaFlask,
    technologies: [
      { name: "Orca", icon: FaAtom },
      { name: "Gaussian", icon: FaAtom },
      { name: "SLURM", icon: FaServer },
      { name: "Avogadro", icon: FaAtom },
    ],
  }
];

const SkillsCards = () => {
  return (
    <Box id="skills" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb="8"
          textAlign="center"
        >
        Tech Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {skillsData.map((category) => (
          <Box
            m="2"
            key={category.category}
            borderRadius="lg"
            p="6"
            boxShadow="sm"
            _hover={{ shadow: "md" }}
            _dark={{ borderWidth: "1px"}}
          >
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
                        <Text fontSize="sm">
                            {tech.name}
                        </Text>
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
