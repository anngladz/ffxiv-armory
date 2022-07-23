import { useContext } from 'react';
import Context from '../context/Context';
import CharacterCard from './CharacterCard';
import Spinner from './Spinner';

const CharacterResults = () => {
  const { characters, loading } = useContext(Context);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-10'>
        {characters.map((character) => (
          <CharacterCard key={character.ID} character={character} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default CharacterResults;
