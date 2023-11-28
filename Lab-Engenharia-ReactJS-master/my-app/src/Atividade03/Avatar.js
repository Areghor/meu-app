import './Avatar.css';

function Avatar({person, size}) {
  return person ? (
    <img 
      className='Avatar'
      src={person.image}
      alt={person.name}
      width={size}
      height={size}
    />
  ) : null;
}

export default Avatar;
