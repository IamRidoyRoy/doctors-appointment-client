import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointment from './BookingAppointment';
import Service from './Service';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='text-center'>
                <h4 className='text-xl text-secondary'>Available Services on : {format(date, 'PP')} </h4>
                <p>Please select a service</p>
                <p>Total Services: {services.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mb-12'>
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
                {
                    treatment &&
                    <BookingAppointment
                        date={date} treatment={treatment} setTreatment={setTreatment}
                    ></BookingAppointment>
                }
            </div>
        </section>
    );
};

export default AvailableAppoinment;