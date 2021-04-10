import React from 'react'

import './row.scss'

const Row = ({ className = '', children, margin, marginTop }: React.FC<RowProps>) => {
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
