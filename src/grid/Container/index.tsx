import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

import BreakpointContext from '../Context'

import './container.scss'

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

interface ContainerProps {
  className?: string
  margin?: number | string
  breakpoints?: Breakpoints
}

const Container = ({
  className = '',
  children,
  margin,
  breakpoints,
}: PropsWithChildren<ContainerProps>) => {
  const breakpointClasses = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
  }

  const defaultBreakpoints: Breakpoints = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920,
  }

  const bp = { ...defaultBreakpoints, ...breakpoints }

  const [breakpointClass, setBreakpointClass] = useState('')

  const resize = useRef<EventListener>(() => {})

  const calcBreakpointClass = (): string => {
    const width = window.innerWidth
    if (width <= bp.xs) return breakpointClasses.xs
    if (width <= bp.sm) return breakpointClasses.sm
    if (width <= bp.md) return breakpointClasses.md
    if (width <= bp.lg) return breakpointClasses.lg
    if (width <= bp.xl) return breakpointClasses.xl
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
