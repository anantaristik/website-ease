import {
  Box,
  Button,
  createIcon,
  Flex,
  List,
  ListItem,
  Image,
  Text,
  Center,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const ServicesDetail = (props) => {
  const { children, ...rest } = props
  return (
    <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
      <CheckIcon mr="4" mt="1" color={mode('blue.500', 'blue.300')} />
      <Text as="span" display="inline-block">
        {children}
      </Text>
    </ListItem>
  )
}

const PopularBadge = (props) => (
  <Box
    whiteSpace="nowrap"
    top="-4"
    left="50%"
    transform="translateX(-50%)"
    pos="absolute"
    rounded="md"
    fontWeight="bold"
    fontSize="sm"
    px="4"
    py="1"
    textTransform="uppercase"
    bg="blue.500"
    color="white"
    {...props}
  />
)

const ServicesWrapper = (props) => {
  const { highlight, ...rest } = props
  const popularStyles = {
    borderWidth: '2px',
    borderColor: 'blue.500',
    zIndex: 1,
    px: '8',
    pt: '12',
    pb: '10',
    top: {
      lg: '-8',
    },
  }
  const styles = highlight ? popularStyles : null
  return (
    <Box
      w="full"
      maxW="md"
      mx="auto"
      bg={mode('white', 'gray.700')}
      px="10"
      pt="8"
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...styles}
      {...rest}
    />
  )
}

export const ServicesCard = (props) => {
  const { img, Onlink, features, name, description1, description2, price, popular, ...rest } = props;

  return (
    <ServicesWrapper backgroundColor="#f2f2f2" 
        highlight={popular} {...rest}>
        
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Center>
        <Image src={img} alt={name} w="30%" h="30%" objectFit="cover" />
      </Center>

      <Flex direction="column" justify="center">
        <Text align="center" fontSize="2xl" color="#000" fontWeight="bold">
          {name}
        </Text>
        <Text fontFamily={'Montserrat'} textAlign="center" mt="2" color={'#000'} maxW="16rem" mx="auto">
          {description1}
        </Text>
        <Text fontFamily={'Montserrat'} textAlign="justify" mt="2" color={'#000'} maxW="16rem" mx="auto">
          {description2}
        </Text>
      </Flex>

      {/* <List stylePosition="outside" mt="8" spacing={4}>
        {features.map((feature, idx) => (
          <ServicesDetail key={idx}>{feature}</ServicesDetail>
        ))}
      </List> */}

      <Button
        backgroundColor={'#000'}
        minH="3.5rem"
        rounded="lg"
        fontWeight="bold"
        colorScheme={popular ? 'blue' : 'gray'}
        mt="8"
        w="100%"
        onClick={() => window.open(Onlink)}
      >
        Pelajari
      </Button>
    </ServicesWrapper>
  )
}
