import { Box, Heading, Center, Text, Container } from "@chakra-ui/react"
import { HeadingVidprof } from "./heading"

export const app = (params) => {
    return(
        <Box bg='#DAC17E'>
            <Container maxW='70vw' color='black' pt={70} pb={70}>
                <HeadingVidprof type={params.type}></HeadingVidprof>
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
            </Container>
        </Box>
    )
} 