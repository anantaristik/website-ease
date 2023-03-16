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
    Button,
    Text
  } from '@chakra-ui/react'
  import { useState } from 'react';
  import Slider from "react-slick"
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';


  
  export const App = (props) => {
    const slides = props.slides
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
      <Box>
        <HStack>
          <Box maxW="20vw">
            <Text fontSize='4xl' fontWeight='extrabold' noOfLines={2}>Recent</Text>
            <Text fontSize='4xl' fontWeight='extrabold'>Projects</Text>
            <Box h={10}></Box>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra diam quis dolor tincidunt, congue tempor urna fringilla. Maecenas tincidunt fringilla dictum. Donec commodo sed ipsum sit amet hendrerit. Phasellus mi ante, pulvinar in vestibulum nec, congue at neque.
            </Text>
          </Box>
          <Box w='5vw'></Box>
          <Box w="40vw">
            <Box mt='5vh'>
              <Slider>
                {slides.map((slide, sid) => (
                  <Image src={slide.img} objectFit='cover'></Image>
                ))}
              </Slider>
            </Box>
          </Box>
        </HStack>
      </Box>
    )
  }