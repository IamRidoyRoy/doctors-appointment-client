import React from 'react';
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body ">
                    <h2 class="text-2xl font-bold text-secondary text-center">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ?
                                <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try Another day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces ' : 'space'} available</p>
                    <div class="card-actions justify-center">

                        <label
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            for="my-modal-6" className='btn btn-sm btn-secondary uppercase text-white'>Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;