import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Container, HStack} from '@chakra-ui/react';
import Loader from './Loader';
import CoinCard from './MovieCard';
import ErrorComponent from './ErrorComponent';

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  



  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setCoins(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  if (error) return <ErrorComponent massage={'Error While Fetching Coins'} />;
  if (loading) return <Loader />;

  return (
    <Container maxW={'container.xl'}>


      {/* Main Containt */}

      <HStack wrap={'wrap'} w={'full'} justifyContent={'space-evenly'}>
        {coins.map((i) => (
          <CoinCard
            name= {i.show.name}
            key={i.show.id}
            id={i.show.id}
            img={i.show.image} 
          />
        ))}
      </HStack>


     
   
     
    </Container>
  );
}

export default Coins;


