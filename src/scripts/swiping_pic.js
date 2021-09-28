import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Pic1 from '../components/pic1.jpg'
import Pic2 from '../components/pic5.jpg'
import Pic3 from '../components/pic4.jpg'

function swiping_pic() {
    return (
        <>
        <Carousel fade className="Carousel_container">
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={Pic2}
      alt="First slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Pic3}
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={Pic1}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
        </>
    )
}

export default swiping_pic
