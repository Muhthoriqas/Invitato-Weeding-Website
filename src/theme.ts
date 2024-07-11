import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    bgPrimary: '#FEFEFE',
    bgSecondary: '#F9F7F4',
    bgAlternative: '#cdc1b1',
    bgStepRSVP: '#997a5e',
    mainColorText: '#1A1B1D',
    secondaryColorText: '#1A1B1D',
    alternativeColorText: '#FEFEFE',
    theme: {
      bgPrimaryText: '#1A1B1D',
      bgPrimary: '#FEFEFE',
      bgSecondary: '#F9F7F4',
      bgAlternative: '#cdc1b1',
    },
    button: {
      secondary: {
        500: '#F9F7F4',
      },
      secondaryDark: {
        500: '#cdc1b1',
      },
    },
  },
  fonts: {
    newsreader_normal: 'Newsreader Normal, sans-serif',
    newsreader_italic: 'Newsreader Italic, sans-serif',
    poppins: 'Poppins, sans-serif',
    butler_light: 'Butler Light, sans-serif',
    butler_normal: 'Butler Normal, sans-serif',
  },
});

export default theme;
