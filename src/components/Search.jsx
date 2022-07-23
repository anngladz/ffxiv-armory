import { useState, useContext } from 'react';
import Context from '../context/Context';
import { searchCharacters } from '../context/Actions';
import Alert from './Alert';

const Search = () => {
  const [text, setText] = useState('');
  const [alert, setAlert] = useState('');

  const { dispatch } = useContext(Context);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Write something!');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const characters = await searchCharacters(text);
      dispatch({ type: 'GET_CHARACTERS', payload: characters });
      if (characters.length === 0) {
        setAlert('No results!');
      } else {
        setAlert('');
      }
      setText('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='input input-lg input-bordered w-full pr-40 bg-opacity-40'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='absolute top-0 -right-1 rounded-l-none w-36 btn btn-lg'
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {alert ? <Alert message={alert} /> : ''}
    </>
  );
};

export default Search;
