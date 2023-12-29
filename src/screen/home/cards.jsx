import React from 'react';

const Card = ({ content }) => {
  const cardStyle = {
    width: '299px',
    height: '239px',
    backgroundColor: content.backgroundColor || 'lightblue',
    margin: '8px', // Gap between cards
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const imageStyle = {
    height: '157px',
    width: '125px',
    backgroundImage: `url(${content.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={cardStyle}>
      <div style={imageStyle}></div>
    </div>
  );
};

export default Card;
