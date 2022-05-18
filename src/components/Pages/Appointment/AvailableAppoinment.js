import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='text-center'>
                <h4 className='text-xl text-secondary'>Available Services on : {format(date, 'PP')} </h4>
                <p>Please select a service</p>
                <p>Total Services: {services.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AvailableAppoinment;