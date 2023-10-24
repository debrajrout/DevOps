import { ReactNode, CSSProperties } from "react";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Layout = ({ children, className = "", style }: LayoutProps) => {
    const defaultStyle: CSSProperties = {
        border: '2px solid blue',
        padding: '1rem 0rem',
        margin: '0rem 25rem',
    };

    return (
        <div className={className} style={{ ...defaultStyle, ...style }}>
            {children}
        </div>
    );
}

export default Layout;
