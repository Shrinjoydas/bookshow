import { Button, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Heading
      position={'sticky'}
      top={'0'}
      justify-content={'flex-start'}
      w={'full'}
      backgroundColor={'blackAlpha.900'}
      shadow={'base'}
      zIndex={10}
    >
      <HStack p={'4'}>
        <Button variant={'unstyled'} color={'white'}>
          <Link to="/">Home</Link>
        </Button>
      </HStack>
    </Heading>
  );
}

export default Navbar;
