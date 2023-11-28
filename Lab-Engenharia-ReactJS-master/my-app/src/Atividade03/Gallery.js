import './Gallery.css';
import Avatar from './Avatar';
import imgMan from './images/man.png';

function Card({ children }) {
  return (
    <div className='Card'>
      {children}
    </div>
  );
}

function Profile() {
  return (
    <Card>
      <Avatar 
        size={100}
        person={{
            name: 'Gabriel Zampieri', 
            image: imgMan
        }}
      />
    </Card>
  );
}

function Gallery() {
  return (
    <section>
      <h1>Alguns Homens</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  )
}

export default Gallery;
