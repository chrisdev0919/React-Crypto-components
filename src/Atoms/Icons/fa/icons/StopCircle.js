
  import React from 'react'
  import withStyle from '../../withStyle'

  const StopCircle = () => (
    <React.Fragment>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"/>
    </React.Fragment>
  )

  export default withStyle(StopCircle,512,512)
