import { Box, Heading, Button } from '@chakra-ui/react';

const RightSection = () => {
  return (
    <>
      <Box height={'653px'}>
        <Box position={'relative'} minH={'100vh'}>
          <Box
            flex="none"
            width={{ base: '100%', md: '500px' }}
            bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('../src/assets/images/Main-Cover.jpg')"
            bgSize="cover"
            bgPosition="center"
            color="alternativeColorText"
            p={8}
            height={'100vh'}
            padding={'2rem'}
          >
            <Heading
              as={'h2'}
              fontFamily={'poppins'}
              marginTop={'60px'}
              marginBottom={'8px'}
              fontWeight={'bold'}
              fontSize={'md'}
              textTransform={'uppercase'}
              textAlign={'center'}
              width={'100%'}
              letterSpacing={'2px'}
            >
              WEDDING ANNOUNCEMENT
            </Heading>
            <Box
              display={'flex'}
              justifyContent={'center'}
              height={'calc(90% - 130px);'}
              alignItems={'center'}
              flexDirection={'column'}
            >
              <Box textAlign={'center'} marginTop={'47px'}>
                <Heading
                  as="h2"
                  fontWeight={'300'}
                  fontSize={'4xl'}
                  fontFamily="butler_light"
                >
                  TIFFANY & JARED
                </Heading>
                <Heading
                  as="h2"
                  fontWeight={'300'}
                  fontFamily="newsreader_italic"
                  fontStyle={'italic'}
                  fontSize={'4xl'}
                >
                  #TImetoshaRE
                </Heading>
              </Box>

              <Box>
                <Button
                  height={8}
                  marginTop={'35px'}
                  lineHeight={'1.2'}
                  outlineOffset={'2px'}
                  outline={'2px solid transparent'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  display={'inline-flex'}
                  whiteSpace={'nowrap'}
                  minW={8}
                  padding={'0 2.4rem'}
                  fontStyle={'italic'}
                  fontWeight={'400'}
                  background={'gray.100'}
                  paddingInlineEnd={3}
                  borderRadius={'0px'}
                  border={'1px solid #1A1B1D'}
                  backgroundColor={'bgSecondary'}
                  color={'secondaryColorText'}
                  fontFamily={'newsreader_light'}
                  fontSize={'lg'}
                >
                  Open
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RightSection;
