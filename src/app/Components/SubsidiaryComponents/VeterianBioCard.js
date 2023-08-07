import React from 'react'

const VeterianBioCard = ({veterianInfo}) => {
  console.log(veterianInfo)
  return (
    <div className="card text-bg-dark">
      <div className="card-body text-center">
        <div>
          <img
            src={require("../../../assets/images/faces/face5.jpg")}
            className="img-lg rounded-circle mb-2 mx-auto"
            alt="profile"
          />
          <h4 className='card-text'>{veterianInfo?.Name}</h4>
          <p className="card-text mb-0">specialization : {veterianInfo?.specialization}</p>
        </div>
        <p className="mt-4 card-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Lorem
        </p>
        <button className="btn btn-info btn-sm mt-3 mb-4">
          Follow
        </button>
      </div>
    </div>
  )
}

export default VeterianBioCard