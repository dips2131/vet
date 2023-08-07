import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SheduledVisitReviewModal = ({updateShedularVisitReviewModalToShow, shedularVisitReviewModalToShow}) => {
  return (
             <Modal
            size="md"
            show={ shedularVisitReviewModalToShow }
            onHide={() => updateShedularVisitReviewModalToShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            {/* <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header> */}

            <Modal.Body>
              <p>SheduledVisits : every month 19th from 19/1/2023 - 19/5/2024</p>
              <p>recurrence : 12 times</p>
            </Modal.Body>

            <Modal.Footer className="flex-wrap">
              <Button variant="danger btn-sm m-2" onClick={() => updateShedularVisitReviewModalToShow(false)}>Delete shedule</Button>
              <Button variant="light btn-sm m-2" onClick={() => updateShedularVisitReviewModalToShow(false)}>Back</Button>
            </Modal.Footer>
          </Modal>
  )
}

export default SheduledVisitReviewModal