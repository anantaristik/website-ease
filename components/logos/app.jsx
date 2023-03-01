import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import * as Logos from './brands'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const App = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
    <Box color="white" as="section" pt="16" pb="24">
      <Box
        maxW={{
          base: 'xl',
          md: '5xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Box textAlign="center">
          <Heading size="lg" mb="4">
            Trusted by enterprise leaders
          </Heading>
          <Text maxW="2xl" mx="auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua elit consectetur adipiscing.
          </Text>
        </Box>
        <SimpleGrid
          columns={{
            base: 2,
            lg: 5,
          }}
          spacing={{
            base: '6',
            md: '12',
            lg: '16',
          }}
          mt="12"
          alignItems="center"
          justifyItems="center"
          fontSize="2xl"
          opacity={0.6}
        >
        </SimpleGrid>
        <Slider {...settings}>
        <div>
          <Logos.ChatMonkey />
        </div>
        <div>
          <Logos.Wakanda />
        </div>
        <div>
          <Logos.Lighthouse />
        </div>
        <div>
          <Logos.WorkScout />
        </div>
        <div>
          <Logos.Plumtic />
        </div>
      </Slider>
      </Box>
    </Box>
  )
}
