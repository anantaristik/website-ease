import Head from 'next/head'
import NavBar from '../Navbar/navbar'
import { Box, Container, Show } from '@chakra-ui/react'
import { App as Footer}  from '../Footer/App'
import { App as Hero } from '../Hero/App'

const Main = ({children, router}) => {
    return (
        <Box as="main">
            <Head>
                <meta name='viewport' content='width=device-width, inital-scale=1' />
                <title>CreativeCode - Home</title>
            </Head>

            <NavBar path={router.asPath}></NavBar>
            <Hero></Hero>

            <Container  maxW="container.lg" pt={14}>
                {children}
            </Container>

            <Footer></Footer>
        </Box>
    )
}

export default Main