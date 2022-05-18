import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {
    return (
        <section>
            <div className='text-center'>
                <h4 className='text-xl text-secondary'>Available Services on : {format(date, 'PP')} </h4>
                <p>Please select a service</p>
            </div>
        </section>
    );
};

export default AvailableAppoinment;