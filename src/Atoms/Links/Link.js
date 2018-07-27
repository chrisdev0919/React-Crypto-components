import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { keysIn } from 'ramda'
import theme from '../../Tools/theme'

const BaseLink = styled.a`
  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-transform: ${(props) =>
    props.uppercase ? 'uppercase' : props.capitalize ? 'capitalize' : 'none'};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  color: ${(props) => props.theme[props.color]};
  opacity: ${(props) => props.opacity};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['orient']};
  }
`

const Link = ({
  children,
  weight,
  size,
  uppercase,
  capitalize,
  italic,
  color,
  opacity,
  ...rest
}) => (
  <BaseLink
    capitalize={capitalize}
    color={color}
    italic={italic}
    opacity={opacity}
    size={size}
    uppercase={uppercase}
    weight={weight}
    {...rest}
  >
    {children}
  </BaseLink>
)

Link.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.oneOf(keysIn(theme)),
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  size: PropTypes.string,
  uppercase: PropTypes.bool,
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700]),
}

Link.defaultProps = {
  capitalize: false,
  color: 'gray5',
  italic: false,
  opacity: 1,
  size: '14px',
  uppercase: false,
  weight: 400,
}

export default Link