import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingAppointment from './BookingAppointment';
import Service from './Service';
import Loading from '../../Pages/Shared/Loading'
import { useQuery } from 'react-query';
const AvailableAppoinment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <div className='text-center'>
                <h4 className='text-xl text-secondary'>Available Services on : {format(date, 'PP')} </h4>
                <p>Please select a service</p>
                {/* <p>Total Services: {data.length}</p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mb-12'>
                    {
                        services?.map(service => <Service
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></Service>)
                    }
                </div>
                {
                    treatment &&
                    <BookingAppointment
                        date={date} treatment={treatment}
                        setTreatment={setTreatment}
                        refetch={refetch}
                    ></BookingAppointment>
                }
            </div>
        </section>
    );
};

export default AvailableAppoinment;