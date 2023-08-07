import dynamic from "next/dynamic"
const Footer = dynamic(() => import('./newFooter'))
const Header = dynamic(() => import('./header'))
const NewNavbar = dynamic(() => import('./NewNavbar'))
const MobileMenu = dynamic(() => import('./mobileMenu'))
export default function Layout(props) {
    return (<>
        <div className="main-body">
            <Header {...props} />
            <MobileMenu />
            <NewNavbar />
            {props.children}
            <Footer />
        </div>
    </>
    )
}
