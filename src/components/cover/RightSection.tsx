import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import HeadingPoppins from '../heading/HeadingPoppins';
import HeadingNewsreaderItalic from '../heading/HeadingNewsreaderItalic';
import HeadingButlerLight from '../heading/HeadingButlerLight';
import OpenButton from '../button/OpenButton';

interface RightSectionProps {
  setShowMainSection: React.Dispatch<React.SetStateAction<boolean>>;
}

const RightSection: React.FC<RightSectionProps> = ({ setShowMainSection }) => {
  const [loading, setLoading] = useState(false);

  const handleOpenClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMainSection(true);
    }, 1800);
  };

  return (
    <>
      {/* Cover Right Section Start*/}
      <Box
        height={'100vh'}
        position="relative"
        marginLeft={{ base: '0', md: 'calc(100% - 500px)' }}
      >
        <Box
          flex="none"
          width={{ base: '100%', md: '500px' }}
          bgImage="linear-gradient(rgba(50, 48, 48, 0.5), rgba(50, 48, 48, 0.5)), url('../src/assets/images/Main-Cover.jpg')"
          bgSize="cover"
          bgPosition="center"
          color="alternativeColorText"
          p={8}
          height={'100vh'}
          padding={'2rem'}
        >
          <HeadingPoppins
            text="WEDDING ANNOUNCEMENT"
            margin="60px 0 8px 0"
          ></HeadingPoppins>
          <Box
            display={'flex'}
            justifyContent={'center'}
            height={'calc(90% - 130px);'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Box textAlign={'center'} marginTop={'47px'}>
              <HeadingButlerLight text="TIFFANY & JARED" />
              <HeadingNewsreaderItalic text="#TImetoshaRE" />
            </Box>

            <Box>
              <OpenButton handleClick={handleOpenClick} loading={loading} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Cover Right Section End*/}
    </>
  );
};

export default RightSection;
