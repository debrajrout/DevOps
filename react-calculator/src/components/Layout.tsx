import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode
  }

const Layout = ({children}: LayoutProps) => {
    return (
      <div className="calculator-container">
          {children}
      </div>
    )
  }
  
  export default Layout;
  