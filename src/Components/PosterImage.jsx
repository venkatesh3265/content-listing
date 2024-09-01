import React, { useState } from 'react';

const PosterImage = ({ item }) => {
  const [imageClass, setImageClass] = useState(item["poster-image"] ? "w-full" : "w-50");
  const [imageSrc, setImageSrc] = useState(
    `https://test.create.diagnal.com/images/${
      item["poster-image"] ? item["poster-image"] : "placeholder_for_missing_posters.png"
    }`
  );

  const handleImageError = () => {
    setImageSrc("https://test.create.diagnal.com/images/placeholder_for_missing_posters.png");
    setImageClass("w-[200px]"); 
  };

  return (
    <img
      className={imageClass}
      src={imageSrc}
      alt="Poster Image"
      onError={handleImageError}
    />
  );
};

export default PosterImage;
