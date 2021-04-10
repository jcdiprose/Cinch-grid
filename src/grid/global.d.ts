interface ContainerProps {
  className?: string
  margin?: number | string
  breakpoints?: Breakpoints
}

interface RowProps {
  className?: string
  margin?: number | string
  marginTop?: number | string
}

interface ColProps {
  className?: string
  widths: {
    [xs: string]: number
    [sm: string]: number
    [md: string]: number
    [lg: string]: number
    [xl: string]: number
  }
  style?: Record<string, any>
}

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
