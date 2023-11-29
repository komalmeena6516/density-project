import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Navbar from "./Navbar";
import  protoType  from "prop-types";
import "./layout.css";
import Hero from "./Hero";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }`
    )

    return (
        <>
         <Navbar />
        <Hero />
         <main>{children}</main>
        </>
           
        
    )
};

Layout.protoType = {
    children: protoType.node.isRequired,
}

export default Layout;