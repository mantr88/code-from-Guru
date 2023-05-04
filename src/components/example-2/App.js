import { Component, useEffect, useState } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';
import { fetchDogByBreed } from 'api';
import { Dog } from './Dog';
import { ErrorMessage } from './ErorrMessage';
import { DogSkeleton } from './DogSkeleton';

const ERROR_MSG =
  'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇';

export const App = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDog(breedId) {
    try {
      setIsLoading(true);
      setError(null);
      const fetchedDog = await fetchDogByBreed(breedId);
      setDog(fetchedDog);
    } catch (error) {
      this.setState({ error: ERROR_MSG });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  fetchDog();

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {isLoading && <DogSkeleton />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {dog && !isLoading && <Dog dog={dog} />}
    </Layout>
  );
};
