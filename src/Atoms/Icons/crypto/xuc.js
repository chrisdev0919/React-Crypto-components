// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoXuc = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none">
      <circle cx={16} cy={16} r={16} fill="#25AAE3" />
      <path
        fill="#FFF"
        d="M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16C5 9.924 9.925 5 16 5s11 4.925 11 11zm-3.77.346c.007-.125 0 0 0-.127 0-3.607-2.665-6.811-6.122-7.35v-2.1l-2.24.698V8.87c-3.455.538-6.102 3.52-6.102 7.125 0 3.69 2.77 6.73 6.344 7.165v2.068l2.24-.698v-1.446a7.23 7.23 0 0 0 5.441-4.68H20.47a5.08 5.08 0 0 1-4.48 2.685 5.094 5.094 0 0 1-5.077-4.726l12.318-.017zM11.25 14.13a5.093 5.093 0 0 1 4.74-3.229 5.095 5.095 0 0 1 4.737 3.23h-9.476z"
      />
    </g>
  </svg>
)

export const CryptoXuc = withStyle(SvgCryptoXuc, 'CryptoXuc', true)
