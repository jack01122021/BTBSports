import React from 'react'
import { useState } from 'react';
import {Button} from '@mui/material';

function PhotoSlide() {
  const slides = [
    {
      url: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/primary/owuigawygwwzwtpydh6f',
    },
    {
      url: 'https://cdn.thecollector.com/wp-content/uploads/2022/04/history-of-cricket-18th-century-sport-picture.jpg?width=1400&quality=70',
    },
    {
      url: 'https://cdn-japantimes.com/wp-content/uploads/2023/06/np_file_231076-870x489.jpeg',
    },

    {
      url: 'https://images.squarespace-cdn.com/content/v1/6411f5fd54db5b2ae490165a/017d88d8-e8be-49a2-85b8-9ff4e74776c9/MicrosoftTeams-image+%28444%29.png',
    },
    {
      url: 'https://img.olympicchannel.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/weyzoz6o394sxfkbest9',
    },
    {
      url: 'https://static.ffx.io/images/$zoom_0.177%2C$multiply_0.5855%2C$ratio_1.776846%2C$width_1059%2C$x_0%2C$y_43/t_crop_custom/q_86%2Cf_auto/f607f49e9a614aac56874cd9910c7d03df8cb80c',
    },
    {
      url: 'https://www.marketplace.org/wp-content/uploads/2020/07/GettyImages-1248502207.jpg?fit=2880%2C1620',
    },
    {
      url: 'https://www.miamiherald.com/reviews/wp-content/uploads/2022/03/ping-pong-set-MH.jpg',
    },
    {
      url: 'https://www.lta.org.uk/491dd5/siteassets/news/2023/february/badminton-court.jpg?w=1200',
    },
    {
      url: 'https://cdn.shopify.com/s/files/1/0020/9407/1890/files/2_480x480.jpg?v=1559302854',
    },
    {
      url: 'https://cdn.thewirecutter.com/wp-content/media/2022/11/puzzle-storage-2048px-1418-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200',
    },
    {
      url: 'https://media.restless.co.uk/uploads/2021/11/fun-facts-about-jigsaw-puzzles.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };



  return (
    <div className='max-w-[1400px] h-[1000px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
      text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer'>
       <Button onClick={prevSlide} className='text-white'>BACK</Button>

      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
      text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer'>
       <Button onClick={nextSlide} className='text-white'>NEXT</Button>

      </div>


    
    </div>
  )
}

export default PhotoSlide
