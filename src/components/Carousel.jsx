// import React, { useState, useEffect } from 'react';
// import '../App.css'; 

// const Carousel = () => {
//   const images = ['/assets/c-image1.png', '/assets/c-image2.png', '/assets/c-image3.png'];
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
//     }, 3000); // slide change every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="carousel">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`slide ${index === currentSlide ? 'active' : ''}`}
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Carousel;


import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import cImage1 from '../assets/c-image1.png';
import cImage2 from '../assets/c-image2.png';
import cImage3 from '../assets/c-image3.png';
import cImage4 from '../assets/c-image4.png';
import cImage5 from '../assets/c-image5.png';
import cImage6 from '../assets/c-image6.png';
import cImage7 from '../assets/c-image7.png';
import '../App.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={cImage1} onDragStart={handleDragStart} alt="Carousel Item 1" className="carousel-image" />,
  <img src={cImage2} onDragStart={handleDragStart} alt="Carousel Item 2" className="carousel-image" />,
  <img src={cImage3} onDragStart={handleDragStart} alt="Carousel Item 3" className="carousel-image" />,
  <img src={cImage4} onDragStart={handleDragStart} alt="Carousel Item 4" className="carousel-image" />,
  <img src={cImage5} onDragStart={handleDragStart} alt="Carousel Item 5" className="carousel-image" />,
  <img src={cImage6} onDragStart={handleDragStart} alt="Carousel Item 6" className="carousel-image" />,
  <img src={cImage7} onDragStart={handleDragStart} alt="Carousel Item 7" className="carousel-image" />,
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1024: { items: 3 },
        }}
      />
    </div>
  );
};

export default Carousel;
