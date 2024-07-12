import { Heading } from '@chakra-ui/react';
import React from 'react';

interface HeadingButlerLightProps {
  margin?: string;
  padding?: string;
  text: string;
}

const HeadingButlerLight: React.FC<HeadingButlerLightProps> = ({
  margin,
  padding,
  text,
}) => {
  return (
    <>
      <Heading
        as="h2"
        fontWeight={'300'}
        fontSize={'4xl'}
        fontFamily="butler_light"
        margin={margin}
        padding={padding}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingButlerLight;
