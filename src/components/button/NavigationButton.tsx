import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '../../assets/icons/Icon';
const NavigationButton = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <>
      <Button
        backgroundColor={'#997a5e'}
        borderRadius={'50%'}
        padding={'0px'}
        boxShadow={'xl'}
        outline={'transparent solid 2px'}
        color={'gray.800'}
        onClick={handleClick}
      >
        {isClick ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
    </>
  );
};

export default NavigationButton;
