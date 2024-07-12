// Import Package & Library
import { Box } from '@chakra-ui/react';

// Import Sections
import OpeningSection from './OpeningSection';
import WelcomeSection from './WelcomeSection';

const MainSection = () => {
  return (
    <Box
      width={{ base: '100%', lg: '500px' }}
      overflowY="auto"
      height="100vh"
      marginLeft={{ base: '0', lg: 'calc(100% - 500px)' }}
    >
      <WelcomeSection />
      <OpeningSection />
    </Box>
  );
};

export default MainSection;
