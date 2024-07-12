import { useState } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Divider,
  Heading,
  Box,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '../../assets/icons/Icon';

const NavigationButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        backgroundColor={'#997a5e'}
        borderRadius={'50%'}
        padding={'0px'}
        boxShadow={'xl'}
        outline={'transparent solid 2px'}
        color={'gray.800'}
        onClick={isOpen ? onClose : onOpen}
      >
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          padding={'24px 16px'}
          maxWidth={{ base: '300px', md: '480px' }}
          width={'100%'}
          textAlign={'right'}
        >
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading
              fontFamily={'newsreader_italic'}
              fontSize={'4xl'}
              fontWeight={'300'}
              fontStyle={'italic'}
              marginTop={'16px'}
              color={'secondaryColorText'}
            >
              #TImetoshaRE
            </Heading>
          </DrawerHeader>

          <DrawerBody fontFamily={'newsreader_normal'}>
            <Box padding={'15px 0px'}>
              <Text
                fontSize={'sm'}
                textTransform={'uppercase'}
                cursor={'pointer'}
                letterSpacing={'3px'}
                color={'secondaryColorText'}
              >
                Bride & Groom
              </Text>
              <Box
                as="hr"
                opacity="0.6"
                border="0"
                borderBottom="1px solid"
                borderColor="secondaryColorText"
                width="100%"
              />
            </Box>
            <Box padding={'15px 0px'}>
              <Text
                fontSize={'sm'}
                textTransform={'uppercase'}
                cursor={'pointer'}
                letterSpacing={'3px'}
                color={'secondaryColorText'}
              >
                Live Streaming
              </Text>
              <Box
                as="hr"
                opacity="0.6"
                border="0"
                borderBottom="1px solid"
                borderColor="secondaryColorText"
                width="100%"
              />
            </Box>
            <Box padding={'15px 0px'}>
              <Text
                fontSize={'sm'}
                textTransform={'uppercase'}
                cursor={'pointer'}
                letterSpacing={'3px'}
                color={'secondaryColorText'}
              >
                Wedding Gift
              </Text>
              <Box
                as="hr"
                opacity="0.6"
                border="0"
                borderBottom="1px solid"
                borderColor="secondaryColorText"
                width="100%"
              />
            </Box>
          </DrawerBody>

          <DrawerFooter
            color={'secondaryColorText'}
            fontSize={'xs'}
            fontFamily={'newsreader_normal'}
            display={'flex'}
            justifyContent={'flex-end'}
            alignItems={'center'}
          >
            <Box textAlign={'center'}>
              <Text>Created with Love by Invitato</Text>
              <Text>2024 Tiffany & Jared. All Rights Reserved</Text>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavigationButton;
