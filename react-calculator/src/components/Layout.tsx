import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode,
    className?: string
}

const Layout = ({children, className=""}: LayoutProps) => {
    return (
      <div className={`${className}`} style={{border:'2px solid blue', padding: '1rem 0rem', margin:'0rem 25rem'}}>
          {children}
      </div>
    )
  }
  
  export default Layout;
  