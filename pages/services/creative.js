import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataHome"
import { App as Pricing } from "@/components/pricing/App"

export default function Home() {
  return (
    <Box>
      <Hero slides={slides}></Hero>
      <Container maxW='70vw' >
        <Box mt={50} width='70vw'>
          {/* Pricing */}
          <Box>
            <Pricing></Pricing>
          </Box>
          {/* Recent Projects */}
          <Box>
            <Projects></Projects>
          </Box>
          <Box height='50vh'></Box>
        </Box>
      </Container>
    </Box>
  )
}