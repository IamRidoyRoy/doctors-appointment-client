import React from 'react';

const Review = ({ reviews }) => {
    const { name, location, img, review } = reviews
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p>{review}</p>

                    <div className='flex items-center my-2'>
                        <div class="avatar">
                            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div className='mx-3'>
                            <p class="card-title">{name}</p>
                            <p>Location: {location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;