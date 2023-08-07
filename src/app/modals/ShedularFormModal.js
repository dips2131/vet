import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import ShedularForm from '../Components/Forms/ShedularForm'

const ShedularFormModal = ({updateShedularModalToShow,shedularModalToShow}) => {
  return (
          <div>
            <Modal 
            size='lg'
            show={shedularModalToShow}
            onHide={() => updateShedularModalToShow(false)}
            aria-labelledby="example-modal-sizes-title-md"
            dialogClassName ='float-end'
          >
            <Modal.Header closeButton>
              <Modal.Title>Monthly visit-Shedular</Modal.Title>
            </Modal.Header>

            {/* <Modal.Body> */}
                <ShedularForm updateShedularModalToShow={updateShedularModalToShow} />
            {/* </Modal.Body> */}

            {/* <Modal.Footer className="fleex-wrap">
              <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
              <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
            </Modal.Footer> */}
          </Modal>
          </div>
  )
}

export default ShedularFormModal