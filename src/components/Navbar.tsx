'use client'

import { 
    Box, 
    Flex, 
    Spacer, 
    Text, 
    Image, 
    HStack, 
    Link, 
    Menu, 
    Portal, 
    Button, 
    IconButton,
    VStack,
    Drawer,
    useDisclosure
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { 
    LuHouse,
    LuBrainCircuit,
    LuFolderGit2,
    LuMail,
    LuChevronDown,
    LuBriefcaseBusiness,
    LuGraduationCap,
    LuFileBadge,
    LuGithub,
    LuMoon,
    LuSun,
    LuMenu,
    LuX
} from "react-icons/lu"

const Navbar = () => {
    const { open: isOpen, onOpen, onClose } = useDisclosure()
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
        
        setIsDark(shouldBeDark)
        document.documentElement.classList.toggle('dark', shouldBeDark)
    }, [])

    const toggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle('dark', newTheme)
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    }

    const GitHubLink = () => (
        <a href="https://github.com/arturylab" target="_blank" rel="noopener noreferrer">
            <LuGithub />
        </a>
    );

    const Links = [
        { 
            name: "Home", 
            icon: <LuHouse />, 
            onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) 
        },
        { 
            name: "Skills", 
            icon: <LuBrainCircuit />, 
            onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) 
        },
        { 
            name: "Projects", 
            icon: <LuFolderGit2 />, 
            onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) 
        },
        { 
            name: "Contact", 
            icon: <LuMail />, 
            onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) 
        },
    ];

    const MenuContent = [
        { 
            name: "Experience", 
            icon: <LuBriefcaseBusiness />, 
            onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) 
        },
        { 
            name: "Education", 
            icon: <LuGraduationCap />, 
            onClick: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }) 
        },
        { 
            name: "Certifications", 
            icon: <LuFileBadge />, 
            onClick: () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' }) 
        },
    ];

    const MobileNavLink = ({ link, onClose }: { 
        link: { name: string; icon: React.ReactElement; onClick: () => void }, 
        onClose: () => void 
    }) => (
        <Button 
            onClick={() => {
                onClose();
                setTimeout(() => link.onClick(), 50);
            }}
            variant="ghost"
            w="full"
            p="3"
            borderRadius="md"
            _hover={{ bg: "gray.100", textDecoration: "none", _dark: { bg: "gray.900" } }}
            display="flex"
            alignItems="center"
            justifyContent={"flex-start"}
            gap="3"
        >
            {link.icon} 
            <Text>{link.name}</Text>
        </Button>
    );

    
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <>
            <Box 
                as="nav" 
                py="4" 
                position="sticky" 
                top="0" 
                zIndex="1000"
                boxShadow={scrolled ? "xs" : "none"} 
                transition="box-shadow 0.3s"
                bg={scrolled ? (isDark ? "black" : "white") : "transparent"}
            >
                <Flex 

                    mx="auto" 
                    align="center"
                    px="8"
                >
                    {/* Logo */}
                    <Link href="/" _hover={{ textDecoration: "none" }}>
                        <Text 
                            className="flex justify-between items-center text-[#4DE3AF]" 
                            textStyle={{ base: "md", md: "lg" }} 
                            fontWeight="semibold"
                        >
                            <Image 
                                src="/logo.png" 
                                alt="arturylab logo" 
                                boxSize={{ base: "28px", md: "32px" }} 
                                mr="2" 
                            />
                            {"< arturylab />"}
                        </Text>
                    </Link>
                    
                    <Spacer />

                    {/* Desktop Navigation */}
                    <HStack gap="6" display={{ base: "none", lg: "flex" }}>
                        {Links.map((link) => (
                            <Button 
                                key={link.name} 
                                onClick={link.onClick}
                                variant={"ghost"}
                                display="flex"
                                alignItems="center"
                                gap="2"
                                px="3"
                                py="2"
                                borderRadius="md"
                                _hover={{ bg: "gray.100", textDecoration: "none", _dark: { bg: "gray.900" } }}
                                transition="all 0.2s"
                            >
                                {link.icon} 
                                <Text display={{ base: "none", xl: "block" }}>{link.name}</Text>
                            </Button>
                        ))}
                        
                        <Menu.Root>
                            <Menu.Trigger className="flex justify-between items-center" asChild>
                                <Button variant="ghost" size={{ base: "sm", md: "md" }}>
                                    <LuChevronDown />
                                    <Text display={{ base: "none", xl: "block" }}>
                                        More
                                    </Text>
                                </Button>
                            </Menu.Trigger>
                            <Portal>
                                <Menu.Positioner>
                                    <Menu.Content>
                                        {MenuContent.map((item) => (
                                        <Menu.Item key={item.name} value={item.name} asChild>
                                            <Button
                                                onClick={item.onClick}
                                                variant="ghost"
                                                display="flex"
                                                alignItems="center"
                                                gap="2"
                                                w="full"
                                                justifyContent="flex-start"
                                            >
                                                {item.icon}
                                                {item.name}
                                            </Button>
                                        </Menu.Item>
                                        ))}
                                    </Menu.Content>
                                </Menu.Positioner>
                            </Portal>
                        </Menu.Root>
                    </HStack>

                    {/* Desktop Action Buttons */}
                    <HStack ml="4" gap="2" display={{ base: "none", md: "flex" }}>
                        <IconButton 
                            aria-label="GitHub" 
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                        >
                            <GitHubLink />
                        </IconButton>
                        <IconButton 
                            aria-label="Toggle Dark Mode" 
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            onClick={toggleTheme}
                        >
                            {isDark ? <LuMoon /> : <LuSun />}
                        </IconButton>
                    </HStack>

                    {/* Mobile Menu Button */}
                    <HStack gap="2" display={{ base: "flex", lg: "none" }}>
                        <IconButton
                            aria-label="Open menu"
                            variant="outline"
                            size="md"
                            ml="2"
                            onClick={onOpen}
                        >
                            <LuMenu />
                        </IconButton>
                    </HStack>
                </Flex>
            </Box>

            {/* Mobile Drawer */}
            <Drawer.Root open={isOpen} onOpenChange={({ open }) => open ? onOpen() : onClose()} placement="end">
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                        <Drawer.Content bg="white" _dark={{ bg: "black" }}>
                            <Drawer.Header>
                                <Drawer.Title>
                                    <Text 
                                        className="flex justify-between items-center text-[#4DE3AF]" 
                                        textStyle="lg" 
                                        fontWeight="semibold"
                                    >
                                        <Image 
                                            src="/logo.png" 
                                            alt="arturylab logo" 
                                            boxSize="28px" 
                                            mr="2" 
                                        />
                                        {"< arturylab />"}
                                    </Text>
                                </Drawer.Title>
                                <Drawer.CloseTrigger asChild>
                                    <IconButton aria-label="Close menu" variant="ghost" size="sm">
                                        <LuX />
                                    </IconButton>
                                </Drawer.CloseTrigger>
                            </Drawer.Header>
                            
                            <Drawer.Body>
                                <VStack gap="2" align="stretch">
                                    {Links.map((link) => (
                                        <MobileNavLink 
                                            key={link.name} 
                                            link={link} 
                                            onClose={onClose}
                                        />
                                    ))}
                                    
                                    <Box py="2">
                                        <Text fontSize="sm" fontWeight="semibold" color="gray.500" px="3" mb="2">
                                            More
                                        </Text>
                                        <VStack gap="1" align="stretch">
                                            {MenuContent.map((item) => (
                                                <MobileNavLink 
                                                    key={item.name} 
                                                    link={item} 
                                                    onClose={onClose}
                                                />
                                            ))}
                                        </VStack>
                                    </Box>

                                    <Box pt="4" borderTop="1px" borderColor="gray.200" _dark={{ borderColor: "gray.600" }} display={{ base: "block", md: "none" }}>
                                        <HStack justify="center" gap="4">
                                            <IconButton 
                                                aria-label="GitHub" 
                                                variant="outline"
                                                size="md"
                                            >
                                                <GitHubLink />
                                            </IconButton>
                                            <IconButton 
                                                aria-label="Toggle Dark Mode" 
                                                variant="outline"
                                                size="md"
                                                onClick={toggleTheme}
                                            >
                                                {isDark ? <LuMoon /> : <LuSun />}
                                            </IconButton>
                                        </HStack>
                                    </Box>
                                </VStack>
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </>
    )
}

export default Navbar