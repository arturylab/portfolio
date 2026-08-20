"use client";

import { Box, Flex, Text, Heading, Link, Button } from "@chakra-ui/react";

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
      <Flex direction="column" textAlign="center" alignItems="center">
        <Text mb="4" fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium">
          HOLA, SOY
        </Text>
        <Heading as="h1" fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight="bold" mb="4">
          Arturo Rentería
        </Heading>

        <Text className="text-[#4DE3AF]" fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" mb="6">
          Especialista en Ciencia y Tecnología | Docente STEM | Desarrollo Web con Python
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }} maxW="850px" mb="8">
          Especialista en Ciencia y Tecnología, Ingeniero y Candidato a Doctor en Nanotecnología con cerca de una década de trayectoria docente en educación media superior y superior. Con sólida experiencia en pedagogía STEM, combino metodologías activas con el diseño de soluciones digitales interactivas para maximizar el aprendizaje. Mi perfil integra la investigación científica, la modelación computacional y el desarrollo web con Python, orientados a la creación de aplicaciones científicas y plataformas educativas. Destaco por mi liderazgo académico, comunicación asertiva, pensamiento analítico y capacidad para traducir problemas científicos y matemáticos complejos en herramientas tecnológicas funcionales y accesibles.
        </Text>

        <Link href="/cv_español.pdf" download>
          <Button>Descargar CV</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default HeroSection;
