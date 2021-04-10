import React, { useEffect, useRef, useState } from 'react'

import BreakpointContext from '../Context'

import './container.scss'

const default_breakpoints: Breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
}
const Container = ({
  className = '',
  children,
  margin,
  breakpoints = default_breakpoints,
}: React.FC<ContainerProps>) => {
  const breakpointClasses = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  }

  const [breakpointClass, setBreakpointClass] = useState('')

  const resize = useRef<EventListener>(() => {})

  const calcBreakpointClass = (): string => {
    const width = window.innerWidth
    if (width <= breakpoints.xs) return breakpointClasses.xs
    if (width <= breakpoints.sm) return breakpointClasses.sm
    if (width <= breakpoints.md) return breakpointClasses.md
    if (width <= breakpoints.lg) return breakpointClasses.lg
    if (width <= breakpoints.xl) return breakpointClasses.xl
    return ''
  }

  useEffect(() => {
    setBreakpointClass(calcBreakpointClass())

    resize.current = () => {
      setBreakpointClass(calcBreakpointClass())
    }
    window.addEventListener('resize', resize.current)

    return () => {
      window.removeEventListener('resize', resize.current)
    }
  }, [])

  return (
    <BreakpointContext.Provider value={breakpointClass}>
      <div
        className={`cinch-container ${className}`}
        style={{
          paddingRight: margin,
          paddingLeft: margin,
          width: `calc(100% - ${margin} * 2)`,
        }}
      >
        {children}
      </div>
    </BreakpointContext.Provider>
  )
}

export default Container
