import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  message: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      avatar: '/john-avatar.jpg', 
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '/jane-avatar.jpg',
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div className="testimonials">
      <Marquee direction="left" speed={35}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name}'s Avatar`}
              width={100}
              height={100}
              className="testimonial-avatar"
            />
            <div className="testimonial-content">
              <p className="testimonial-message">{testimonial.message}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
