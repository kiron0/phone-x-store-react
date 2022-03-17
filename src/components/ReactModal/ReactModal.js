import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ReactModal.css'

const ReactModal = (props) => {
    //   console.log(props.product);
    const {phone_name, image, releaseDate, mainFeatures} = props.phone;
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>
        <Button className='details-btn' variant="none" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose} {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Header closeButton>
            <Modal.Title><h3 className='text-center'>{phone_name}</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body><h4>{releaseDate}</h4></Modal.Body>
          <Modal.Body><img className="w-50" src={image} alt="" /></Modal.Body>
          <Modal.Body><h3 className='text-center'>Main Features</h3></Modal.Body>
          {/* <Modal.Body><h3>{mainFeatures.storage}</h3></Modal.Body> */}
        </Modal>
      </div>
    );
  };

export default ReactModal;