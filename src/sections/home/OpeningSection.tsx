import { useState } from 'react';
import { Box, Text, Button, Image, Heading } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';
import images from '../../utils/ImageArray.tsx';
import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/icons/Icon.tsx';
import FsLightbox from 'fslightbox-react';

const OpeningSection = () => {
  const [currentSlide, setCurrentSlide] = useState(7);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const handleNext = () => {
    setCurrentSlide((prev) => prev - 1);
    if (currentSlide <= 0) {
      setCurrentSlide(images.length - 2);
    }
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => prev + 1);
    if (currentSlide >= images.length - 2) {
      setCurrentSlide(0);
    }
  };

  const handleSlideClick = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
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
            maxWidth="840px"
            display="flex"
            flexFlow={'wrap'}
            padding={'0px'}
          >
            <Box display={'flex'} boxSizing="border-box" outline={'none'}>
              {images.map((src, index) => (
                <Box
                  key={index}
                  width="280px"
                  height={'390px'}
                  transform={`translateX(-${currentSlide * 280}px)`}
                  transition="transform 1.2s ease-in-out"
                  style={{ cursor: 'pointer', marginBottom: '20px' }}
                  onClick={() => handleSlideClick(index)}
                  margin={'0'}
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
              <ArrowLeftIcon />
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
              <ArrowRightIcon />
            </Box>
          </Button>
        </Box>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images}
          slide={lightboxController.slide}
        />
      </Box>
    </Box>
  );
};

export default OpeningSection;
