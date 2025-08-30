"use client"

import {
    Box,
    Flex,
    Separator,
    HStack,
    Text,
    Image,
    Link,
    Icon
} from "@chakra-ui/react";
import {LuMail, LuGithub} from "react-icons/lu";
import {FaLinkedin, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";

const socialMedia = [
    {
        name: "Email",
        icon: <LuMail />,
        link: "mailto:arturylab@example.com"
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://www.linkedin.com/in/arturylab"
    },
    {
        name: "GitHub",
        icon: <LuGithub />,
        link: "https://github.com/arturylab"
    },
    {
        name: "X",
        icon: <FaTwitter />,
        link: "https://x.com/arturylab"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com/arturylab"
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        link: "https://www.youtube.com/@arturylab"
    }
]

const Footer = () => {
    return (
        <Box as="footer">
            <Separator />
            <Flex
                mx="auto"
                justify="space-between"
                align="center"
                px="8"
                my={{ base: "8", md: "12" }}
            >
                <Box>
                    <Text 
                        className="flex items-center text-[#4DE3AF]" 
                        textStyle={{ base: "sm", md: "md" }} 
                        fontWeight="semibold"
                    >
                        <Image 
                            src="/logo.png" 
                            alt="arturylab logo" 
                            boxSize={{ base: "16px", md: "24px" }} 
                            mr="2" 
                        />
                        {"< arturylab />"}
                    </Text>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
                        &copy; {new Date().getFullYear()} arturylab. All rights reserved.
                    </Text>

                </Box>
                <Box>
                    <HStack >
                        {socialMedia.map((media) => (
                            <Link 
                                key={media.name} 
                                href={media.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Icon 
                                    as={media.icon.type} 
                                    mx="2"
                                    boxSize={{ base: "16px", md: "24px" }} 
                                />
                            </Link>
                        ))}
                    </HStack>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer;