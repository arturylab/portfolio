import { Box, Separator, Heading, Text, Timeline, Link } from "@chakra-ui/react";
import { LuAtom, LuFactory, LuExternalLink } from "react-icons/lu";

const Data = [
  {
    title: "Doctorado en Nanotecnología (Candidato a doctor)",
    university: "Universidad de Sonora",
    date: "Agosto 2022 – Julio 2026",
    description:
      "Tesis: Propiedades estructurales, energéticas, magnéticas y electrónicas en cúmulos de nanoaleaciones binarias FenCo38-n, FenNi38-n y ConNi38-n (n <= 38) con estudios de la Teoría del Funcional de la Densidad.",
    icon: <LuAtom size="16" />,
    url: "https://www.unison.mx/",
  },
  {
    title: "Maestría en Nanotecnología",
    university: "Universidad de Sonora",
    date: "Agosto 2020 – Julio 2022",
    description:
      "Tesis: Análisis de la superficie de energía potencial y búsqueda de estados de transición en grupos de átomos de nanoaleaciones bimetálicas Pd12Pt1.",
    icon: <LuAtom size="16" />,
    url: "https://www.unison.mx/",
  },
  {
    title: "Ingeniería Industrial y de Sistemas",
    university: "Universidad de Sonora",
    date: "Agosto 2000 – Mayo 2005",
    description:
      "Formación en sistemas, mejora de procesos, análisis organizacional y desarrollo de soluciones técnicas orientadas a la industria y a la sociedad.",
    icon: <LuFactory size="16" />,
    url: "https://www.unison.mx/",
  },
];

const Education = () => {
  return (
    <Box id="education" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Formación académica
      </Heading>
      <Timeline.Root>
        {Data.map((data) => (
          <Timeline.Item key={data.title}>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator boxSize="8" bg="#4DE3AF">
                {data.icon}
              </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>
                <Heading mb="4" fontWeight="bold">
                  {data.title}
                </Heading>
              </Timeline.Title>
              <Timeline.Description fontSize="md">
                <Link href={data.url} target="_blank" rel="noopener noreferrer">
                  <LuExternalLink color="#4DE3AF" />
                  {data.university}
                </Link>
              </Timeline.Description>
              <Timeline.Description>{data.date}</Timeline.Description>
              <Text>{data.description}</Text>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  );
};

export default Education;
