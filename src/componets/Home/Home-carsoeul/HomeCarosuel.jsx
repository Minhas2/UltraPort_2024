import React, { useState } from 'react';
import "./HomeCarosuel.css";
import { Link } from 'react-router-dom';
import ASSET_PATHS from '../../../utils/constant';

export default function HomeCarosuel() {
  const imgURL = ASSET_PATHS.IMG_URL;

  const carouselData = [
    { image: 'HomeCarosuel_1.jpg', url: "/nvidia-rtx-40-star-wars-outlaws" },
    { image: 'HomeCarosuel_2.jpg', url: "/amd-radeon-rx-7800xt-7700xt-game-bundle" },
    { image: 'HomeCarosuel_3.jpg', url: "/powered-by-msi" },
    { image: 'HomeCarosuel_4.jpg', url: "/amd-ryzen-9000" },
    { image: 'HomeCarosuel_5.jpg', url: "/nvidia-rtx-ai-pcs" },
    { image: 'HomeCarosuel_6.jpg', url: "/xbox-game-pass-ultimate" },
    { image: 'HomeCarosuel_7.jpg', url: "/nvidia-rtx-40-super" },
    // { image: 'HomeCarosuel_8.jpg', url: "/ki-pc" },
    { image: 'HomeCarosuel_9.jpg', url: "/intel-core-14-generation" },
    { image: 'HomeCarosuel_10.jpg', url: "/paiement-en-plusieurs-fois-alma" },
    { image: 'HomeCarosuel_11.jpg', url: "/amd-ryzen-7000" },
    { image: 'HomeCarosuel_12.jpg', url: "/corsair-icue-murals" },
    { image: 'HomeCarosuel_13.jpg', url: "/en-securite-avec-windows-11" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < carouselData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="container-fluid HomeCarosuel g-0">
      <div id="gameCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselData.map((data, index) => (
            <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
              <Link to={data.url}>
                <img src={`${imgURL}/${data.image}`} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </Link>
            </div>
          ))}
        </div>
        {/* Left Control */}
        <button
          className={`carousel-control-prev ${currentIndex === 0 ? '' : 'show'}`}
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        {/* Right Control */}
        <button
          className={`carousel-control-next ${currentIndex === carouselData.length - 1 ? '' : 'show'}`}
          type="button"
          onClick={handleNext}
          disabled={currentIndex === carouselData.length - 1}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
