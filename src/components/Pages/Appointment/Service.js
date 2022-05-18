import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton'
const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h2 class="card-title text-secondary text-center">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ?
                                <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try Another day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces ' : 'space'} available</p>
                    <div class="card-actions justify-center">
                        <PrimaryButton slots={slots}>Book Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;