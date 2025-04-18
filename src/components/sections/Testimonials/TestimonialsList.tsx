import React from 'react'
import { testimonials as test} from '@/utils/content'
import type { StaticImageData } from 'next/image'
import {FaStar} from "react-icons/fa"
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
    <ul className='flex flex-col gap-x-6 gap-y-3.5'>
      {testimonials.map((test) => (
        <TestimonialItem  test={test} key={test.id} />
      ))}
  
    </ul>

  );
};

export default TestimonialList;
