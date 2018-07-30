import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  min-width: ${(props) => props.width};
  box-shadow: 0 0 25px 5px ${(props) => props.theme['panelShadowColor']};
  background-color: ${(props) => props.theme['panelBackgroundColor']};
`

const Panel = ({ children, height, width, ...rest }) => (
  <Wrapper height={height} width={width} {...rest}>
    {children}
  </Wrapper>
)

Panel.propTypes = {
  children: PropTypes.node,
  height: PropTypes.string,
  width: PropTypes.string,
}

Panel.defaultProps = {
  height: 'auto',
  width: '100%',
}

export default Panel
