import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import AppointmentForm from '../Components/Forms/AppointmentForm';
import Register from '../Components/Auth/Register';

const RegisterModal = ({registerModalToShow,updateRegisterModalToShow,updateLoginModalToShow}) => {
  return (
          <div>
            <Modal
            show={registerModalToShow}
            onHide={() => updateRegisterModalToShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            dialogClassName ='float-end'
          >
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body className='py-1'>
                <Register updateRegisterModalToShow={updateRegisterModalToShow} updateLoginModalToShow={updateLoginModalToShow}/>
            </Modal.Body>

            {/* <Modal.Footer className="fleex-wrap">
              <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
              <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
            </Modal.Footer> */}
          </Modal>
          </div>
  )
}

export default RegisterModal