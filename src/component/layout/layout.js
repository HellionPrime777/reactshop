import React from 'react'
import Info from '../header/header_top/info';
import Menu from '../header/header_bottom/menu';
import Logo from '../header/Header_middle/logo';
import Search from '../header/Header_middle/search';
import  Cart from '../header/Header_middle/cart';
// import LogoFooter from '../footer/logo';
import MenuFooter from '../footer/menu_footer';
// import Social from '../footer/social';


function Layout(props) {
  return (
    <>
    <Info/>
   
    <div className="d-flex align-items-center" style={{ height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center"}}> 
        <div style={{ marginLeft: "200px"}}><Logo /></div> 
        <div style={{ marginRight: "180px"}}><Search /></div> 
        <div style={{ marginRight: "200px"}}><Cart/></div> 
      </div>
     
    <Menu/>
        {props.children}
        <div style={{ minHeight: "100vh",  display: "flex", flexDirection: "column" }}>


    <MenuFooter />
  </div>

    </>
  
  );
}

export default Layout;