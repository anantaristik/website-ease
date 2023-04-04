import { Box, Heading, Center, Text, Container } from "@chakra-ui/react"

export const HeadingVidprof = (params) => {
    const type = params.type
    if(type == 'about'){
        return (
            <Center>
                <Heading size='2xl'>Our Company Profile</Heading>
            </Center>
        )
    }
    else {
        return (
            <Box>
                <Heading textAlign={[ 'center' ]} as='h1' size='2xl' variant='page-title'>
                Who are we?
                </Heading>
            </Box>
        )
    }
} 