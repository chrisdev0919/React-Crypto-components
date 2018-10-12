import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#4C6F8C"/><path fill="#FFF" fill-rule="nonzero" d="M20.833 7H23.5v18h-2.667V7zm-4.444 9h2.667v9h-2.667v-9zm-4.445-4.5h2.667V25h-2.667V11.5zm-4.444 9h2.667V25H7.5v-4.5z"/></g>
  </>
)

export const CryptoIcn = withStyle(InnerSvg, 32, 32, 'CryptoIcn', true)
