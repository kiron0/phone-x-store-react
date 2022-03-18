import React from 'react'
import { Modal } from 'react-bootstrap';
import './PhoneDetails.css'

export default function PhoneDetails(props) {
    // console.log(props.phone);
    const { name, image, releaseDate, mainFeatures, others } = props.phone;
    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title><h4 className='text-center phone-title'>{name}</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body className='body-container'>
                <img className="phone-img d-flex mx-auto mb-4" src={image} alt="" />
                <h5 className='text-center'>{releaseDate || 'Release date not found'}</h5>
                <h5 className='text-center mt-4'>Main Features</h5>
                <p className='details'>
                    Chipset: {mainFeatures?.chipSet || 'Not available'} <br />
                    Display Size: {mainFeatures?.displaySize || 'Not available'} <br />
                    Memory: {mainFeatures?.memory || 'Not available'} <br />
                    Storage: {mainFeatures?.storage || 'Not available'} <br />
                    Sensors: {mainFeatures?.sensors.join(", ") || 'Not available'}
                </p>
                <h5 className='text-center'>Others Features</h5>
                <p className='details'>
                    Bluetooth: {others?.Bluetooth || 'Not available'} <br />
                    GPS: {others?.GPS || 'Not available'} <br />
                    NFC: {others?.NFC || 'Not available'} <br />
                    Radio: {others?.Radio || 'Not available'} <br />
                    USB: {others?.USB || 'Not available'} <br />
                    WLAN: {others?.WLAN || 'Not available'}
                </p>
            </Modal.Body>
        </div>
    )
}
