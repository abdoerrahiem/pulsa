import React from 'react'
import styled from 'styled-components'

const Warning = () => {
  return (
    <WarningStyle>
      <p className='lead text-center'>
        Website ini hanya dapat diakses melalui melalui mobile atau iPad
      </p>
    </WarningStyle>
  )
}

const WarningStyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export default Warning
