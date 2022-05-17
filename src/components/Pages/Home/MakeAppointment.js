import React from 'react';
import doctorSmall from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <div>
            <section
                style={{
                    background: `url(${appointment})`

                }}

                className='flex justify-center items-center mt-24 mb-24'>
                <div className='felx-1'>
                    <img className='mt-[-100px] hidden lg:block' src={doctorSmall} alt="" />
                </div>
                <div className='flex-1 p-12'>
                    <h5 className='text-primary font-bold mb-2'>Appointment</h5>
                    <h2 className='text-4xl text-white mb-2'>Make an appointment Today</h2>
                    <p className='text-white mb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </section>
        </div >
    );
};

export default MakeAppointment;