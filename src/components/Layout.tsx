import React from "react";
import CustomNavbar from "./Navbar";

const Layout: React.FC = ({children}) => {
    return (
        <div>
            <CustomNavbar />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default Layout;