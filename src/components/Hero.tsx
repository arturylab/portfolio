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
          {`HOLA, SOY`}
        </Text>
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          mb="4"
        >
          Emanuel Arturo Rentería del Real
        </Heading>

        <Text
          className="text-[#4DE3AF]"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="medium"
          mb="6"
        >
          Ciencias e Ingeniería (STEM) | Gestión y Operaciones (Management) | Tecnología y Desarrollo (Sistemas)
        </Text>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          maxW="800px"
          mb="8"
        >
          {`Perfil transdisciplinario con sólida base en Ingeniería Industrial y de Sistemas, actualmente 
          Candidato a Doctor en Nanotecnología. Mi trayectoria integra tres pilares estratégicos: la gestión de 
          operaciones y liderazgo de equipos en entornos comerciales y administrativos; el desarrollo de software 
          Full Stack con enfoque en computación científica y plataformas escalables (Next.js, Django, Python); 
          y la docencia de nivel superior en áreas STEM, especializándome en la simplificación de conceptos 
          complejos como Matemáticas, Ciencias de la Computación e Ingeniería. Busco aportar una visión analítica 
          y tecnológica para optimizar procesos, liderar proyectos de innovación digital o formar talento técnico 
          especializado. Mi enfoque se centra en la convergencia de la ciencia, la eficiencia operativa y el 
          desarrollo de herramientas tecnológicas que resuelvan retos reales del sector industrial y académico.`}
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
