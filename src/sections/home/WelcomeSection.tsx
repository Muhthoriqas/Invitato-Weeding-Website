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
          width={{ base: '100%', md: '500px' }}
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
          <Button
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
              >
                <Text marginRight="7px">Scroll To Begin</Text>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="17"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </Button>
            </Box>
          </Button>
        </Box>
      </Box>
    </Fade>
  );
};

export default WelcomeSection;
