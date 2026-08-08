import { Box, Separator, Heading, Text, Timeline, Link } from "@chakra-ui/react";
import { LuPresentation, LuComputer, LuExternalLink } from "react-icons/lu";

const Data = [
  {
    id: 1,
    title: "Profesor universitario",
    company: "Universidad del Valle de México (UVM)",
    date: "Febrero 2024 – Julio 2026",
    description:
      "Impartí, diseñé y evalué las asignaturas de Estadística Descriptiva, Métodos Numéricos, Sistemas Operativos y Modelación y Simulación de Sistemas.",
    icon: <LuPresentation size="16" />,
    url: "https://www.uvm.mx/",
  },
  {
    id: 2,
    title: "Profesor universitario",
    company: "Universidad Estatal de Sonora (UES)",
    date: "Agosto 2024 – Diciembre 2024",
    description:
      "Impartí y evalué Cálculo Integral y Métodos Numéricos en nivel universitario.",
    icon: <LuPresentation size="16" />,
    url: "https://www.ues.mx/",
  },
  {
    id: 3,
    title: "Profesor universitario",
    company: "Instituto Tecnológico Superior de Cajeme (ITESCA)",
    date: "Agosto 2019 – Julio 2020",
    description:
      "Impartí Cálculo Diferencial, Cálculo Integral, Cálculo Vectorial, Algoritmos y Lenguajes de Programación, Propiedades de Materiales, Ingeniería de Sistemas y Seguridad e Higiene Industrial.",
    icon: <LuPresentation size="16" />,
    url: "https://www.itesca.edu.mx/",
  },
  {
    id: 4,
    title: "Profesor de preparatoria",
    company: "Colegio de Bachilleres del Estado de Sonora (COBACH)",
    date: "Agosto 2017 – Enero 2024",
    description:
      "Impartí Informática, Geometría Analítica, Cálculo Diferencial e Integral y Probabilidad y Estadística. Además, fui encargado de Servicio Social de los estudiantes del plantel.",
    icon: <LuPresentation size="16" />,
    url: "https://cobach.sonora.edu.mx/",
  },
  {
    id: 5,
    title: "Responsable de Sistemas",
    company: "Secretaría de Desarrollo Social, PROSPERA",
    date: "Julio 2013 – Enero 2018",
    description:
      "Gestión, mantenimiento y soporte de los sistemas de información del programa. Supervisé el correcto funcionamiento de la infraestructura tecnológica (hardware, software, redes y bases de datos), brindando soporte técnico a los usuarios y resolviendo incidentes. Manejé recursos tecnológicos y generé informes técnicos y analíticos para la toma de decisiones. Mi rol fue clave en la protección de datos y el cumplimiento de los objetivos operativos del programa.",
    icon: <LuComputer size="16" />,
    url: "https://www.gob.mx/bienestar",
  },
];

const Experience = () => {
  return (
    <Box id="experience" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="bold" mb="8" textAlign="center">
        Experiencia
      </Heading>
      <Timeline.Root>
        {Data.map((data) => (
          <Timeline.Item key={data.id}>
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
                  {data.company}
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

export default Experience;
