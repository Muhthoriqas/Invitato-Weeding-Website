import React from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';

const LandingSection: React.FC = () => {
  const displayLeftSection = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    <Flex height="100vh" direction="row">
      <Box
        flex="1"
        width={{ base: '0%', md: '70%' }}
        display={displayLeftSection}
        bgImage="url('/path/to/left-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        p={8}
      >
        <VStack align="start" spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            WEDDING ANNOUNCEMENT
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            TIFFANY & JARED
          </Text>
          <Text fontSize="xl" fontStyle="italic">
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
          </Text>
          <Text fontSize="lg" alignSelf="end">
            — Sapardi Djoko Damono
          </Text>
        </VStack>
      </Box>
      <Box
        flex="1"
        width={{ base: '100%', md: '30%' }}
        bgImage="url('/path/to/right-background.jpg')"
        bgSize="cover"
        bgPosition="center"
        color="white"
        p={8}
      >
        <VStack align="center" spacing={4}>
          <Text fontSize="4xl" fontWeight="bold">
            WEDDING ANNOUNCEMENT
          </Text>
          <Text fontSize="6xl" fontWeight="bold">
            TIFFANY & JARED
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            #TImetoshaRE
          </Text>
          <Button colorScheme="teal" size="lg">
            Open
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default LandingSection;
