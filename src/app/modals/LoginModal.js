import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import Login from '../Components/Auth/Login';
const LoginModal = ({updateLoginModalToShow,loginModalToShow,updateRegisterModalToShow}) => {
  return (
          <>
            <Modal
            size="lg"
            show={loginModalToShow}
            onHide={() => updateLoginModalToShow(false)}
            // aria-labelledby="example-modal-sizes-title-md modal-dialog modal-lg"
            aria-labelledby="example-modal-sizes-title-lg"
            dialogClassName ='float-end'
          >
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body className='py-1'>
               <Login updateLoginModalToShow={updateLoginModalToShow} updateRegisterModalToShow={updateRegisterModalToShow} />
            </Modal.Body>

            {/* <Modal.Footer className="fleex-wrap">
              <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
              <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
            </Modal.Footer> */}
          </Modal>
          </>
  )
}

export default LoginModal