import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';

const BookingAppointment = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleModalForm = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // const date = event.target.date.value;
        // console.log(slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.booking)
                if (data.success) {
                    toast(`Appointment is set,${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already have an Appointment on,${data.booking?.date} at ${data.booking?.slot}`)

                }
                refetch();
                setTreatment(null);
            });
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">{name}</h3>
                    <form onSubmit={handleModalForm} className='grid grid-cols-2 justify-items-center  gap-3 mt-5'>
                        <input disabled type="text" name='date' value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" required />
                        <input type="text" name='email' disabled value={user.email} className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingAppointment;