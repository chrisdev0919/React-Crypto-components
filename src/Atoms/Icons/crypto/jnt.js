// @flow strict
import React from 'react'

import withStyle from '../withStyle'

const SvgCryptoJnt = (props) => (
  <svg viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} fill="#0050db" r={16} />
      <path
        d="M16 26a3.626 3.626 0 0 1-1.844-.505l-5.306-3.12A3.785 3.785 0 0 1 7 19.114v-6.23a3.797 3.797 0 0 1 1.85-3.259l5.306-3.12A3.664 3.664 0 0 1 16.008 6c.645 0 1.28.174 1.836.505l5.306 3.121A3.785 3.785 0 0 1 25 12.885v6.23a3.797 3.797 0 0 1-1.85 3.26l-5.306 3.12c-.56.33-1.196.505-1.844.505zm-3.052-6.429l-.983 1a2.69 2.69 0 0 0 1.957.822c1.53-.002 2.772-1.264 2.774-2.823v-.852c.42.247.897.377 1.382.376a2.663 2.663 0 0 0 1.965-.812l-.982-1c-.26.266-.614.416-.983.416a1.397 1.397 0 0 1-1.382-1.407v-4.696h-1.382v7.984c0 .779-.62 1.41-1.385 1.41a1.37 1.37 0 0 1-.981-.418z"
        fill="#fff"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export const CryptoJnt = withStyle(SvgCryptoJnt, 'CryptoJnt', true)
