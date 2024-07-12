// Import Package & Library
import { useEffect, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

// Import Components
import HeadingPoppins from '../../components/heading/HeadingPoppins';
import HeadingButlerLight from '../../components/heading/HeadingButlerLight';
import HeadingNewsreaderItalic from '../../components/heading/HeadingNewsreaderItalic';

// Import Assets
import images from '../../utils/ImageArray.tsx';
import { Fade } from 'react-awesome-reveal';
import { ArrowBottomIcon } from '../../assets/icons/Icon.tsx';

const WelcomeSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScrollToBeginning = () => {
    const openingSection = document.getElementById('opening_section');
    if (openingSection) {
      openingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Fade duration={1000} direction="up" triggerOnce>
      <Box height="100vh" position="relative" overflow="hidden">
        <Box className="slide">
          {images.map((image, index) => (
            <Box
              key={index}
              className={`css-${index}`}
              backgroundImage={`linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url(${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
              height="100%"
              width="100%"
              top="0"
              left="0"
              position="absolute"
              transition="opacity 1s ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            ></Box>
          ))}
        </Box>
        <Box
          flex="none"
          width={{ base: '100%', lg: '500px' }}
          bgSize="cover"
          bgPosition="center"
          color="alternativeColorText"
          p={8}
          height="100vh"
          padding="2rem"
          position="relative"
        >
          <HeadingPoppins text="WEDDING ANNOUNCEMENT" margin="60px 0 8px 0" />
          <Box
            display="flex"
            justifyContent="center"
            height="calc(90% - 130px)"
            alignItems="center"
            flexDirection="column"
          >
            <Box textAlign="center" marginTop="47px">
              <HeadingButlerLight text="TIFFANY & JARED" />
              <HeadingNewsreaderItalic text="#TImetoshaRE" />
            </Box>
          </Box>
          <Box
            appearance="none"
            userSelect="none"
            position="relative"
            whiteSpace="nowrap"
            verticalAlign="middle"
            outline="transparent solid 2px"
            outlineOffset="2px"
            lineHeight="1.2"
            borderRadius="md"
            fontWeight="semibold"
            transitionProperty="common"
            transitionDuration="normal"
            height="10"
            minWidth="10"
            fontSize="md"
            paddingInlineStart="4"
            paddingInlineEnd="4"
            background="transparent"
            marginLeft="auto"
            padding="0px"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            marginTop="4rem"
            color="alternativeColorText"
            _hover={{ background: 'transparent' }}
          >
            <Box>
              <Button
                background={'transparent'}
                fontFamily="poppins"
                textTransform="uppercase"
                fontSize="sm"
                color={'alternativeColorText'}
                _hover={{ background: 'transparent' }}
                onClick={handleScrollToBeginning}
                outline={'transparent solid 2px'}
                lineHeight={'1.2'}
                height={10}
                marginLeft={'auto'}
                alignItems={'center'}
                padding={'0px'}
                marginRight={{ base: '0', md: '20px' }}
              >
                <Text marginRight="7px" fontSize={'sm'}>
                  Scroll To Begin
                </Text>
                <ArrowBottomIcon />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default WelcomeSection;
