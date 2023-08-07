import React from 'react'
import { Modal, Button } from 'react-bootstrap'
const SheduledVaccineReviewModal = ({sheduledVaccineReviewModalToShow,updateSheduledVaccineReviewModalToShow}) => {
  return (
    <div>
        <Modal
            size="md"
            show={ sheduledVaccineReviewModalToShow }
            onHide={() => updateSheduledVaccineReviewModalToShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            {/* <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header> */}

            <Modal.Body>
              <p> Sheduled Vaccine : every month 19th from 19/1/2023 - 19/5/2024</p>
              <p>recurrence : 12 times</p>
            </Modal.Body>

            <Modal.Footer className="flex-wrap">
              <Button variant="danger btn-sm m-2" onClick={() => updateSheduledVaccineReviewModalToShow(false)}>Delete shedule</Button>
              <Button variant="light btn-sm m-2" onClick={() => updateSheduledVaccineReviewModalToShow(false)}>Back</Button>
            </Modal.Footer>
          </Modal> 
    </div>
  )
}

export default SheduledVaccineReviewModal