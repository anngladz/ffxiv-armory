import { useEffect, useContext } from 'react';
import Context from '../context/Context';
import { useParams, Link } from 'react-router-dom';
import { getCharacter } from '../context/Actions';
import Jobs from '../components/Jobs';
import Spinner from '../components/Spinner';

const Character = () => {
  const { character, loading, dispatch } = useContext(Context);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getCharacterData = async () => {
      const characterData = await getCharacter(params.id);
      dispatch({ type: 'GET_CHARACTER', payload: characterData });
    };
    getCharacterData();
  }, [dispatch, params.id]);

  const { Name, DC, Server, ClassJobs, Portrait, FreeCompanyName } = character;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container bg-neutral bg-opacity-40 rounded-lg shadow-md p-10'>
      <Link to='/ffxiv-armory/'>
        <button className='btn w-full mb-5'>Go back</button>
      </Link>
      <div className='flex-col text-center mb-10'>
        <div className='bg-neutral text-accent py-10 lg:py-5 rounded-md relative'>
          <h1 className='text-2xl font-bold'>{Name}</h1>
          <h2 className='text-secondary font-bold'>{FreeCompanyName}</h2>
          <div className='absolute top-1 right-1'>
            <div className='badge badge-warning mx-1'>{DC}</div>
            <div className='badge badge-secondary mx-1'>{Server}</div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <img className='rounded-lg mb-10 lg:mb-0' src={Portrait} alt='Name' />
        <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4 justify-items-center text-amber-400 font-bold'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='col-start-1'>
              <p className='bg-sky-700 text-center rounded-md p-2 mb-2 text-sm'>
                Tank
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 19 ||
                    job.JobID === 21 ||
                    job.JobID === 32 ||
                    job.JobID === 37
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-sky-700'
                  />
                ))}
            </div>
            <div className='2xl:col-start-1'>
              <p className='bg-green-700 text-center rounded-md p-2 mb-2 text-sm'>
                Healer
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 24 ||
                    job.JobID === 28 ||
                    job.ClassID === 33 ||
                    job.ClassID === 40
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-green-700'
                  />
                ))}
            </div>
            <div className='2xl:col-start-2 2xl:row-start-1'>
              <p className='bg-red-700 text-center rounded-md p-2 mb-2 text-sm'>
                Melee DPS
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 20 ||
                    job.JobID === 22 ||
                    job.JobID === 30 ||
                    job.JobID === 34 ||
                    job.JobID === 39
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-red-700'
                  />
                ))}
            </div>
            <div className='2xl:col-start-2 2xl:row-start-2'>
              <p className='bg-red-700 text-center rounded-md p-2 mb-2 text-sm'>
                Physical Ranged DPS
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 23 || job.JobID === 31 || job.JobID === 38
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-red-700'
                  />
                ))}
            </div>
            <div className='2xl:col-start-2 2xl:row-start-3'>
              <p className='bg-red-700 text-center rounded-md p-2 mb-2 text-sm'>
                Magical Ranged DPS
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 25 ||
                    job.JobID === 27 ||
                    job.JobID === 35 ||
                    job.JobID === 36
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-red-700'
                  />
                ))}
            </div>
          </div>
          <div className='grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-2 gap-4'>
            <div className='2xl:col-start-3 2xl:row-start-1'>
              <p className='bg-zinc-600 text-center rounded-md p-2 mb-2 text-sm'>
                Disciples of the Hand
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 8 ||
                    job.JobID === 9 ||
                    job.JobID === 10 ||
                    job.JobID === 11 ||
                    job.JobID === 12 ||
                    job.JobID === 13 ||
                    job.JobID === 14 ||
                    job.JobID === 15
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-zinc-600'
                  />
                ))}
            </div>
            <div className='2xl:col-start-4 2xl:row-start-1'>
              <p className='bg-zinc-600 text-center rounded-md p-2 mb-2 text-sm'>
                Disciples of the Land
              </p>
              {ClassJobs &&
                ClassJobs.filter(
                  (job) =>
                    job.JobID === 16 || job.JobID === 17 || job.JobID === 18
                ).map((job) => (
                  <Jobs
                    key={job.JobID}
                    name={job.Name}
                    level={job.Level}
                    bgcolor='bg-zinc-600'
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Character;
