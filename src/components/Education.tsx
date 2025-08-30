import { 
        Box,
        Separator, 
        Heading, 
        Text, 
        Timeline,
        Link 
    } from "@chakra-ui/react"
import { LuAtom, LuFactory, LuExternalLink } from "react-icons/lu"

const Data = [
  {
    title: "PhD in Nanotechnology",
    university: "Universidad de Sonora (UNISON)",
    date: "August 2022 – July 2026 (Expected)",
    description:
      "Postgraduate training in Nanotechnology and Materials Science and Engineering, focused on atomic structure, physical and chemical properties, and advanced methodologies for synthesis and characterization of nanostructured materials. Developed strong expertise in experimental, computational, and analytical approaches, as well as teaching and research skills aligned with academic and industrial needs.",
    icon: <LuAtom size="16" />,
    url: "https://www.unison.mx//"
  },
  {
    title: "Master's Degree in Nanotechnology",
    university: "Universidad de Sonora (UNISON)",
    date: "August 2020 – July 2022",
    description:
      "Postgraduate training in Nanotechnology and Materials Science and Engineering, focused on atomic structure, physical and chemical properties, and advanced methodologies for synthesis and characterization of nanostructured materials. Developed strong expertise in experimental, computational, and analytical approaches, as well as teaching and research skills aligned with academic and industrial needs.",
    icon: <LuAtom size="16" />,
    url: "https://www.unison.mx//"
  },
  {
    title: "Industrial and Systems Engineering",
    university: "Universidad de Sonora (UNISON)",
    date: "August 2000 – May 2005",
    description:
      "Design, implement, control, and improve systems composed of people, materials, information, equipment, energy, and capital within organizations that produce goods and services, while fostering a creative and entrepreneurial attitude, and maintaining respect for individuals, the environment, and society.",
    icon: <LuFactory size="16" />,
    url: "https://www.unison.mx//"
  },
]

const Education = () => {
  return (
    <Box id="education" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        mb="8"
        textAlign="center"
      >
        Education
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
                <Link 
                    href={data.url} target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LuExternalLink color="#4DE3AF" />
                    {data.university}
                </Link>
              </Timeline.Description>
              <Timeline.Description>{data.date}</Timeline.Description>
              <Text>
                  {data.description}
              </Text>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  )
}

export default Education
