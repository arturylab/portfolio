"use client";

import { Box, SimpleGrid, Heading, Text, Link, HStack, Separator } from "@chakra-ui/react";
import { SiCoursera, SiGoogle } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import { FaAward } from "react-icons/fa6";

const certificacionesData = [
  {
    year: "2026",
    items: [
      "Curso Exploración para las Habilidades de la Docencia en Educación Media Superior (SEP)",
      "Curso Manejo y Dominio del Lenguaje y la Cultura Digital (SEP)",
    ],
  },
  {
    year: "2025",
    items: [
      {
        label: "Certificado Profesional de desarrollo de Microsoft Python (Coursera)",
        link: "https://www.coursera.org/account/accomplishments/specialization/UHMS62ASABS5",
      },
      {
        label: "Certificado Profesional de desarrollador back-end de Meta (Coursera)",
        link: "https://www.coursera.org/account/accomplishments/specialization/VWZB6K53NDAG",
      },
      {
        label: "Certificado Profesional de desarrollador front-end de Meta (Coursera)",
        link: "https://www.coursera.org/account/accomplishments/specialization/LAMF4YOHZ1CD",
      },
      "Curso-Taller Capacitación para usuarios finales de aplicativos científicos (UNISON)",
    ],
  },
  {
    year: "2023",
    items: [
      "Curso Evaluación formativa para los aprendizajes (SEP)",
      "Curso Introducción al Diseño Universal para el Aprendizaje (DUA) (SEP)",
      "Curso Pensamiento matemático en la formación humana en el siglo XXI (SEP)",
    ],
  },
];

const Certifications = () => {
  return (
    <Box id="certifications" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Certificaciones y cursos (últimos 4 años)
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        {certificacionesData.map((group) => (
          <Box key={group.year} m="2" borderRadius="lg" p="6" boxShadow="sm" _hover={{ shadow: "md" }} _dark={{ borderWidth: "1px" }}>
            <HStack mb="4" justify="center">
              <FaAward color="#4DE3AF" />
              <Heading as="h3" size="md">
                {group.year}
              </Heading>
            </HStack>
            <Box>
              {group.items.map((item, index) => {
                const content = typeof item === "string" ? item : item.label;
                const href = typeof item === "string" ? undefined : item.link;

                return href ? (
                  <Link key={`${group.year}-${content}`} href={href} target="_blank" rel="noopener noreferrer" display="block" mb="3" color="#4DE3AF">
                    <Text fontSize="sm">
                      • {content}
                    </Text>
                  </Link>
                ) : (
                  <Text key={`${group.year}-${index}-${content}`} fontSize="sm" mb="3">
                    • {content}
                  </Text>
                );
              })}
            </Box>
          </Box>
        ))}
      </SimpleGrid>

    </Box>
  );
};

export default Certifications;