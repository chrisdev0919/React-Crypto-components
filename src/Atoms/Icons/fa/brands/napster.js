// @flow strict
import React from 'react'

import withStyle from '../../withStyle'

const InnerSvg = (
  <>
    <path d="M298.3 373.6c-14.2 13.6-31.3 24.1-50.4 30.5-19-6.4-36.2-16.9-50.3-30.5h100.7zm44-199.6c20-16.9 43.6-29.2 69.6-36.2V299c0 219.4-328 217.6-328 .3V137.7c25.9 6.9 49.6 19.6 69.5 36.4 56.8-40 132.5-39.9 188.9-.1zm-208.8-58.5c64.4-60 164.3-60.1 228.9-.2-7.1 3.5-13.9 7.3-20.6 11.5-58.7-30.5-129.2-30.4-187.9.1-6.3-4-13.9-8.2-20.4-11.4zM43.8 93.2v69.3c-58.4 36.5-58.4 121.1.1 158.3 26.4 245.1 381.7 240.3 407.6 1.5l.3-1.7c58.7-36.3 58.9-121.7.2-158.2V93.2c-17.3.5-34 3-50.1 7.4-82-91.5-225.5-91.5-307.5.1-16.3-4.4-33.1-7-50.6-7.5zM259.2 352s36-.3 61.3-1.5c10.2-.5 21.1-4 25.5-6.5 26.3-15.1 25.4-39.2 26.2-47.4-79.5-.6-99.9-3.9-113 55.4zm-135.5-55.3c.8 8.2-.1 32.3 26.2 47.4 4.4 2.5 15.2 6 25.5 6.5 25.3 1.1 61.3 1.5 61.3 1.5-13.2-59.4-33.7-56.1-113-55.4zm169.1 123.4c-3.2-5.3-6.9-7.3-6.9-7.3-24.8 7.3-52.2 6.9-75.9 0 0 0-2.9 1.5-6.4 6.6-2.8 4.1-3.7 9.6-3.7 9.6 29.1 17.6 67.1 17.6 96.2 0-.1-.1-.3-4-3.3-8.9z"/>
  </>
)

export const FabNapster = withStyle(InnerSvg, 496, 512, 'FabNapster')
