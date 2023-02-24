import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Center, Heading, Text } from '@chakra-ui/react'
import { faqs } from './_data'

export const app = () => {
    return (
        <Box>
            <Center>
                <Heading>
                    Frequently Asked Questions
                </Heading>
            </Center>
            <Box
                borderRadius="lg"
                boxShadow="md"
                mx="auto"
                my={4}
                padding="4"
                width='70vw'
            >
                <Accordion allowToggle>
                {faqs.map(faq => (
                    <AccordionItem key={faq.question} border="none">
                        <AccordionButton
                        borderRadius="lg"
                        _hover={{ bg: 'gray.600' }}
                        _focus={{ boxShadow: 'none' }}
                        mt={5}
                        bg='gray.700'
                        >
                        <Box flex="1" textAlign="left" p={2}>
                            <Text fontSize='xl' fontWeight='bold'>
                            {faq.question}
                            </Text>
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    <AccordionPanel pb={4}>
                        {faq.answer}
                    </AccordionPanel>
                    </AccordionItem>
                ))}
                </Accordion>
            </Box>
      </Box>
    )
  }
  
  