import { format } from 'date-fns';
import React from 'react';

const BookingAppointment = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleModalForm = event => {
        event.preventDefault();
        const date = event.target.date.value;
        const time = event.target.time.value;
        console.log(date, time, name);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">{name}</h3>
                    <form onSubmit={handleModalForm} className='grid grid-cols-2 justify-items-center  gap-3 mt-5'>
                        <input disabled type="text" name='date' value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='time' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingAppointment;