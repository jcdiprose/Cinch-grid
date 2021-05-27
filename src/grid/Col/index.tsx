import React, { PropsWithChildren, useEffect } from 'react'

import BreakpointContext from '../Context'

import './col.scss'

interface Widths {
  [k: string]: number
}

interface ColProps {
  className?: string
  widths: Widths
  style?: Record<string, any>
}

const default_widths = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 1,
  xl: 1,
}

const validateWidths = (widths: Widths) => {
  Object.keys(widths).forEach((width) => {
    if (
      width !== 'xs' &&
      width !== 'sm' &&
      width !== 'md' &&
      width !== 'lg' &&
      width !== 'xl'
    ) {
      throw TypeError('Col passed incorrect width param.')
    }
  })
  Object.values(widths).forEach((width) => {
    if (typeof width !== 'number') throw TypeError('Width passed type other than number.')
  })
}

const Col = ({
  className = '',
  children,
  widths = default_widths,
  style,
}: PropsWithChildren<ColProps>) => {
  useEffect(() => {
    validateWidths(widths)
  }, [widths])

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
