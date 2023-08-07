import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import AppointmentForm from '../Components/Forms/AppointmentForm';
const AppointmentFormModal = ({appointmentFormToShow,updateAppointmentFormToShow}) => {
  return (
            <Modal
            show={appointmentFormToShow}
            onHide={() => updateAppointmentFormToShow(false)}
            aria-labelledby="example-modal-sizes-title-md"
            dialogClassName ='float-end'
          >
            <Modal.Header closeButton>
              <Modal.Title>Appointment Form</Modal.Title>
            </Modal.Header>

            {/* <Modal.Body> */}
                <AppointmentForm updateAppointmentFormToShow={updateAppointmentFormToShow} />
            {/* </Modal.Body> */}

            {/* <Modal.Footer className="fleex-wrap">
              <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
              <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
            </Modal.Footer> */}
          </Modal>
  )
}

export default AppointmentFormModal