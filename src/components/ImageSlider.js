import React from 'react';
import { SliderData } from './SliderData';
import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
//passing in slides, which is our SliderData
const ImageSlider = ({slides}) => {
  //state hook, declaring a new state var, which is current
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
      //set state with current, and we're checking the index is 0
      setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
    }

  return (
    <Container>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {/* Mapping through our array, 2 values, slide/index  */}
        {SliderData.map((slide, index) => {

            return (
                <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                  {index === current && (<img src={slide.image} alt='Cactus' className='image' />)}
                </div>
            )    
        })}
    </Container>
  )
}

export default ImageSlider