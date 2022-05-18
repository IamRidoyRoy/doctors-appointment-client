import React from 'react';

const service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mt-5  ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default service;