import React from 'react'

import BreakpointContext from '../Context'

import './col.scss'

const default_widths = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 1,
  xl: 1,
}

const Col = ({
  className = '',
  children,
  widths = default_widths,
  style,
}: React.FC<ColProps>) => {
  return (
    <BreakpointContext.Consumer>
      {(value) => (
        <div
          className={`cinch-col cinch-col--${widths[value]} ${className}`}
          style={style}
        >
          {children}
        </div>
      )}
    </BreakpointContext.Consumer>
  )
}

export default Col
