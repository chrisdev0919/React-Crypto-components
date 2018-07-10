import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BaseTextGroup = styled.div`
  text-align: ${(props) => props.align};

  & > * {
    display: ${(props) => (props.inline ? 'inline' : 'block')};
    margin-right: ${(props) => (props.inline ? '5px' : '0')};
  }
`

const TextGroup = ({ children, ...rest }) => (
  <BaseTextGroup {...rest}>{children}</BaseTextGroup>
)

TextGroup.propTypes = {
  align: PropTypes.oneOf(['justify', 'left', 'right', 'center']),
  children: PropTypes.node,
  inline: PropTypes.bool,
}

TextGroup.defaultProps = {
  align: 'justify',
  inline: true,
}

export default TextGroup