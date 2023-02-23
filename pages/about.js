import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Services } from "@/components/services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataAbout"
import { app as VideoProfile} from "@/components/video_profile/app"
import { app as VisionMission } from "@/components/misvis/app"
import { App as Logos } from "@/components/logos/app"

export default function About() {
  return (
    <Box>
      <Hero slides={slides}></Hero>
      {/* Video Profile */}
      <VideoProfile type='about'></VideoProfile>
      <Container maxW='70vw' >
        <Box mt={50} width='70vw'>
          {/* Mission and Vision */}
          <Box>
            <VisionMission></VisionMission>
          </Box>
          <Divider mt={60}></Divider>

          {/* Recent Projects */}
          <Box>
            <Projects></Projects>
          </Box>

          {/* We Have Worked With */}
          <Box>
            <Logos></Logos>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}