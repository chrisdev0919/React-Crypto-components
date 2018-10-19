// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#0dc9f7" r="16"/><g fill="#fff" fill-rule="nonzero"><path d="M18.904 15.739l-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z" fill-opacity=".305"/><path d="M8.27 23.993L24.586 11.33 26 14.476l-1.855-.513-.065 3.264z" fill-opacity=".7"/><path d="M22.796 17.78l-4.747-8.161L6 9l9.183 2.461 2.49 8.49z"/></g></g>
  </>
)

export const CryptoWings = withStyle(InnerSvg, 32, 32, 'CryptoWings', true)
