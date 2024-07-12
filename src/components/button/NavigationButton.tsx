import { Button } from '@chakra-ui/react';

const NavigationButton = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationButton;
