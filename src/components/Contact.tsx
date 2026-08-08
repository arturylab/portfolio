"use client";

import { Box, Flex, Text, Heading, HStack, Link, Separator } from "@chakra-ui/react";
import { LuMail, LuGithub, LuMapPin, LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";

const contactData = [
  {
    label: "Email",
    href: "mailto:arturylab@gmail.com",
    icon: <LuMail size="24" color="#4DE3AF" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arturylab/",
    icon: <FaLinkedin size="24" color="#4DE3AF" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/arturylab/",
    icon: <LuGithub size="24" color="#4DE3AF" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/turinclases/",
    icon: <LuInstagram size="24" color="#4DE3AF" />,
  },
];

const Contact = () => {
  return (
    <Box id="contact" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Contacto
      </Heading>
      <Flex direction="column" align="center" alignItems="center">
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="semibold" mb="4">
          Conectemos
        </Text>
        <Text mb="8" maxW="800px" textAlign="center" fontSize={{ base: "md", md: "lg" }}>
          Estoy abierto a oportunidades en docencia, investigación, modelación computacional, educación STEM y desarrollo de soluciones digitales con impacto académico y social.
        </Text>
        <HStack wrap="wrap" justify="center">
          {contactData.map((contact, index) => (
            <Link key={index} href={contact.href} target="_blank" rel="noopener noreferrer">
              <HStack mx="4" my="2" align="center">
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
            Ubicación:
          </Text>
        </HStack>
        <Text>Hermosillo, Sonora, México.</Text>
      </Flex>
    </Box>
  );
};

export default Contact;
