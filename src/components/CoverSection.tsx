// CoverSection.js
import theme from '../theme';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import LeftDesktopSection from './cover/LeftDesktopSection';
import RightSection from './cover/RightSection';
import MainSection from './MainSection';
import { useState } from 'react';
import MusicButton from './button/MusicButton';

const CoverSection = () => {
  const [showMainSection, setShowMainSection] = useState(false);
  return (
    <ChakraProvider theme={theme}>
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
            <MusicButton />
          </>
        ) : (
          <RightSection setShowMainSection={setShowMainSection} />
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default CoverSection;
