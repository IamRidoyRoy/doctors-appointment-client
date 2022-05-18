import React from 'react';

const PrimaryButton = ({ children, slots }) => {
    return (
        <div>
            <button disabled={slots.length === 0} className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
        </div>
    );
};

export default PrimaryButton;
