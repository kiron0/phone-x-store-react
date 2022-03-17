import React from 'react';
import { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const [phones, setPhones] = useState([]);
    // console.log(phones)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => res.json())
            .then(data => setPhones(data.data));
    }, [])

    return (
        <div className='container'>
            <p className='text-center mt-5 mb-5 available'>Available Iphone: {phones.length}</p>
            <div className='phones-container'>
            {
                phones.map(phone => <Phone phone={phone} key={phone.slug}></Phone>)
            }
            </div>
        </div>
    );
};

export default Phones;