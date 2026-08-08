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
          Emanuel Arturo Rentería del Real
        </Heading>

        <Text className="text-[#4DE3AF]" fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" mb="6">
          Profesor universitario | Investigador doctoral en Nanotecnología
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }} maxW="850px" mb="8">
          Profesor universitario e investigador doctoral en Nanotecnología con cerca de nueve años de experiencia en educación media superior y superior. He impartido asignaturas de matemáticas, programación, estadística, simulación, sistemas operativos e ingeniería, combinando metodologías activas con el uso de tecnologías digitales para facilitar el aprendizaje. Mi experiencia integra la docencia, la investigación científica y el desarrollo de software, con énfasis en modelación computacional, análisis de datos, programación en Python y desarrollo de aplicaciones web para fines educativos y científicos. Me caracterizo por la comunicación efectiva, el liderazgo académico, la resolución de problemas y el diseño de estrategias didácticas orientadas al aprendizaje significativo.
        </Text>

        <Link href="/cv_español.pdf" download>
          <Button>Descargar CV</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default HeroSection;
