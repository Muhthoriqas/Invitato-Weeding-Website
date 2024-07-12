import { Button, Box } from '@chakra-ui/react';
import ReactLoading from 'react-loading';

interface OpenButtonProps {
  handleClick: () => void;
  loading: boolean;
}

const OpenButton: React.FC<OpenButtonProps> = ({ handleClick, loading }) => {
  return (
    <>
      <Button
        className="animation-up-and-down"
        height={8}
        marginTop={{ base: '180px', md: '35px' }}
        lineHeight={'1.2'}
        outlineOffset={'2px'}
        outline={'2px solid transparent'}
        alignItems={'center'}
        justifyContent={'center'}
        display={'inline-flex'}
        whiteSpace={'nowrap'}
        width={'120px'}
        padding={'0 2.4rem'}
        fontStyle={'italic'}
        fontWeight={'400'}
        paddingInlineEnd={3}
        borderRadius={'0px'}
        border={'1px solid #1A1B1D'}
        background={'gray.100'}
        opacity={loading ? '0.5' : '1'}
        color={'secondaryColorText'}
        fontFamily={'newsreader_light'}
        fontSize={'lg'}
        onClick={handleClick}
        zIndex="20"
      >
        {loading ? (
          <Box display="flex" alignItems="center">
            <ReactLoading
              type="spin"
              color="#000"
              width={'25px'}
              height={'25px'}
            />
          </Box>
        ) : (
          'Open'
        )}
      </Button>
    </>
  );
};

export default OpenButton;
