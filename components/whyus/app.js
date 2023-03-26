import React from "react"
import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from "@chakra-ui/react"
import ReactCardCarousel from "react-card-carousel"
import { ServicesCard } from './servicesCard'

function CONTAINER_STYLE() {
  return {
    position: "relative",
    height: "60vh",
    width: "100%",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
}

export const app = () => {
  return (
    <Box as="section" py="10">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          textAlign={{
            sm: 'center',
          }}
        >
          Why Us
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          color={mode('gray.600', 'gray.400')}
          textAlign={{
            sm: 'center',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula enim a nulla gravida, in vehicula lacus placerat. 
        </Text>
      
        <Box style={CONTAINER_STYLE()}>
          <ReactCardCarousel 
            autoplay={true} 
            autoplay_speed={2500}
            cardPadSize={1000}
            margin={50}>
          <ServicesCard
            name="Creative"
            description="Deskripsi untuk Creative"
            price={149}
            features={[
              'Service Foto Produk',
              'Video Profile ',
              'Itaque cupiditate adipisci',
            ]}
          />
          <ServicesCard
            name="Studio"
            description="Deskripsi untuk Studio"
            price={299}
            features={[
              'Operator OBS',
              'Operator Sound System',
              'Vel ipsa esse andae excepturi',
            ]}
          />
          <ServicesCard
            name="Zoom"
            description="Deskripsi untuk Zoom"
            price={499}
            features={[
              'Garansi Zoom',
              'Excepteur sint occaecat',
              'Vel ipsa esse repudiandae',
            ]}
          />
          </ReactCardCarousel>
          </Box>
          </Box>
        </Box>

  )
}

