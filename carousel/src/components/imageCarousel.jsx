import { useState, useEffect } from "react";
import "./imageCarousel.css";

function ImageCarousel() {
  const images = [
    "https://img.magnific.com/free-photo/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface_181624-35913.jpg?semt=ais_hybrid&w=740&q=80",
    "https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKMjK_3cVpDbePqf_1s1clkD_ZEzSTQEGRw&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="carousel-image"
      />

      <div className="buttons">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default ImageCarousel;