"use client";

import {
    Box,
    Flex,
    Text,
    Heading,
    HStack,
    Link,
    Separator
} from "@chakra-ui/react";
import {LuMail, LuGithub, LuMapPin} from "react-icons/lu";
import {FaLinkedin} from "react-icons/fa";

const contactData = [
    {
        label: "Email",
        value: "arturylab@gmail.com",
        href: "mailto:arturylab@gmail.com",
        icon: <LuMail size="24" color="#4DE3AF" />
    },
    {
        label: "LinkedIn",
        value: "arturylab",
        href: "https://www.linkedin.com/in/arturylab",
        icon: <FaLinkedin size="24" color="#4DE3AF" />
    },
    {
        label: "GitHub",
        value: "arturylab",
        href: "https://github.com/arturylab",
        icon: <LuGithub size="24" color="#4DE3AF" />
    }
]

const Contact = () => {
  return (
    <Box id="contact" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          mb="8"
          textAlign="center"
        >
        Contact Me
      </Heading>
      <Flex direction="column" align="center" alignItems="center">
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold" mb="4">
            {`Let's connect!`}
        </Text>
        <Text
            mb="8"
            maxW="800px" 
            textAlign="center" 
            fontSize={{ base: "md", md: "lg" }}
        >
            {`I'm`} always interested in discussing new opportunities, innovative projects, and creative collaborations.
            Whether you have a project in mind or just want to connect, feel free to reach out!
        </Text>
        <HStack>
            {contactData.map((contact, index) => (
                <Link
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                >
                <HStack mx="4" align="center">
                    {contact.icon}
                    <Text as="span" fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                    {contact.label}
                    </Text>
                </HStack>
                </Link>
            ))}
        </HStack>
        <HStack mt="8">
            <LuMapPin size="24" color="#4DE3AF" />
            <Text as="span" fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                Location:
            </Text>
        </HStack>
        <Text>
            Hermosillo, Sonora, Mexico.
        </Text>
      </Flex>
    </Box>
  );
};

export default Contact;
