import theme from '../theme';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import LeftDesktopSection from './welcome/LeftDesktopSection';
import RightSection from './welcome/RightSection';

const WelcomeSection = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Flex
          height="100vh"
          direction="row"
          width={'100%'}
          color={'alternativeColorText'}
        >
          <LeftDesktopSection />
          <RightSection />
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default WelcomeSection;
