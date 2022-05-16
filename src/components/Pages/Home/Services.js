import React from 'react';
import fluride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },

    ]
    return (
        <div>
            <div className='text-center my-28'>
                <h3 className='font-bold text-primary text-xl'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;