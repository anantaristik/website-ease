import { Box, Heading, SimpleGrid, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { DurationSwitcher } from './durationSwitcher'
import { ServicesCard } from './servicesCard'

export const App = () => {
  return (
    <Box as="section" py="20">
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
          Our Services
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
        </SimpleGrid>
      </Box>
    </Box>
  )
}
