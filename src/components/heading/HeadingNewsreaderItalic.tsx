import { Heading } from '@chakra-ui/react';
import React from 'react';

interface HeadingNewsreaderItalicProps {
  margin?: string;
  padding?: string;
  text: string;
}

const HeadingNewsreaderItalic: React.FC<HeadingNewsreaderItalicProps> = ({
  margin,
  padding,
  text,
}) => {
  return (
    <>
      <Heading
        as="h2"
        fontWeight={'300'}
        fontFamily="newsreader_italic"
        fontStyle={'italic'}
        fontSize={'4xl'}
        margin={margin}
        padding={padding}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingNewsreaderItalic;
