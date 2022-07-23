import PropTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  return (
    <div className='card shadow-md compact bg-neutral bg-opacity-40'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar '>
            <div className='mask mask-hexagon w-20 h-20'>
              <img src={character.Avatar} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{character.Name}</h2>
          <div className='badge'>{character.Server}</div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterCard;
