import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// Import Swiper styles
import 'swiper/css';
function Latest() {
  return (
    <div className='container my-5 pb-5'>
     <div className='text-center '>
      <h2>Latest blog</h2>
      <p>The freshest and most exciting news</p>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='pt-5'
    >
      <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog5_540x.jpg?v=1540147156" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>
      

    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog2_540x.jpg?v=1540147101" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog3_540x.jpg?v=1540147270" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog67_540x.jpg?v=1540147303" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog8.jpg?v=1540147167" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog1_540x.jpg?v=1540147616" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog67_540x.jpg?v=1540147303" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog3_540x.jpg?v=1540147270" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>


    <SwiperSlide> <Card style={{ borderRadius: '0.1px' }}>
      <Card.Img variant="top" src="https://demo-elessi.myshopify.com/cdn/shop/articles/blog1_540x.jpg?v=1540147616" />
      <Card.Body>
        <Card.Title style={{ letterSpacing: '7px', fontWeight: '500', color: '#999', lineHeight: '10px' }}>LIFESTYLE</Card.Title>
        <Card.Text style={{  fontWeight: '500', color: '#111', lineHeight: '10px' }} className='pt-3 pb-2 fs-4'>
         A Beautiful and Perfect Line
        </Card.Text>
        <p>By Happy Customers on Sepember 2023</p>
        <a className='pe-3' style={{textDecoration:'none',color: '#999'}}><i class="bi bi-chat-left-text pe-2"></i>0 Comments</a>
        <a style={{textDecoration:'none',color: '#999'}}><i class="bi bi-book pe-2" ></i>Read More</a>
      </Card.Body>
    </Card></SwiperSlide>
      
    </Swiper>
   
    </div>
  )
}

export default Latest