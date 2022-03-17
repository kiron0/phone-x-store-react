import React from 'react';
import './Phone.css'

const Phone = (props) => {
    const {brand, phone_name, image} = props.phone;
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <p className='text-center mb-1 mt-3'>{phone_name}</p>
            <p className='text-center mb-2 mt-1'>{brand}</p>
            <button className="details-btn">Details</button>
        </div>
    );
};

export default Phone;