"use client"

import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Link,
  HStack,
  Separator
} from "@chakra-ui/react";
import { FaMicrosoft, FaMeta } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";

const certificacionsData = [
    {
        title: "Microsoft Python Development Professional Certificate",
        school: "Coursera",
        description: "Completed 6 courses successfully",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/UHMS62ASABS5",
        icon: <FaMicrosoft size="32" color="#4DE3AF" />
    },
    {
        title: "Meta Back-End Developer Professional Certificate",
        school: "Coursera",
        description: "Completed 9 courses successfully",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/VWZB6K53NDAG",
        icon: <FaMeta size="32" color="#4DE3AF" />
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        school: "Coursera",
        description: "Completed 9 courses successfully",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/LAMF4YOHZ1CD",
        icon: <FaMeta size="32" color="#4DE3AF" />
    },
]

const Certifications = () => {
  return (
    <Box id="certifications" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb="8"
          textAlign="center"
        >
        Certifications
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {certificacionsData.map((certification) => (
          <Box
            m="2"
            key={certification.title}
            borderRadius="lg"
            p="6"
            boxShadow="sm"
            _hover={{ shadow: "md" }}
            _dark={{ borderWidth: "1px"}}
          >
            <HStack mb="4" justify="center">
                {certification.icon}
              <Heading as="h3" size="md">
                {certification.title}
              </Heading>
            </HStack>
            <HStack>
                <SiCoursera color="#0156D2"/>
                <Text color="gray.500" fontSize="sm">
                    {certification.school}
                </Text>
            </HStack>
            <Text color="#4DE3AF" fontSize="sm" fontStyle="italic" mt="4">
                {certification.description}
            </Text>
            <Link variant="underline" href={certification.link} target="_blank" rel="noopener noreferrer" mt="4">
            <LuExternalLink color="#4DE3AF" />
                View Certificate
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Certifications;