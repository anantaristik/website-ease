import { Container, Box, Heading, Show, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <Box>
      <Box mt={50}>
        <Box flexGrow={1}>
          <Heading textAlign={[ 'center' ]} as='h1' variant='page-title'>
            EASE YOUR NEEDS
          </Heading>
          <Text textAlign={[ 'center' ]} mt={3} > A Team of Profesional and Passionate Operators Based on Jakarta </Text>
        </Box>
        <Box height='50vh'></Box>
      </Box>
    </Box>
  )
}