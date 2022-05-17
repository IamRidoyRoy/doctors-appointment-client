import React from 'react';

const service = ({ service }) => {
    const { name, img, description } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
                <figure className="px-10 pt-10">
                    <img width={116} height={115} src={img} alt="Shoes" className="rounded-xl" />
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