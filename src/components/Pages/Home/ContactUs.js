import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section className='my-12 p-12'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center '>
                <h4 className='text-primary text-xl ' >Contact Us</h4>
                <h2 className='text-4xl text-white'>Stay Connected with us</h2>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <form action="">
                    <input className='border w-72 lg:w-96 p-2 mb-2 rounded-lg bg-white' type="email" placeholder='Email Address' name="email" id="" /><br />
                    <input className='border w-72 lg:w-96 p-2 mb-2 rounded-lg bg-white' type="text" placeholder='Subject' name="subject" id="" /><br />
                    <textarea className='border w-72 lg:w-96 p-2 mb-2 rounded-lg bg-white' placeholder='Your Message'></textarea>
                    <div className='text-center'>
                        <PrimaryButton >Submit</PrimaryButton>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default ContactUs;