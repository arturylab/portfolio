import { 
        Box,
        Separator, 
        Heading, 
        Text, 
        Timeline, 
        Highlight, 
        Link 
    } from "@chakra-ui/react"
import { LuPresentation, LuComputer } from "react-icons/lu"

const Data = [
  {
    id: 1,
    title: "University Level Teacher",
    company: "Universidad Estatal de Sonora (UES)",
    date: "August 2024 – December 2024",
    description:
      "As a higher level teacher at this university, I taught the subjects of Integral Calculus and Numerical Methods.",
    icon: <LuPresentation size="16" />,
    url: "https://ues.sonora.edu.mx/"
  },
  {
    id: 2,
    title: "High Level Teacher",
    company: "Colegio de Bachilleres del Estado de Sonora (COBACH)",
    date: "August 2017 – January 2024",
    description:
      "As a high school teacher at this institution, I taught the subjects of Computer Science, Mathematics, Differential and Integral Calculus, and Probability and Statistics.",
    icon: <LuPresentation size="16" />,
    url: "https://cobach.sonora.edu.mx/"
  },
  {
    id: 3,
    title: "University Level Teacher",
    company: "Instituto Tecnológico Superior de Cajeme (ITESCA)",
    date: "August 2019 – July 2020",
    description:
      "As a higher level teacher at this institution, I taught the subjects of Differential, Integral and Vector Calculus, Algorithms and Programming Languages, Properties of Materials and some subjects of Industrial Engineering.",
    icon: <LuPresentation size="16" />,
    url: "https://www.itesca.edu.mx/"
  },
  {
    id: 4,
    title: "Systems Manager",
    company: "Secretaría de Desarrollo Social (Government of Mexico)",
    date: "July 2013 – January 2018",
    description:
      "Management, maintenance and support of the program's information systems. I supervised the correct functioning of the technological infrastructure (hardware, software, networks and databases), providing technical support to users and resolving incidents. I managed technological resources and generated technical and analytical reports for decision making. My role was key in the protection of data and the fulfillment of the operational objectives of the program.",
    icon: <LuComputer size="16" />,
    url: "https://www.gob.mx/bienestar"
  },
]

const keywords = [
  "Computer Science",
  "Algorithms and Programming Languages",
  "program's information systems",
  "Numerical Methods",
  "hardware, software, networks and databases",
]

const Experience = () => {
  return (
    <Box id="experience" w={{ base: "95%", md: "75%" }} mx="auto" py="12">
      <Separator mb="8" />
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="bold"
        mb="8"
        textAlign="center"
      >
        Work Experience
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
                <Link 
                    variant="underline" 
                    href={data.url} target="_blank" 
                    rel="noopener noreferrer"
                >
                    {data.company}
                </Link>
              </Timeline.Description>
              <Timeline.Description>{data.date}</Timeline.Description>
              <Text>
                <Highlight
                  query={keywords}
                  styles={{ px: "0.5", bg: "rgba(77, 227, 175, 0.5)", rounded: "xs" }}
                >
                  {data.description}
                </Highlight>
              </Text>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  )
}

export default Experience
