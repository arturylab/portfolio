import {
    Box,
    Heading,
    Separator,
    Stack,
    HStack,
    Text,
    Link,
    Image,
    Flex,
    Badge,
} from "@chakra-ui/react";

import { FaCoins, FaAtom, FaKey } from "react-icons/fa";

const projectsData = [
    {
        name: "DumpMyCash",
        icon: <FaCoins color="#4DE3AF"/>,
        description: "Minimalist personal financial management web application. Track expenses, manage accounts, and organize transactions with a clean and intuitive interface.",
        stacks: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "PostgreSQL", "Oracle Cloud"],
        github: "https://github.com/arturylab/dumpmycash",
        liveDemo: "https://dumpmycash.demo-portal.eu/",
        src: "/dumpmycash.png"
    },
    {
        name: "ClusterWebLab",
        icon: <FaAtom color="#4DE3AF"/>,
        description: "Advanced molecular cluster analysis platform for visualizing, generating, and optimizing molecular structures with 3D visualization and computational chemistry tools.",
        stacks: ["Python", "Flask", "SciPy", "Numpy", "HTML", "CSS", "JavaScript", "3Dmol.js", "Oracle Cloud"],
        github: "https://github.com/arturylab/clusterWebLab",
        liveDemo: "https://clusterweblab.appx.ro/",
        src: "/clusterweblab.png"
    },
    {
        name: "Password Generator",
        icon: <FaKey color="#4DE3AF"/>,
        description: "A secure and customizable password generator. Generate secure passwords from 4 to 64 characters. Optimized for deployment on Vercel.",
        stacks: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
        github: "https://github.com/arturylab/password-generator",
        liveDemo: "https://password-generator-arturylab.vercel.app/",
        src: "/password-generator.png"
    }
]

const Projects = () => {
  return (
    <Box id="projects" w={{ base: "95%", md: "75%" }} mx="auto" py={12}>
      <Separator mb={8} />
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        mb={8}
        textAlign="center"
      >
        My Projects
      </Heading>

      <Stack>
        {projectsData.map((project) => (
          <Flex
            key={project.name}
            direction={{ base: "column", md: "row" }} // Responsive layout
            align="center"
            gap={6}
          >
            {/* Columna texto */}
            <Box flex="1">
              <Heading mb={4} fontWeight="bold">
                <HStack>
                  {project.icon}
                  {project.name}
                </HStack>
              </Heading>
              <Text mb={4}>{project.description}</Text>

              {/* Badges */}
              <Flex wrap="wrap" gap={2} mb={4}>
                {project.stacks.map((stack) => (
                  <Badge key={stack} colorScheme="teal" variant="subtle">
                    {stack}
                  </Badge>
                ))}
              </Flex>

              {/* Links */}
              <Flex gap={4} mt={2} wrap="wrap">
                <Link
                  variant="underline"
                  href={project.github}
                  color="#4DE3AF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  variant="underline"
                  href={project.liveDemo}
                  color="#4DE3AF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </Flex>
            </Box>

            {/* Columna imagen */}
            <Box
              flex="1"
              display="flex"
              justifyContent={{ base: "center", md: "right"}}
              mt={{ base: 6, md: 0 }}
            >
              <Image
                src={project.src}
                alt={project.name}
                border="1px solid #f4f4f5"
                borderRadius="md"
                width={{ base: "100%", sm: "80%", md: "300px", lg: "400px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};


export default Projects;