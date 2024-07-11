import {
  Box,
  Text,
  useBreakpointValue,
  VStack,
  Heading,
} from '@chakra-ui/react';

const LeftDesktopSection = () => {
  const displayLeftSection = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    <>
      <Box
        flex={{ base: '1', md: 'none' }}
        height={'100%'}
        borderRightWidth={'8px'}
        borderRightStyle={'solid'}
        width={{ base: '0%', md: 'calc(100% - 500px)' }}
        display={displayLeftSection}
        borderRightColor={'blackAlpha.400'}
        bgSize={'cover'}
        bgPosition={'center'}
        bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('../src/assets/images/Left-Desktop.jpg') "
        color="alternativeColorText"
        padding={'42px'}
      >
        <VStack align="start" gap={0}>
          <Text
            fontSize="md"
            fontWeight="bold"
            letterSpacing={'2px'}
            fontFamily={'poppins'}
          >
            WEDDING ANNOUNCEMENT
          </Text>
          <Box
            paddingTop={'32px'}
            letterSpacing={'4px'}
            textTransform={'uppercase'}
            color={'alternativeColorText'}
          >
            <Heading
              as="h2"
              size="4xl"
              fontWeight={'300'}
              fontFamily="butler_light"
              lineHeight={1}
            >
              TIFFANY &
            </Heading>
            <Heading
              as="h2"
              size="4xl"
              fontWeight={'300'}
              fontFamily="butler_light"
            >
              JARED
            </Heading>
          </Box>
          <Box>
            <Text
              maxW={'800px'}
              letterSpacing={'1px'}
              fontFamily={'newsreader_italic'}
              fontStyle={'italic'}
              marginTop={'18px'}
            >
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
              <br />— Sapardi Djoko Damono
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default LeftDesktopSection;
