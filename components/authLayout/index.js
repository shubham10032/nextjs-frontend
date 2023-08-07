import { useState } from "react";
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'));
const Navbar = dynamic(() => import('./Navbar'));
const Sidebar = dynamic(() => import('./Sidebar'));
import 'bootstrap/dist/css/bootstrap.css'


export default function CustomerLayout(props) {
  const [collapse , setCollaspe] = useState('');
  
  return (<>
    <Header {...props} ></Header>
    <div className="container-fluid main-top-container">
      <div className="dash-scrn-container">
      <div className="layout has-sidebar fixed-sidebar fixed-header">
        <Sidebar collapse={collapse} setCollaspe={setCollaspe} />
        <div id="overlay" className="overlay"></div>
        <div className="layout-right">
          <Navbar collapse={collapse} setCollaspe={setCollaspe} />
          <main className="content">
             {props.children}
          </main>
      
        </div>
      </div>
      </div>
    </div>
  </>
  )
}