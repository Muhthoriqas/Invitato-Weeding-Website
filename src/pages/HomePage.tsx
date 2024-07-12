import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import LeftDesktopSection from '../components/cover/LeftDesktopSection';
import MainSection from '../sections/home/MainSection';
import MusicButton from '../components/button/MusicButton';
import RightSection from '../components/cover/RightSection';

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
            <MusicButton />
          </>
        ) : (
          <RightSection setShowMainSection={setShowMainSection} />
        )}
      </Flex>
    </>
  );
};

export default HomePage;
