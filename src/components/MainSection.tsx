import { Box } from '@chakra-ui/react';
import OpeningSection from './OpeningSection';
import WelcomeSection from './WelcomeSection';

const MainSection = () => {
  return (
    <Box
      width={{ base: '100%', md: '500px' }}
      overflowY="auto"
      height="100vh"
      marginLeft={{ base: '0', md: 'calc(100% - 500px)' }}
    >
      <WelcomeSection />
      <OpeningSection />
    </Box>
  );
};

export default MainSection;
