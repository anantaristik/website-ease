import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
    Button
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { useState } from 'react';
  import { slides } from "./_data";
  
  export const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };

    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: '0',
        lg: '12',
      }}
      py={{
        base: '0',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        spacing={{
          base: '0',
          lg: '20',
        }}
      >
        <Box
          width={{
            lg: 'sm',
          }}
          transform={{
            base: 'translateY(-50%)',
            lg: 'none',
          }}
          bg={{
            base: useColorModeValue('red.50', 'gray.700'),
            lg: 'transparent',
          }}
          mx={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          px={{
            base: '6',
            md: '8',
            lg: '0',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
        >
          <Stack
            spacing={{
              base: '8',
              lg: '10',
            }}
          >
            <Stack
              spacing={{
                base: '2',
                lg: '4',
              }}
            >
              <Heading size="xl" color={useColorModeValue('red.500', 'red.300')}>
                Misguided
              </Heading>
              <Heading size="xl" fontWeight="normal">
                Refresh your wardrobe
              </Heading>
              <Button onClick={prevSlide}>Prev</Button>
              <Button onClick={nextSlide}>Next</Button>
            </Stack>
            <HStack spacing="3">
              <Link color={useColorModeValue('red.500', 'red.300')} fontWeight="bold" fontSize="lg">
                Discover now
              </Link>
              <Icon color={useColorModeValue('red.500', 'red.300')} as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Box>
    )
  }