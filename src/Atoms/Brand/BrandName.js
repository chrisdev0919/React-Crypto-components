// @flow strict
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

type PropsType = {
  +height?: string,
}

const Wrapper = styled.svg.attrs({
  viewBox: '0 0 397.4 43.7',
})`
  height: ${(props) => props.size};
  fill: ${(props) => props.theme.brandNameColor};
`

const BrandName = ({ height, ...rest }: PropsType) => (
  <Wrapper size={height} {...rest}>
    <path
      d="M151.7,29.7c-2.1,2.2-5.1,3.6-8.3,3.6c-6.3,0-11.5-5.2-11.5-11.5s5.2-11.5,11.5-11.5c2.9,0,5.6,1.1,7.6,2.9
	c0.6,0.5,1.7,1.6,1.7,1.6l7-7.5c-4-4.5-9.8-7.3-16.3-7.3c-12,0-21.8,9.7-21.8,21.8c0,12,9.7,21.8,21.8,21.8c6.8,0,12.9-3,16.8-8
	l-7-7.5C153.1,28.2,152.2,29.2,151.7,29.7z"
    />
    <path
      d="M234.5,29.7c-2.1,2.2-5.1,3.6-8.3,3.6c-6.3,0-11.5-5.2-11.5-11.5s5.2-11.5,11.5-11.5c2.9,0,5.6,1.1,7.6,2.9
	c0.6,0.5,1.7,1.6,1.7,1.6l7-7.5c-4-4.5-9.8-7.3-16.3-7.3c-12,0-21.8,9.7-21.8,21.8c0,12,9.7,21.8,21.8,21.8c6.8,0,12.9-3,16.8-8
	l-7-7.5C236,28.2,235,29.2,234.5,29.7z"
    />
    <path
      d="M29.5,20.9c3.7-1.6,6.4-4.5,6.4-9.3v-0.1c0-2.9-1-5.1-2.7-6.8C30.7,2.3,27,0.9,21.8,0.9H0v41.8h21.9
	c10,0,15.8-4.4,15.8-11.5v-0.1C37.7,25.5,34.5,22.6,29.5,20.9z M11.7,10.2h7.5c3.5,0,5.2,1.4,5.2,3.6v0.1c0,2.5-1.9,3.6-5.5,3.6
	h-7.3L11.7,10.2L11.7,10.2z M26.2,29.6c0,2.5-2,3.8-5.6,3.8h-9v-7.7h8.8C24.3,25.7,26.1,27.3,26.2,29.6L26.2,29.6L26.2,29.6z"
    />
    <polygon points="54.6,0.9 42.9,0.9 42.9,42.7 73.4,42.7 73.4,32.7 54.6,32.7 " />
    <polygon
      points="273.3,16.8 258.4,16.8 258.4,1.1 246.7,1.1 246.7,43 258.4,43 258.4,27.1 273.3,27.1 273.3,43
	284.9,43 284.9,1.2 273.3,1.2 "
    />
    <path
      d="M317.7,0.8h-11.2L288.7,43h12.2l3-7.5H320l3,7.5h12.4L317.7,0.8z M307.2,26.5l4.7-11.9l4.7,11.9
	C316.6,26.5,307.2,26.5,307.2,26.5z"
    />
    <rect height="41.9" width="11.6" x="339.1" y="1.2" />
    <polygon points="385.8,1.2 385.8,23.3 368.5,1.2 357.5,1.2 357.5,43 369.2,43 369.2,20.1 387.1,43 397.4,43 397.4,1.2" />
    <polygon
      points="205.4,1 191.6,1 191.6,1 191.6,1 177.2,18 177.2,1 165.6,1 165.6,42.9 177.2,42.9 177.2,32.1
	181.5,27.4 193.2,42.9 193.2,42.9 193.2,42.9 207,42.9 189.1,19 "
    />
    <path
      d="M96.6,0c-12,0-21.8,9.7-21.8,21.8c0,12,9.7,21.8,21.8,21.8c12,0,21.8-9.7,21.8-21.8C118.4,9.8,108.7,0,96.6,0z
	 M96.6,33.3c-6.3,0-11.5-5.2-11.5-11.5s5.2-11.5,11.5-11.5c6.3,0,11.5,5.2,11.5,11.5S102.9,33.3,96.6,33.3z"
    />
  </Wrapper>
)

BrandName.propTypes = {
  height: PropTypes.string,
}

BrandName.defaultProps = {
  height: '1rem',
}

export default BrandName
