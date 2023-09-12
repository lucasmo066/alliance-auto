const Testimonials = () => {
    return (
      <section id="testimonials" className="pt-10">
        <h1 className="text-5xl text-center text-accent pt-6 pb-10"> Testimonials</h1>
        <p className="text-center text-primary text-2xl">See what our past customers have to say about their experience buying from Alliance Group Autobrokers:</p>
        <div className="carousel w-full pt-5">
            <div id="item1" className="carousel-item w-full">
                <p className="">
                "I couldn't be happier with my car-buying experience at Alliance. Their transparent and honest approach to selling made me feel confident in my decision. Plus, the top-of-the-line mechanics ensured I drove off with a reliable vehicle. I'm a customer for life!"
                </p>
            </div> 
            <div id="item2" className="carousel-item w-full">
            <p>
            "I've been buying cars from this dealership for over a decade, and they never disappoint. Their commitment to great value and outstanding customer service keeps me coming back. I recently purchased my fifth car from them, and it's as excellent as the first."
                </p>
            </div> 
            <div id="item3" className="carousel-item w-full">
            <p>
            "What a refreshing experience! The team at this dealership goes above and beyond to make the car-buying process easy and enjoyable. Their expertise and honesty set them apart. I highly recommend them to anyone looking for a used car in Marietta."
                </p>
            </div> 
            <div id="item4" className="carousel-item w-full">
            <p>
            "I was skeptical about buying a used car, but Marietta's dealership changed my perception. They took the time to explain the entire process, and I felt like they genuinely cared about my needs. I'm now the proud owner of a fantastic vehicle, thanks to their guidance."
                </p>
            </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-3">
            <a href="#item1" className="btn btn-sm">1</a> 
            <a href="#item2" className="btn btn-sm">2</a> 
            <a href="#item3" className="btn btn-sm">3</a> 
            <a href="#item4" className="btn btn-sm">4</a>
            </div>
      </section>
    );
  };
  
  export default Testimonials;