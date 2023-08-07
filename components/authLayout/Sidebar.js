import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Link from 'next/link';
import Image from "next/image";
import TempSideBar from './TempSidebar';
const Sidebar = ({ collapse, setCollaspe }) => {
    
    const [sidebarmenu, setSidebarMenu] = useState([]);
    const getsidebarMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);
            setSidebarMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getsidebarMenu();
    }, []);
  
    return (
        <aside id="sidebar" className={`sidebar break-point-lg has-bg-image toggled ${collapse}`}>
            <div className="sidebar-layout">
                <div className="sidebar-header">
                    <Link href={'/'}>
                        <a className="logo" >
                            {collapse == "off" ?
                                <Image src="/images/logo.webp" alt="logo" width={175} height={36} loading='lazy' />
                                :
                                <Image src="/images/logo.webp" alt="logo" width={175} height={36} className='off-image' loading='lazy' />
                            }
                        </a>
                    </Link>
                </div>
                <nav className="menu open-current-submenu">
                    <TempSideBar data={sidebarmenu} />
                </nav>

            </div>
        </aside>
    )
}
export default Sidebar