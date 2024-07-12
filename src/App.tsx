import { useState } from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react';

import LeftDesktopSection from './components/cover/LeftDesktopSection';
import MainSection from './components/MainSection';
import MusicButton from './components/button/MusicButton';
import RightSection from './components/cover/RightSection';

import theme from './theme';

import './App.css';

function App() {
  const [showMainSection, setShowMainSection] = useState(false);

  return (
    <>
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
    </>
  );
}

export default App;
