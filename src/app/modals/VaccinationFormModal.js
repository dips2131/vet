import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import VaccinationForm from '../Components/Forms/VaccinationForm'

const VaccinationFormModal = ({vaccinationModalToShow,updateVaccinationModalToShow}) => {
  return (
          <div>
            <Modal
            size="lg"
            show={vaccinationModalToShow}
            onHide={() => updateVaccinationModalToShow(false)}
            aria-labelledby="example-modal-sizes-title-md"
            dialogClassName ='float-end'
          >
            <Modal.Header closeButton>
              <Modal.Title>Vaccine-Shedular</Modal.Title>
            </Modal.Header>

            {/* <Modal.Body> */}
                <VaccinationForm updateVaccinationModalToShow={updateVaccinationModalToShow}/>
            {/* </Modal.Body> */}

            {/* <Modal.Footer className="fleex-wrap">
              <Button variant="success m-2" onClick={() => setMdShow(false)}>Submit</Button>
              <Button variant="light m-2" onClick={() => setMdShow(false)}>Cancel</Button>
            </Modal.Footer> */}
          </Modal>
          </div>
  )
}

export default VaccinationFormModal