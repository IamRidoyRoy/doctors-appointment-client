import React from 'react';
import Review from './Review';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people1.png';
import people3 from '../../../assets/images/people1.png';
import quote from '../../../assets/icons/quote.svg';
const Testimonial = () => {
    const reviewData = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people3
        }
    ]
    return (
        <section className='mb-12'>
            <div className='flex justify-between my-2'>
                <div>
                    <h4 className='text-xl text-primary font-sans font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:max-w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1  lg:grid-cols-3  gap-5'>
                {
                    reviewData.map(reviews =>
                        <Review
                            key={reviews._id}
                            reviews={reviews}
                        ></Review>
                    )
                }
            </div>
        </section>
    );
};

export default Testimonial;