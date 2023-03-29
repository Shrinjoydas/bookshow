import React from 'react';
import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';

function BookNow({ name }) {
  return (
    <>
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack spacing={'8'} w={['full', '96']} m={'auto'} my={'16'}>
            <Heading>{name}</Heading>
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />

            <Input
              placeholder={'No of tickets'}
              type={'number'}
              required
              focusBorderColor={'purple.500'}
            />

            <Input
              type={'datetime-local'}
              required
              focusBorderColor={'purple.500'}
            />

            <Button colorScheme={'purple'} type={'submit'} w={'full'}>
              Book Ticket Now
            </Button>
          </VStack>
        </form>
      </Container>
    </>
  );
}

export default BookNow;
