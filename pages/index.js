import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Logos } from "@/components/Logos/app"
import { App as Services } from "@/components/Services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { app as VideoProfile } from "@/components/Video_profile/app"
import { slides } from "@/components/Hero/slides/_dataHome"
import { slides_pro } from "@/components/Projects/_data"

export default function Home() {
  return (
    <Box>
      <Hero slides={slides}></Hero>
      {/* Video Profile */}
      <VideoProfile></VideoProfile>
      <Logos></Logos>
      <Container maxW='70vw' >
        <Box mt={30} width='70vw'>
          {/* Our Services */}
          <Box>
            <Services></Services>
          </Box>
          <Divider mb={65} ></Divider>

          {/* Recent Projects */}
          <Box>
            <Projects slides={slides_pro}></Projects>
          </Box>
          <Box height='15vh'></Box>
        </Box>
      </Container>
    </Box>
  )
}