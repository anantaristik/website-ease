import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { WhyUsCard } from './card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const app = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '30px',
        },
      },
    ],
  }
  return (
    <Box as="section" py="20">
      <Box
        maxW={{
          base: 'x1',
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
          Why Us?
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
          Ayooo kita aksndasidjwiaksdmk asidaoskdoako asodkasodk askdoksaok
        </Text>
        <Slider {...settings}>
          <WhyUsCard
            name="CEPAT"
            description="Job board for hiring designers and creative professionals."
            features={[
              'Sapiente libero doloribus modi',
              'Vel ipsa esse repudiandae',
              'Itaque cupiditate adipisci',
            ]}
          />
          <WhyUsCard
            popular
            name="MURAH"
            description="Our premium search allows you to quickly find the perfect designer."
            features={[
              'Duis aute irure dolor repreht',
              'Excepteur sint occa cupidatat',
              'Vel ipsa esse andae excepturi',
              'Itaque cupiditate adipisci quim',
            ]}
          />
          <WhyUsCard
            name="MUDAH"
            description="Combine the power of search with the job board at a discounted rate."
            features={[
              'Duis aute irure dolor',
              'Excepteur sint occaecat',
              'Vel ipsa esse repudiandae',
            ]}
          />
        </Slider>
      </Box>
    </Box>
  )
}
