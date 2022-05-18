import React from 'react';

const Review = ({ reviews }) => {
    const { name, location, img, review } = reviews
    return (

        <div className="card w-96 bg-base-100 shadow-xl mt-5 ">
            <div className="card-body">
                <p>{review}</p>

                <div className='flex items-center my-2'>
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='mx-3'>
                        <p className="card-title">{name}</p>
                        <p>Location: {location}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Review;