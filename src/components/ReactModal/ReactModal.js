import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css'
import axios from 'axios';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

const ReactModal = (props) => {
  const [phoneDetails, setPhoneDetails] = useState({})
  useEffect(() => {
    axios(`https://openapi.programming-hero.com/api/phone/${props.phone.slug}`)
      .then(data => setPhoneDetails(data.data.data))
  }, [props.phone.slug])
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className='details-btn' variant="none" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose} {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <PhoneDetails phone={phoneDetails} />
      </Modal>

    </div>
  );
};

export default ReactModal;