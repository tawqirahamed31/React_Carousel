# Ex05 Image Carousel
## Date:

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
imageCarousel.jsx
```
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
```
imageCarousel.css
```

.carousel {
  width: 800px;
  margin: 50px auto;
  text-align: center;
}

.carousel-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.buttons {
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #0077ff;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #0056cc;
}
```

## OUTPUT
![alt text](image.png)

## RESULT
The program for creating Image Carousel using React is executed successfully.
