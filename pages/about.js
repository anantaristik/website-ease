import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Services } from "@/components/Services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataAbout"
import { slides_pro } from "@/components/Projects/_data"
import { app as VideoProfile} from "@/components/Video_profile/app"
import { app as VisionMission } from "@/components/Misvis/app"
import { App as Logos } from "@/components/Logos/app"

export default function About() {
  return (
    <Box color='black' background='white'>
      <Hero slides={slides}></Hero>
      {/* Video Profile */}
      <VideoProfile type='about'></VideoProfile>

      <Container maxW='70vw'>
        <Box mt={50} width='70vw'>
          {/* Mission and Vision */}
          <Box>
            <VisionMission></VisionMission>
          </Box>
          <Divider mt={60}></Divider>

          {/* Recent Projects */}
          <Box>
            <Projects slides={slides_pro}></Projects>
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