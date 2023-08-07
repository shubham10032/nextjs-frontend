import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const SubMenu = dynamic(() => import('./subMenu'))
import { useRouter } from 'next/router';
import axios from "axios";

const Menu = () => {
    const router = useRouter()    
    let utmData = '';
    const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
    if (!utm_campaign) {
        utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
    } else {
        utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
    }
 
    const [visible, setVisible] = useState(true);
    const [stepOneMenu, setStepOneMenu] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [active, setActive] = useState('')
    const handleMouseOver = () => {
        setIsHovering(true);
    };
    const [sidebarmenu, setSidebarMenu] = useState([]);
    // get menu data from redux
    const getsidebarMenu = async () => {
        try {
            const res = await axios.get(`${process.env.APP_URL}/headermenu`);
            setSidebarMenu(res.data);
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleMouseOut = () => {
        setIsHovering(false);
    };
  
    const handleMouseOver1 = () => {
        setStepOneMenu(true);
    };
    
    useEffect(() => {
        getsidebarMenu()
        if (typeof window !== 'undefined') {
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("full_name");
            window.localStorage.removeItem("pan");
            window.localStorage.removeItem("phone");
        }

    }, []);


    const items = sidebarmenu?.map((item, index) => {
        const isProductBankProduct = item.hierarchy === 'Product_BankProduct';
      
        return (
          <li key={item.id}  onMouseOver={handleMouseOver1}>
            <Link href={'/' + item.slug + utmData}>
              <a className={item.product ? 'hasSub_menu' : ''} title={item.name}>{item.name}</a>
            </Link>
      
            {isProductBankProduct ? (
              stepOneMenu && <div className={item.product ? 'megaMenu_container' : ''}>
              <ul className={item.product ? 'subMenuLevel2' : ''}>
                {item.product?.map((value, Indexkey) => (
                  <li
                    key={value.id}
                    className={Indexkey ? 'activeSubMenu' : (isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <Link href={'/' + value.slug + utmData}>
                      <a title={value.name} className="product-second">{value.name}</a>
                    </Link>
                    <div className="submenuContainer">
                      <ul className="secondLevelUl">
                        {value.bank_product && <SubMenu setVisible={setVisible} setActive={setActive} data={value.bank_product} />}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            ) : (
              <ul className={item.page ? 'subMenuLevel2 smallDropMenu' : ''}>
                {item.page?.map((value, Indexkey) => (
                  <li
                    key={value.id}
                    className={Indexkey ? 'activeSubMenu' : (isHovering ? 'activeSubMenu' : 'activeSubMenu menu-active')}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <Link href={'/' + value.slug + utmData}>
                      <a style={{ textTransform: 'capitalize' }} title={value.name}>{value.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      });
      

    return (
        <>
            <header className="d-md-block d-none main-footer-menu">
                <nav className=" navBarContainer">
                    <div className="container">
                        <ul id="mainNavUl">
                            {items}
                            <li><Link href="/franchise-investment"><a title="Franchise">Partners</a></Link></li>
                            <li><Link href="/contact"><a title="Contact">Contact</a></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Menu