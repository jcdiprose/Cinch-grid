import { PropsWithChildren } from 'react';
import './col.scss';
interface Widths {
    [k: string]: number;
}
interface ColProps {
    className?: string;
    widths: Widths;
    style?: Record<string, any>;
}
declare const Col: ({ className, children, widths, style, }: PropsWithChildren<ColProps>) => JSX.Element;
export default Col;
