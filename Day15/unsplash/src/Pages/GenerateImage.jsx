import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from '../Components/Carousal';

const GeneratedImage = () => {
  const location = useLocation();
  const { imageType, query, quantity, orientation } = location.state;
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = 'QrdFUiB0k4ZsIcwpcO0zJvOBKUsEZYCqOUvYa3leQr8'; 
      
      let url = '';

      if (imageType === 'queried' && query) {
        url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${quantity}&orientation=${orientation}&client_id=${accessKey}`;
      } else {
        url = `https://api.unsplash.com/photos/random?count=${quantity}&orientation=${orientation}&client_id=${accessKey}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Handle response based on imageType
        if (imageType === 'queried') {
          setSlides(data.results.map((img) => img.urls.regular));
        } else {
          setSlides(data.map((img) => img.urls.regular));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [imageType, query, quantity, orientation]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="max-w-xl bg-red p-4">
        <Carousel autoSlide={true}>
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`Slide ${index}`} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GeneratedImage;
