import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import VeterianBioCard from '../Components/SubsidiaryComponents/VeterianBioCard';

const VeterianBioModal = ({selectedVeterianBioModalToShow,updateSelectedVeterianBioModalToShow,veterianInfo,selectedVeterian}) => {
  console.log(veterianInfo,selectedVeterian);
  return (
    <Modal
    size="lg"
    show={ selectedVeterianBioModalToShow }
    onHide={() => updateSelectedVeterianBioModalToShow(false)}
    aria-labelledby="example-modal-sizes-title-sm"
    dialogClassName ='float-end'
  >
    {/* <Modal.Header closeButton>
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header> */}

    <Modal.Body>
      <VeterianBioCard veterianInfo={veterianInfo}/>
    </Modal.Body>

    <Modal.Footer className="flex-wrap">
      <Button variant="light btn-sm m-2" onClick={() => updateSelectedVeterianBioModalToShow(false)}>Back</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default VeterianBioModal