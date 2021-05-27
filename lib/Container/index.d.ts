import { PropsWithChildren } from 'react';
import './container.scss';
interface Breakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
interface ContainerProps {
    className?: string;
    margin?: number | string;
    breakpoints?: Breakpoints;
}
declare const Container: ({ className, children, margin, breakpoints, }: PropsWithChildren<ContainerProps>) => JSX.Element;
export default Container;
