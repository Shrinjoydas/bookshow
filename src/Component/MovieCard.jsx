import { VStack, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function CoinCard({ name, img}) {
 
  return (
    <Link to= {`/movie/${name}`} targer={"blank"}>
      <VStack
        w={'52'}
        p={'8'}
        margin={'8'}
        shadow={'lg'}
        borderRadius={'xl'}
        transition={'all 0.5s'}
        css={{
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
      >
        <Image
          src={img? img.original : "https://scontent.frdp4-2.fna.fbcdn.net/v/t1.6435-9/128851635_5427040923980029_649285277980215436_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYGJ_2x7OAkAX9hvr3_&_nc_ht=scontent.frdp4-2.fna&oh=00_AfAztUlhW2dFxnNlC8TVKXOCPGHZ1on-4fJkUW1RUDw9jQ&oe=644B8845"}
          objectFit={'contain'}
          alt={'Coins'}
        />

        <Heading size={'md'}>
        </Heading>
        <Text >{name}</Text>
        <Text color={'gray.500'} fontSize={'smaller'}>Language : {lang}</Text>
      </VStack>
    </Link>
  );
}

export default CoinCard;
