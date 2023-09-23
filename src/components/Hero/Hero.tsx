import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-secondary">
            Discover Unmatched Quality in Used Cars at Marietta's Trusted
            Dealership
          </h1>
          <p className="mb-5 text-white">
            Welcome to Marietta's premier destination for exceptional used cars.
            With 15 years of unwavering commitment to great value, top-notch
            mechanics, transparent selling practices, and a reputation built on
            trust, we are your trusted choice for finding the perfect vehicle.
            Explore our vast inventory and experience top-quality customer
            service like never before.
          </p>
          <a href="/cars">
            <button className="btn bg-accent hover:bg-red-400 text-white px-10">
              See Available Cars
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
