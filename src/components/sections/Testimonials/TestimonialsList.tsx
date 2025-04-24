import React from 'react'
import type { StaticImageData } from 'next/image'
import TestimonialItem from "./Testimonials"

export interface TestimonialProps {
  id?: number;
  rating?: number | 0;
  src?: StaticImageData;
  description?: string;
  name?: string;
  title?: string;
}


const TestimonialList = ({ testimonials }: { testimonials: TestimonialProps[] }) => {
  return (
    <ul className='flex flex-col gap-x-6 gap-y-6 max-xl:gap-y-4 max-lg:nth-[3]:hidden max-sm:nth-[2]:hidden'>
      {testimonials.map((test) => (
        <TestimonialItem  test={test} key={test.id} />
      ))}
  
    </ul>

  );
};

export default TestimonialList;
