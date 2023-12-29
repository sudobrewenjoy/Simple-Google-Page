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
    backgroundImage: content.image.props ? `url(${content.image.props.src})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={cardStyle}>
      {/* Check if content.image is a JSX element, then render it */}
      {content.image.props ? (
        content.image
      ) : (
        <img src={content.image} alt={content.productName} style={imageStyle} />
      )}
    </div>
  );
};

export default Card;
