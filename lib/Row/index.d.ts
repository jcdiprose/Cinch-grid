import { PropsWithChildren } from 'react';
import './row.scss';
interface RowProps {
    className?: string;
    margin?: number | string;
    marginTop?: number | string;
}
declare const Row: ({ className, children, margin, marginTop, }: PropsWithChildren<RowProps>) => JSX.Element;
export default Row;
