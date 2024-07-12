import { Heading } from '@chakra-ui/react';
import React from 'react';

interface HeadingPoppinsProps {
  margin?: string;
  padding?: string;
  text: string;
}

const HeadingPoppins: React.FC<HeadingPoppinsProps> = ({
  margin,
  padding,
  text,
}) => {
  return (
    <>
      <Heading
        fontFamily={'poppins'}
        fontWeight={'bold'}
        fontSize={'md'}
        textTransform={'uppercase'}
        textAlign={'center'}
        letterSpacing={'2px'}
        margin={margin}
        padding={padding}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingPoppins;
