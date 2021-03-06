import React from 'react';
const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-5">
                <div className="card-body ">
                    <h2 className="text-2xl font-bold text-secondary text-center">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ?
                                <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try Another day</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces ' : 'space'} available</p>
                    <div className="card-actions justify-center">

                        <label
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            htmlFor="my-modal-6" className='btn btn-sm btn-secondary uppercase text-white'>Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Service;