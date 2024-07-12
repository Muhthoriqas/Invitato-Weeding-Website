import { useState } from 'react';
import { Box, Text, Button, Image, Heading } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import images from '../../utils/ImageArray.tsx'; // Import array images

const OpeningSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Box
      id="opening_section"
      color="black"
      padding="50px 0 100px"
      textAlign="center"
    >
      <Box
        fontFamily="poppins"
        letterSpacing="2px"
        textTransform="uppercase"
        textAlign="center"
      >
        <Text fontSize="12px">DEAR MR-MRS-MS,</Text>
        <Text fontSize="12px">FAMILY & FRIENDS</Text>
      </Box>
      <Box>
        <Fade duration={1000} direction="up" triggerOnce>
          <Heading
            fontSize="32px"
            padding="24px 0"
            fontFamily="butler_normal"
            fontWeight="500"
          >
            Welcome to
            <br />
            Tiffany & Jared’s
            <br />
            Wedding Website
          </Heading>
        </Fade>
      </Box>
      <Box>
        <Fade duration={1000} direction="up" triggerOnce>
          <Text
            padding="0px 10% 24px"
            fontSize="18px"
            marginBottom="18px"
            fontFamily="newsreader_italic"
          >
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
        </Fade>
      </Box>
      <Box position="relative">
        <Box
          display={'flex'}
          flexFlow={'wrap'}
          boxSizing="border-box"
          justifyContent={'space-between'}
          width={'100%'}
          userSelect={'none'}
        >
          <Box
            overflow="hidden"
            width="100%"
            maxWidth="560px"
            display="flex"
            flexFlow={'wrap'}
            padding={'0px'}
          >
            <Box
              display={'flex'}
              boxSizing="border-box"
              outline={'none'}
              style={{ transition: 'transform 1000ms linear 0ms' }}
            >
              {images.map((src, index) => (
                <Box
                  key={index}
                  width="280px"
                  height={'390px'}
                  transform={`translateX(-${currentSlide * 280}px)`}
                  transition="transform 1.2s ease-in-out"
                >
                  <Image
                    src={src}
                    width="280px"
                    height={'390px'}
                    objectFit={'cover'}
                    objectPosition={'center center'}
                    border={'10px solid transparent'}
                    alt={`Slide ${index + 1}`}
                  />
                </Box>
              ))}
            </Box>
          </Box>
          <Button
            type="button"
            position="absolute"
            right="2.5rem"
            bottom="-50px"
            alignSelf="center"
            background="var(--chakra-colors-bgSecondary)"
            border="1px solid rgb(26, 27, 29)"
            borderRadius={'0px'}
            cursor="pointer"
            height="30px"
            lineHeight="1"
            textAlign="center"
            width="70px"
            padding="5px 10px"
            onClick={handlePrev}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              fontSize="24px"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                color="bgSecondary"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Box>
          </Button>
          <Button
            type="button"
            position="absolute"
            right="120px"
            bottom="-50px"
            alignSelf="center"
            borderRadius={'0px'}
            background="bgSecondary"
            border="1px solid rgb(26, 27, 29)"
            cursor="pointer"
            height="30px"
            lineHeight="1"
            textAlign="center"
            width="70px"
            padding="5px 10px"
            onClick={handleNext}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
              fontSize="24px"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                color="var(--chakra-colors-secondaryColorText)"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'var(--chakra-colors-secondaryColorText)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                ></path>
              </svg>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OpeningSection;
