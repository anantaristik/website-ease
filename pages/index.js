import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Logos } from "@/components/Logos/app"
import { App as Services } from "@/components/Services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { app as VideoProfile } from "@/components/Video_profile/app"
import { App as Whyus } from "@/components/whyus/app"
import { slides } from "@/components/Hero/slides/_dataHome"
import { slides_pro } from "@/components/Projects/_data"
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/whatsapp.module.css"

export default function Home() {
  return (
    <Box background="#000000">
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
          {/* Why Us */}
          <Box>
            <Whyus></Whyus>
          </Box>
          {/* Recent Projects */}
          <Box>
            <Projects slides={slides_pro}></Projects>
          </Box>
          {/* Floating WhatsApp icon */}
          <Box
              position="fixed"
              bottom={10}
              right={10}
              bg="#25d366"
              borderRadius="50%"
              padding={4}
              className={styles.Box}
            >
              <a
                href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp color="#fff" size={30} />
              </a>
            </Box>
          <Box height='15vh'></Box>
        </Box>
      </Container>
    </Box>
  )
}