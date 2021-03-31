# Cinch-Grid

### Cinch grid is a minimal responsive grid system with zero padding. This is to allow you to make pixel perfect layouts without battling padding that grids like Bootstrap use.

#### v1.0.0

```
interface ContainerProps {
  className?: string
  margin?: number | string
  children: JSX.Element[] | JSX.Element
  breakpoints?: Breakpoints
}

interface RowProps {
  className?: string
  margin?: number | string
  marginTop?: number | string
  children: JSX.Element[] | JSX.Element
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
  children: JSX.Element[] | JSX.Element
  style?: Record<string, any>
}

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

```
