import { useState } from 'react';
import './Slider.scss';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Slider = () => {
  const [presentSlide, setPresentSlide] = useState(0);

  const data = [
    "../images/Hero/green.PNG",
    "../images/Hero/2.png",
    "../images/Hero/3.png",
  ];

  const prevSlide = () => {
    setPresentSlide(presentSlide === 0 ? 2 : presentSlide - 1);
  };

  const nextSlide = () => {
    setPresentSlide(presentSlide === 2 ? 0 : presentSlide + 1);
  };

  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${presentSlide * 100}vw)`}}>
        <img src={data[0]} alt=''/>
        <img src={data[1]} alt=''/>
        <img src={data[2]} alt=''/>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
