import { Button } from '@chakra-ui/react';

const OpenButton = ({ handleClick }: any) => {
  return (
    <>
      <Button
        className="animation-up-and-down"
        height={8}
        marginTop={'35px'}
        lineHeight={'1.2'}
        outlineOffset={'2px'}
        outline={'2px solid transparent'}
        alignItems={'center'}
        justifyContent={'center'}
        display={'inline-flex'}
        whiteSpace={'nowrap'}
        minW={8}
        padding={'0 2.4rem'}
        fontStyle={'italic'}
        fontWeight={'400'}
        background={'gray.100'}
        paddingInlineEnd={3}
        borderRadius={'0px'}
        border={'1px solid #1A1B1D'}
        backgroundColor={'bgSecondary'}
        color={'secondaryColorText'}
        fontFamily={'newsreader_light'}
        fontSize={'lg'}
        onClick={handleClick}
        zIndex="20"
      >
        Open
      </Button>
    </>
  );
};

export default OpenButton;
