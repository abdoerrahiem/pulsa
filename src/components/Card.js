import React, { useState } from 'react'
import styled from 'styled-components'
import ModalCom from './Modal'

const Card = ({ showAlert, setShowAlert }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {showModal && (
        <ModalCom
          showModal={showModal}
          setShowModal={setShowModal}
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      )}
      <CardStyle className='card'>
        <div className='card-body'>
          <p className='text-center title'>
            Tri 1GB 5 Hari Bonus Pulsa 2.000 (Rp. 15.000)
          </p>
          <p className='card-text'>✓ 1GB (2G/3G/4G) 24 Jam</p>
          <p className='card-text'> ✓ Pulsa 2.000</p>
          <p className='card-text'>✓ Masa Aktif 5 Hari</p>
          <p className='card-text'>✓ Masa Aktif 5 Hari</p>
          <p className='card-text'>✓ Masa Aktif 5 Hari</p>
          <div className='text-center mt-4'>
            <button
              href='#'
              className='btn btn-primary'
              onClick={() => setShowModal(true)}
            >
              Beli
            </button>
          </div>
        </div>
      </CardStyle>
    </>
  )
}

const CardStyle = styled.div`
  width: 18rem;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #d4edda;

  .title {
    font-weight: bold;
  }
`

export default Card
