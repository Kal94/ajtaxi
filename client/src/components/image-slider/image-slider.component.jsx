import React from 'react'
import './image-slider.styles.scss'
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';

const ImageSliderComponent = ({slideImages}) => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSliderComponent