import { Container, Box, Heading, Show, Text, Center, Divider } from "@chakra-ui/react"
import { App as Logos } from "@/components/logos/app"
import { App as Services } from "@/components/services/app"
import { App as Projects } from "@/components/Projects/app"
import { App as Hero } from "@/components/Hero/app"
import { slides } from "@/components/Hero/slides/_dataAbout"
import { App as Teams } from "@/components/teams/App"

export default function About() {
  return (
    <Box>
      <Hero slides={slides}></Hero>
      <Container maxW='70vw' >
        <Box mt={50} width='70vw'>
          {/* Video Profile */}
          <Box>
            <Heading textAlign={[ 'left' ]} as='h1' size='2xl' variant='page-title'>
              Hi, Welcome to
            </Heading>
            <Heading textAlign={[ 'left' ]} as='h1' size='2xl' variant='page-title'>
              Ease your Needs!
            </Heading>
            <Center>
              <Box
                width='50vw'
                as='video'
                controls
                src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
                poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
                alt='Big Buck Bunny'
                objectFit='contain'
                sx={{
                  aspectRatio: '16/9'
                }}
                mt={45}
                borderRadius={50}
              />
            </Center>
            <Text textAlign={[ 'center' ]} mt={10} > A Team of Profesional and Passionate Operators Based on Jakarta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar diam at enim tincidunt pharetra. Proin vehicula enim a nulla gravida, in vehicula lacus placerat. Sed ut elit nulla. Morbi ullamcorper nisl lacus, at viverra orci egestas sed. Proin quis nisl id lectus tincidunt iaculis sed quis ipsum. Etiam tempus orci at mi luctus scelerisque. Praesent venenatis purus ut elit aliquet dapibus. Phasellus nec tortor in dolor laoreet aliquet. Curabitur tincidunt tellus ac gravida viverra. In tincidunt ligula non ante ultricies euismod. Fusce iaculis ante non pellentesque interdum. Sed fringilla vel ipsum faucibus tincidunt. Sed id convallis odio. Vestibulum luctus est quis lorem vehicula accumsan. Vivamus dictum suscipit nibh sit amet scelerisque.</Text>
          </Box>
          <Divider mt={65} ></Divider>

          {/* Logos Grid */}
          <Box>
            <Teams></Teams>
          </Box>
          <Divider mb={65} ></Divider>

          {/* Our Services */}
          <Box>
            <Services></Services>
          </Box>
          <Divider mb={65} ></Divider>

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