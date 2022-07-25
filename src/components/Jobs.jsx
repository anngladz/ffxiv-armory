import PropTypes from 'prop-types';

const Jobs = ({ name, level, bgcolor }) => {
  return (
    <div
      className={`flex ${bgcolor} p-1 mb-2 w-40 rounded-md text-right items-center tooltip`}
      data-tip={name.split(' /')[1]}
    >
      <img
        className='w-10 h-10'
        src={`https://xivapi.com/cj/1/${name
          .split('/ ')[1]
          .replace(/\s/g, '')}.png`}
        alt={name}
      />
      <progress
        className='progress progress-warning mx-1'
        value={level}
        max='90'
      ></progress>
      <span className=' mx-2'>{level}</span>
    </div>
  );
};

Jobs.propTypes = {
  name: PropTypes.string,
  level: PropTypes.number,
  bgcolor: PropTypes.string,
};

export default Jobs;
