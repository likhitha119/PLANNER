import React from 'react'
import SafeImg from './SafeImg'
import { getLocalImages } from '../utils/localImages'

const Gallery = () => {
  const images = getLocalImages()

  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">our <span>gallery</span></h1>
      <div className="box-container">
        {images.length === 0 && (
          <p style={{ textAlign: 'center', opacity: 0.7 }}>No photos yet. Add files to src/assets/photos.</p>
        )}
        {images.map((image, index) => (
          <div key={index} className="box">
            <SafeImg src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
