import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import LeftDesktopSection from '../components/cover/LeftDesktopSection';
import MainSection from '../sections/home/MainSection';
import RightSection from '../components/cover/RightSection';
import MusicButton from '../components/button/MusicButton';
import NavigationButton from '../components/button/NavigationButton';

const HomePage = () => {
  const [showMainSection, setShowMainSection] = useState(false);

  return (
    <>
      <Flex
        height="100vh"
        direction="row"
        width="100%"
        color="alternativeColorText"
      >
        <LeftDesktopSection />
        {showMainSection ? (
          <>
            <MainSection />
            <Box position="fixed" bottom="12px" left="12px" zIndex="11">
              <Box>
                <NavigationButton />
                <MusicButton />
              </Box>
            </Box>
          </>
        ) : (
          <RightSection setShowMainSection={setShowMainSection} />
        )}
      </Flex>
    </>
  );
};

export default HomePage;
