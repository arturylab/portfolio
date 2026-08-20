import {
  Box,
  Heading,
  Separator,
  Stack,
  HStack,
  Text,
  Link,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FaCoins, FaAtom, FaKey, FaPuzzlePiece } from "react-icons/fa";

const projectsData = [
  {
    name: "ClusterWebLab",
    icon: <FaAtom color="#4DE3AF" />,
    description:
      "Plataforma web desarrollada para visualizar nanoestructuras y apoyar la investigación en nanotecnología mediante herramientas computacionales.",
    stacks: ["Python", "Flask", "SciPy", "NumPy", "HTML", "CSS", "JavaScript", "Oracle Cloud"],
    github: "https://github.com/arturylab/clusterWebLab/",
    liveDemo: "https://clusterweblab.arturylab.dev/",
  },
  {
    name: "Password Generator",
    icon: <FaKey color="#4DE3AF" />,
    description:
      "Generador de contraseñas seguro y personalizable, pensado para uso práctico y despliegue web moderno.",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/arturylab/password-generator/",
    liveDemo: "https://password-generator-app.arturylab.dev/",
  },
  {
    name: "DumpMyCash",
    icon: <FaCoins color="#4DE3AF" />,
    description:
      "Plataforma sencilla y clara para llevar un seguimiento de finanzas personales con una interfaz accesible y eficiente.",
    stacks: ["Python", "Flask", "HTML", "CSS", "JavaScript", "PostgreSQL", "Oracle Cloud"],
    github: "https://github.com/arturylab/dumpmycash/",
    liveDemo: "https://dumpmycash.arturylab.dev/",
  },
  {
    name: "Sudoku Web App",
    icon: <FaPuzzlePiece color="#4DE3AF" />,
    description:
      "Aplicación web de Sudoku con diseño tipo videojuego, responsive y visualmente atractiva para una experiencia de usuario moderna.",
    stacks: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    github: "https://github.com/arturylab/sudoku-webapp/",
    liveDemo: "https://sudoku.arturylab.dev/",
  },
];

const Projects = () => {
  return (
    <Box id="projects" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Proyectos
      </Heading>

      <Stack>
        {projectsData.map((project) => (
          <Flex key={project.name} direction={{ base: "column", md: "row" }} align="flex-start" gap="6" borderRadius="lg" p="6" boxShadow="sm" _dark={{ borderWidth: "1px" }}>
            <Box flex="1">
              <Heading mb="4" fontWeight="bold">
                <HStack>
                  {project.icon}
                  {project.name}
                </HStack>
              </Heading>
              <Text mb="4">{project.description}</Text>

              <Flex wrap="wrap" gap="2" mb="4">
                {project.stacks.map((stack) => (
                  <Badge key={stack} colorScheme="teal" variant="subtle">
                    {stack}
                  </Badge>
                ))}
              </Flex>

              <Flex gap="4" mt="2" wrap="wrap">
                <Link variant="underline" href={project.github} color="#4DE3AF" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
                <Link variant="underline" href={project.liveDemo} color="#4DE3AF" target="_blank" rel="noopener noreferrer">
                  Demo
                </Link>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
