import React from 'react';
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

function Profile({ person }) {
  return (
    <div className='Profile'>
      <Avatar size={100} person={person} />
      <h3>{person.name}</h3>
    </div>
  );
}

function Gallery() {
  const profiles = [
    { name: 'Victor Hugo', image: imgMan },
    { name: 'John Doe', image: 'path/to/john-doe-image.jpg' }, 
    { name: 'Jane Doe', image: 'path/to/jane-doe-image.jpg' },
  ];

  return (
    <section className='Gallery'>
      <h1>Alguns Perfis</h1>
      {profiles.map((profile, index) => (
        <Card key={index}>
          <Profile person={profile} />
        </Card>
      ))}
    </section>
  );
}

export default Gallery;
