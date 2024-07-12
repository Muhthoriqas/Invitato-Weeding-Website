import { Box, Button } from '@chakra-ui/react';
import HeadingPoppins from '../heading/HeadingPoppins';
import HeadingNewsreaderItalic from '../heading/HeadingNewsreaderItalic';
import HeadingButlerLight from '../heading/HeadingButlerLight';

interface RightSectionProps {
  setShowMainSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightSection: React.FC<RightSectionProps> = ({ setShowMainSection }) => {
  const handleOpenClick = () => {
    setShowMainSection(true);
  };

  return (
    <>
      {/* Cover Right Section Start*/}
      <Box
        height={'100vh'}
        position="relative"
        marginLeft={{ base: '0', md: 'calc(100% - 500px)' }}
      >
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
          <HeadingPoppins
            text="WEDDING ANNOUNCEMENT"
            margin="60px 0 8px 0"
          ></HeadingPoppins>
          <Box
            display={'flex'}
            justifyContent={'center'}
            height={'calc(90% - 130px);'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Box textAlign={'center'} marginTop={'47px'}>
              <HeadingButlerLight text="TIFFANY & JARED" />
              <HeadingNewsreaderItalic text="#TImetoshaRE" />
            </Box>

            <Box>
              <Button
                className="animation-up-and-down"
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
                onClick={handleOpenClick}
              >
                Open
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Cover Right Section End*/}
    </>
  );
};

export default RightSection;
