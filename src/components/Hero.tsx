"use client";

import {
  Box,
  Flex,
  Text,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box
      id="home"
      w={{ base: "95%", md: "75%" }}
      mx="auto"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 0 }}
    >
      <Flex
        direction="column"
        textAlign="center"
        alignItems="center"
      >
        <Text
          mb="4"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
        >
          {`HELLO, I'M`}
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          mb="4"
        >
          Arturo Rentería
        </Heading>

        <Text
          className="text-[#4DE3AF]"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          mb="6"
        >
          Software Developer | Scientific Researcher
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          maxW="800px"
          mb="8"
        >
          {`I'm Python, Full-stack developer and scientific researcher specializing in Next.js and Django, 
          with expertise in cloud-based applications, databases, and high-performance computing (HPC). 
          Pursuing a Ph.D. in Nanotechnology focused on computational chemistry and large-scale simulations, 
          I build scalable scientific platforms that integrate modern frontend experiences with robust backend 
          architectures. As a STEM educator with years of teaching experience at high school and university 
          levels, I am passionate about mentoring, simplifying complex concepts, and creating innovative 
          solutions that bridge science and software development.`}
        </Text>

        <Link href="/cv_english.pdf" download>
          <Button>
            My Resume
          </Button>
        </Link>

      </Flex>
    </Box>
  );
};

export default HeroSection;
