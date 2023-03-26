import Logo from "./logo";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    useColorMode,
    Button,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon} from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react"

const LinkItem = ({href, path, children}) => {
    const active = path == href
    const inactiveColor = useColorModeValue('gray.700', 'whiteAlpha.700')
    return (
        <Link _hover={{
            color: "whiteAlpha.900",
          }} href={href} p={2} color={active ? 'whiteAlpha.900' : inactiveColor} onMouse>
            {children}
        </Link>
    )
}

const NavBar = props => {
    const {path} = props
    const { toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box position='fixed' as="nav" w='100%' bg={useColorModeValue('#ffffff40', '#20202380') }
        style={{backdropFilter: 'blur(10px)'}} zIndex={1} {...props} mt='md' color='gray.300'>
            <Container isFullWidth={true} display='flex' p={2} maxW="container.lg" wrap='wrap' justify='space-between'>
                <Flex align='center' mr={5}>
                    <Logo></Logo>
                </Flex>
                <Box flex={1} align='right' ml={2} display={{base:'none', md:'inline-block'}}>
                    <Stack 
                    direction={{base: 'column', md: 'row'}} 
                    display={{base: 'none', md: 'block'}} 
                    width={{base: 'full', md: 'full'}}
                    flexGrow={1}
                    mt={{base: 4, nmd: 0}}
                    >
                        <LinkItem href='/about' path={path}>About Us</LinkItem>
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                variant="ghost"
                                mx={1}
                                py={[1, 2, 2]}
                                px={4}
                                borderRadius={5}
                                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                aria-label="Courses"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                Services {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </MenuButton>
                            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                <MenuItem><Link href='/services/creative'>Creative</Link></MenuItem>
                                <MenuItem><Link href='/services/studio'>Studio</Link></MenuItem>
                                <MenuItem><Link href='/services/zoom'>Zoom</Link></MenuItem>
                            </MenuList>
                        </Menu>
                        <LinkItem href='/about' path={path}>Projects</LinkItem>
                        <LinkItem href='/contact' path={path}>Contact Us</LinkItem>
                    </Stack>
                </Box>
                <Box flex={1} align='right' ml={2} display={{base:'inline-block', md:'none'}}>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant='outline' aria-label="Options" />
                        <MenuList>
                            <MenuItem><Link href='/works'>About Us</Link></MenuItem>
                            <Menu isOpen={isOpen}>
                                <MenuButton
                                    variant="ghost"
                                    mx={1}
                                    py={[1, 2, 2]}
                                    px={2}
                                    borderRadius={5}
                                    _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                    aria-label="Courses"
                                    fontWeight="normal"
                                    onMouseEnter={onOpen}
                                    onMouseLeave={onClose}
                                    float='left'
                                >
                                    Services {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </MenuButton>
                                <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                                    <MenuItem><Link href='/services/creative'>Creative</Link></MenuItem>
                                    <MenuItem><Link href='/services/studio'>Studio</Link></MenuItem>
                                    <MenuItem><Link href='/services/zoom'>Zoom</Link></MenuItem>
                                </MenuList>
                            </Menu>
                            <MenuItem><Link href='/about'>Projects</Link></MenuItem>
                            <MenuItem><Link href='/contact'>Contact Us</Link></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar