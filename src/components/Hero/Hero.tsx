import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-accent">Discover Unmatched Quality in Used Cars at Marietta's Trusted Dealership</h1>
      <p className="mb-5 text-accent-content">Welcome to Marietta's premier destination for exceptional used cars. With 15 years of unwavering commitment to great value, top-notch mechanics, transparent selling practices, and a reputation built on trust, we are your trusted choice for finding the perfect vehicle. Explore our vast inventory and experience top-quality customer service like never before.</p>
        <div className=''>
          <a href="/cars"><button className="btn btn-primary">See Available Cars</button></a>
          <a href=""><button className="btn btn-accent ml-3">Schedule a Test Drive</button></a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero