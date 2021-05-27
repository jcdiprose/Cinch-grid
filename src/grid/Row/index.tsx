import React, { PropsWithChildren } from 'react'

import './row.scss'

interface RowProps {
  className?: string
  margin?: number | string
  marginTop?: number | string
}

const Row = ({
  className = '',
  children,
  margin,
  marginTop,
}: PropsWithChildren<RowProps>) => {
  return (
    <div
      className={`cinch-row ${className}`}
      style={{ paddingRight: margin, paddingLeft: margin, marginTop: marginTop }}
    >
      {children}
    </div>
  )
}

export default Row
