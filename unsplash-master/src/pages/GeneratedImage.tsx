import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from "../components/Carosal";

const GeneratedImage = () => {
  const location = useLocation();
  const { imageType, query, quantity, orientation } = location.state || {};
  const [slides, setSlides] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const accessKey = 'LAnjV_HA3t-SJ_lWhnWGaPvf0LW_Y-dAjgEyroYtIj0'; 
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
          setSlides(data.results.map((img: any) => img.urls.regular));
        } else {
          setSlides(data.map((img: any) => img.urls.regular));
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [imageType, query, quantity, orientation]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-lg">
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
