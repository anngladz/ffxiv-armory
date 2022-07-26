import { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';
import { searchCharacters, getServers } from '../context/Actions';
import Alert from './Alert';

const Search = () => {
  const [text, setText] = useState('');
  const [dataCenter, setDataCenter] = useState('');
  const [selected, setSelected] = useState('');
  const [server, setServer] = useState('');
  const [alert, setAlert] = useState('');

  const { characters, servers, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getServersData = async () => {
      const servers = await getServers();
      dispatch({ type: 'GET_SERVERS', payload: servers });
    };
    getServersData();
  }, [dispatch, dataCenter]);

  const handleChange = (e) => setText(e.target.value);
  const handleSelectDC = (e) => {
    setDataCenter(e.target.value);
    setSelected(e.target.value);
    if (e.target.value === '') {
      setServer('');
    } else setServer(servers[e.target.value][0]);
  };
  const handleSelectServer = (e) => setServer(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Write something!');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const characters = await searchCharacters(text, server);
      dispatch({ type: 'GET_CHARACTERS', payload: characters });
      if (characters.length === 0) {
        setAlert('No results!');
      } else {
        setAlert('');
      }
      setText('');
      setDataCenter('');
      setSelected('');
      setServer('');
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
        <select
          onChange={handleSelectDC}
          className='select select-bordered w-full mt-5'
          value={selected}
        >
          <option>Data Center</option>
          <option disabled>North American Data Center</option>
          <option>Aether</option>
          <option>Crystal</option>
          <option>Primal</option>
          <option disabled>European Data Center</option>
          <option>Chaos</option>
          <option>Light</option>
          <option disabled>Oceanian Data Center</option>
          <option>Materia</option>
          <option disabled>Japanese Data Center</option>
          <option>Elemental</option>
          <option>Gaia</option>
          <option>Mana</option>
          <option>Meteor</option>
        </select>

        {dataCenter && (
          <select
            onChange={handleSelectServer}
            className='select select-bordered w-full mt-5'
          >
            {servers[dataCenter].map((server) => (
              <option key={server}>{server}</option>
            ))}
          </select>
        )}
      </form>

      {characters.length > 0 && (
        <div>
          <button
            className='btn w-full mt-5'
            onClick={() => dispatch({ type: 'CLEAR_CHARACTERS' })}
          >
            Clear
          </button>
        </div>
      )}

      {alert ? <Alert message={alert} /> : ''}
    </>
  );
};

export default Search;
