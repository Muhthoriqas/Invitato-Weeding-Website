// Import Package & Library
import { useState } from 'react';
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';

// Import Assets
const images = [
  '../src/assets/images/Slideshow/Slideshow-Cover-1.jpg',
  '../src/assets/images/Slideshow/Slideshow-Cover-2.jpg',
  '../src/assets/images/Slideshow/Slideshow-Cover-3.jpg',
  '../src/assets/images/Slideshow/Slideshow-Cover-4.jpg',
  '../src/assets/images/Slideshow/Slideshow-Cover-5.jpg',
];

const OpeningSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Box color="black" padding="50px 0 100px" textAlign="center">
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
        </Box>
        <Box>
          <Text
            padding="0px 10% 24px"
            fontSize="18px"
            marginBottom="18px"
            fontFamily="newsreader_italic"
          >
            Together with joyful hearts and the grace of God, we joyfully
            announce the upcoming of our marriage.
          </Text>
        </Box>

        <Box position={'relative'}>
          <Box
            display="flex"
            flexFlow="wrap"
            boxSizing="border-box"
            justifyContent="space-between"
            width="100%"
            userSelect="none"
            position="relative"
          >
            <Box
              width="100%"
              display="flex"
              boxSizing="border-box"
              flexFlow="wrap"
              padding="0px"
              overflow="hidden"
              maxWidth="560px"
            >
              <Box
                role="presentation"
                display="flex"
                boxSizing="border-box"
                outline="none"
                transform={`translateX(-${currentSlide * 100}%)`}
                transition="transform 0.5s ease-in-out"
              >
                {images.map((src, index) => (
                  <Box
                    key={index}
                    role="tabpanel"
                    transform={`scale(${index % 5 === 0 ? 1.05 : 1})`}
                    transition={`transform ${
                      index % 5 === 0 ? 1.5 : 1.2
                    }s linear 0s`}
                    boxSizing="border-box"
                    margin="0px"
                    height={'390px'}
                    width={'280px'}
                    cursor={'pointer'}
                  >
                    {src && (
                      <Image
                        src={src}
                        height={'390px'}
                        width={'280px'}
                        objectFit={'cover'}
                        objectPosition={'center'}
                        border={'10px solid transparent'}
                        alt={`Slide ${index + 1}`}
                      />
                    )}
                  </Box>
                ))}
              </Box>
              <Button
                type="button"
                position="absolute"
                right="2.5rem"
                bottom="-50px"
                alignSelf="center"
                background="var(--chakra-colors-bgSecondary)"
                border="1px solid rgb(26, 27, 29)"
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
                    color="var(--chakra-colors-secondaryColorText)"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'var(--chakra-colors-secondaryColorText)' }}
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
                background="var(--chakra-colors-bgSecondary)"
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
      </Box>
    </>
  );
};

export default OpeningSection;
