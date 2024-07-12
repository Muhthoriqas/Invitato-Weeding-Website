import { Box, Text, useBreakpointValue, VStack } from '@chakra-ui/react';

import { Fade } from 'react-awesome-reveal';
import HeadingPoppins from '../heading/HeadingPoppins';
import HeadingButlerLight from '../heading/HeadingButlerLight';
const LeftDesktopSection = () => {
  const displayLeftSection = useBreakpointValue({ base: 'none', lg: 'block' });

  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width={{ base: '100%', lg: 'calc(100% - 500px)' }}
      borderRightWidth="8px"
      borderRightStyle="solid"
      borderRightColor="blackAlpha.400"
      bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('/Left-Desktop.jpg')"
      bgSize="cover"
      bgPosition="center"
      color="alternativeColorText"
      padding="42px"
      display={displayLeftSection}
      zIndex="10"
      overflow="hidden"
    >
      <VStack align="start" spacing={0}>
        <Fade duration={1000} direction="up" triggerOnce>
          <HeadingPoppins text="WEDDING ANNOUNCEMENT" margin="2px 0 0 0" />
        </Fade>
        <Box
          paddingTop="32px"
          letterSpacing="4px"
          textTransform="uppercase"
          color="alternativeColorText"
        >
          <HeadingButlerLight fontSize="7xl" lineHeight="1" text="TIFFANY &" />
          <HeadingButlerLight fontSize="7xl" text="JARED" />
        </Box>
        <Fade duration={1000} direction="up" triggerOnce>
          <Text
            maxW="800px"
            letterSpacing="1px"
            fontFamily="newsreader_italic"
            fontStyle="italic"
            marginTop="18px"
          >
            "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat
            diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada."
            <br />— Sapardi Djoko Damono
          </Text>
        </Fade>
      </VStack>
    </Box>
  );
};

export default LeftDesktopSection;
