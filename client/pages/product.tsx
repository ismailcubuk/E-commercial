import React, { useState, useEffect } from 'react';

interface Image {
  variant: string;
  sizes: {
    s: string[];
  };
}

interface Headphones {
  title: string;
  images: Image[];
}

function Product() {
  const [headphonesData, setHeadphonesData] = useState<Headphones[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/headphones')
      .then(response => response.json())
      .then((data: Headphones[]) => setHeadphonesData(data))
      .catch(error => console.error('Veri çekme hatası:', error));
  }, []);

  return (
    <div>
      <ul>
        {headphonesData.map((item, index) => (
          <li key={index} className='border-2 border-white'>
            <h2 className='border-2 border-red-600'>{item.title}</h2>
            <ul className='flex gap-4'>
              {item.images.map((image, imageIndex) => (
                <li key={imageIndex}>
                  <h3>{image.variant} Variantı</h3>
                  <div className='flex'>
                    {image.sizes.s.map((imageUrl, sizeIndex) => (
                      <img
                        key={sizeIndex}
                        src={imageUrl}
                        width="30"
                        height="30"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
