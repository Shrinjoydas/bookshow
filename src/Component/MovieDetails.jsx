import {
  Container,
  HStack,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Stack,
  Heading,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { useParams } from 'react-router-dom';
import BookNow from './BookNow';

function CoinDetails() {
  const [movies, setmovies] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${name}`
        );
        setmovies(data[0].show);
        console.log(data[0].show);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinDetails();
  }, [name]);

  const onSend = () => {
    setSend(true);
  };

  if (error) return <ErrorComponent massage={'Error While Fetching movies'} />;
  if (loading) return <Loader />;

  return (
    <Container maxW={'container.xl'}>
      {send ? (
        <BookNow name={movies.name} />
      ) : (
        <>
          {/* Main Containt */}
          <VStack p={'8'}>
            <Image
              src={
                movies.image
                  ? movies.image.original
                  : 'https://scontent.frdp4-2.fna.fbcdn.net/v/t1.6435-9/128851635_5427040923980029_649285277980215436_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DYGJ_2x7OAkAX9hvr3_&_nc_ht=scontent.frdp4-2.fna&oh=00_AfAztUlhW2dFxnNlC8TVKXOCPGHZ1on-4fJkUW1RUDw9jQ&oe=644B8845'
              }
              h={'28rem'}
              objectFit={'contain'}
            />

            <Stat p={'4'}>
              <StatLabel fontSize={'3xl'}>{movies.name}</StatLabel>
            </Stat>

            {/* Summary*/}
            <Stack py="8">
              <Heading
                textTransform="uppercase"
                fontSize={'larger'}
                py="2"
                w="fit-content"
                mx="auto"
                borderBottom="2px solid"
                alignItems="center"
                color={'gray.400'}
              >
                Summary
              </Heading>

              <Text
                letterSpacing={'widest'}
                fontSize={'small'}
                lineHeight="190%"
                p={['1rem', '2rem']}
                textAlign="left"
                color={'gray.400'}
                maxW={'600'}
                dangerouslySetInnerHTML={{ __html: movies.summary }}
              />
            </Stack>

            {/* Stats */}

            <VStack
              p={['4', '8']}
              fontSize={'xl'}
              fontStyle={'normal'}
              color={'gray.500'}
              fontWeight={'400'}
              maxW={'600'}
              h={'360'}
            >
              <HStack p={'.45rem'} w={['20rem', '30rem']} justifyContent={'space-between'}>
                <Text letterSpacing={'widest'}>Rating </Text>
                <Text>{movies.rating.average}</Text>
              </HStack>

              <HStack p={'.45rem'} w={['20rem', '30rem']} justifyContent={'space-between'}>
                <Text letterSpacing={'widest'}>Language</Text>
                <Text>{movies.language}</Text>
              </HStack>

              <HStack p={'.45rem'} w={['20rem', '30rem']} justifyContent={'space-between'}>
                <Text letterSpacing={'widest'}>Premiered</Text>
                <Text>{movies.premiered}</Text>
              </HStack>

              <HStack p={'.45rem'} w={['20rem', '30rem']} justifyContent={'space-between'}>
                <Text letterSpacing={'widest'}>Run Time</Text>
                <Text>{movies.runtime} minutes </Text>
              </HStack>

              <Button
                top={'10'}
                w={'56'}
                h={'12'}
                onClick={onSend}
                variant={'solid'}
                colorScheme={'telegram'}
              >
                Book Now
              </Button>
            </VStack>
          </VStack>
        </>
      )}
    </Container>
  );
}

export default CoinDetails;
