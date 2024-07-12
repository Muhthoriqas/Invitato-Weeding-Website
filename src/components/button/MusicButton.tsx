import { Box, Button } from '@chakra-ui/react';

const MusicButton = () => {
  return (
    <>
      <Box position="fixed" bottom="12px" left="12px" zIndex="11">
        <Box>
          <Button
            backgroundColor={'#997a5e'}
            borderRadius={'50%'}
            padding={'0px'}
            boxShadow={'xl'}
            outline={'transparent solid 2px'}
            color={'gray.800'}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: 'rgb(255, 255, 255)' }}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </Button>
          <Button
            backgroundColor={'#997a5e'}
            borderRadius={'50%'}
            padding={'0px'}
            boxShadow={'xl'}
            outline={'transparent solid 2px'}
            color={'gray.800'}
            marginLeft={'5px'}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              color="#FFFFFF"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
            </svg>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MusicButton;
