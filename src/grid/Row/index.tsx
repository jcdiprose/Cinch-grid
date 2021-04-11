import React, { PropsWithChildren } from 'react'

import './row.scss'

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
