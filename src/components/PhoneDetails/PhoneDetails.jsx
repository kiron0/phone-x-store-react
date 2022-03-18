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
                <h5 className='text-center'>{releaseDate}</h5>
                <h5 className='text-center mt-4'>Main Features</h5>
                <p className='details'>
                    Chipset: {mainFeatures?.chipSet} <br />
                    Display Size: {mainFeatures?.displaySize} <br />
                    Memory: {mainFeatures?.memory} <br />
                    Storage: {mainFeatures?.storage} <br />
                    Sensors: {mainFeatures?.sensors.join(", ")}
                </p>
                <h5 className='text-center'>Others Features</h5>
                <p className='details'>
                    Bluetooth: {others?.Bluetooth} <br />
                    GPS: {others?.GPS} <br />
                    NFC: {others?.NFC} <br />
                    Radio: {others?.Radio} <br />
                    USB: {others?.USB} <br />
                    WLAN: {others?.WLAN}
                </p>
            </Modal.Body>
        </div>
    )
}
