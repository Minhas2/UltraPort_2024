import React, { useEffect, useState } from 'react';
import "./Page8.css";
import Card from '../../../componets/Card/Card';
import ASSET_PATHS from '../../../utils/constant';

export default function Page8() {



  const imgURL = ASSET_PATHS.IMG_URL;

  const productCardData = [
    {
      id: 1,
      imgURL: 'card_1.jpg',
      hoverImgURL: 'card_1_hover.jpg',
      rating: 4.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    },
    {
      id: 2,
      imgURL: 'card_2.jpg',
      hoverImgURL: 'card_2_hover.jpg',
      rating: 3.5,
      title: 'PC Premium gaming AMD Ryzen 9 7900X Super Nova',
      features: [
        'Windows 11 Home',
        'AMD Ryzen 9 7900X, 12x 4,70 GHz',
        'NVIDIA GeForce RTX 4080 Super 16 Go',
        '32Go Kingston 6000Mhz DDR5 RGB RAM',
        'Gigabyte X670 Aorus Elite',
        '1To Crucial T700 M.2 NVMe SSD'
      ],
      oldPrice: '3 074,00 €',
      newPrice: '2 999,00 €',
      deliveryTime: 'Délai de livraison 4-6 jours ouvrés'
    }
  ];



  const resImgURL = ASSET_PATHS.RES_IMG_URL;

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    updateScreenSize(); // Set initial state
    window.addEventListener('resize', updateScreenSize); // Update on resize

    return () => {
      window.removeEventListener('resize', updateScreenSize); // Clean up
    };
  }, []);


  return (
    <>

      <div className='page-8 pops'>

        <div className='container '>

          <div className='content w-100 d-flex align-items-center py-5 flex-column'>
            <h1><span> Jouez sans limite. </span></h1>
            <p>Avec les processeurs Intel® Core™, allez au-dèla de la performance.</p>

          </div>



          <div className='image-container'>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-1.jpg` : `${imgURL}/page8-1.jpg`}`}
              className='w-100'
              alt="Landing"
            />             </div>


          <div className='image-container'>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-2.jpg` : `${imgURL}/page8-2.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>




          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-3.jpg` : `${imgURL}/page8-3.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-4.jpg` : `${imgURL}/page8-4.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-5.jpg` : `${imgURL}/page8-5.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-6.jpg` : `${imgURL}/page8-6.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-7.jpg` : `${imgURL}/page8-7.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-8.jpg` : `${imgURL}/page8-8.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>

          <img
            src={`${resImgURL}/page8-9.jpg`}
            className={`w-100 ${isSmallScreen ? '' : 'd-none'}`} // Add 'hidden' class if not small screen
            alt="Landing"
          />

          <img
            src={`${resImgURL}/page8-10.jpg`}
            className={`w-100 ${isSmallScreen ? '' : 'd-none'}`} // Add 'hidden' class if not small screen
            alt="Landing"
          />


      
<Card address="../../../assets/image" productCardData={productCardData} />

          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-11.jpg` : `${imgURL}/page8-9.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>
          <div className='image-container '>
            <img
              src={`${isSmallScreen ? `${resImgURL}/page8-12.jpg` : `${imgURL}/page8-9.jpg`}`}
              className='w-100'
              alt="Landing"
            />           </div>




        </div>


      </div>



    </>
  );

}
