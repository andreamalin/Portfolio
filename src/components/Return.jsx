import React from 'react'

const Return = () => {
  const goBack = () => {
    window.location.hash = ''
  }

  return (
    <input type="button" id="Return" onClick={goBack} />
  )
}

export default Return
