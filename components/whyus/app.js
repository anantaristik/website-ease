import React, { useState } from 'react';
import { SimpleGrid, GridItem, Grid, IconButton, Box, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react';
import { ServicesCard } from './servicesCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const serviceCardsData = [
  {
    name: 'Creative',
    description: 'Deskripsi untuk Creative',
    features: [
      'Service Foto Produk',
      'Video Profile ',
      'Itaque cupiditate adipisci',
    ],
  },
  {
    name: 'Studio',
    description: 'Deskripsi untuk Studio',
    features: [
      'Operator OBS',
      'Operator Sound System',
      'Vel ipsa esse andae excepturi',
    ],
  },
  {
    name: 'Zoom',
    description: 'Deskripsi untuk Zoom',
    features: [
      'Garansi Zoom',
      'Excepteur sint occaecat',
      'Vel ipsa esse repudi',
    ],
  },
];

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + serviceCardsData.length) % serviceCardsData.length);
  };

  const next = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % serviceCardsData.length);
  };


  return (
    <Box as="section" py="10">
      <Box
        maxW={{
          base: 'xl',
          md: '6xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as='h1'
          size='2xl'
          fontWeight='extrabold'
          textAlign={{
            sm: 'center',
          }}
        >
          Why Us
        </Heading>
        <Text
          mt='4'
          maxW='xl'
          mx='auto'
          fontSize='xl'
          color={mode('gray.600', 'gray.400')}
          textAlign={{
            sm: 'center',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula enim a nulla gravida, in vehicula lacus placerat.
        </Text>

        <Box mt={10} position="relative">
          <SimpleGrid
            alignItems="flex-start"
            mt={{
              base: '10',
              lg: '24',
            }}
            columns={{
              base: 1,
              lg: 3,
            }}
            spacing={{
              base: '12',
              lg: '8',
            }}
          >
                <ServicesCard
                  scale={0.8}
                  name={serviceCardsData[activeIndex].name}
                  description={serviceCardsData[activeIndex].description}
                  price={serviceCardsData[activeIndex].price}
                  features={serviceCardsData[activeIndex].features}
                />
                <ServicesCard
                  scale={1}
                  name={serviceCardsData[(activeIndex + 1) % serviceCardsData.length].name}
                  description={serviceCardsData[(activeIndex + 1) % serviceCardsData.length].description}
                  features={
                    serviceCardsData[(activeIndex + 1) % serviceCardsData.length].features}
                />
                <ServicesCard
                  scale={0.8}
                  name={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].name}
                  description={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].description}
                  features={serviceCardsData[(activeIndex + 2) % serviceCardsData.length].features}
                />
              </SimpleGrid>
              <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={prev}
            display={{ base: 'none', sm: 'block' }}
            position="absolute"
            left="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={next}
            display={{ base: 'none', sm: 'block' }}
            position="absolute"
            right="0"
            top="50%"
            transform="translateY(-50%)"
            zIndex="1"
          />
        </Box>
      </Box>
    </Box>
  );
};