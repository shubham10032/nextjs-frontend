import Link from 'next/link'
const calcSidebar = ({setCalcName,calcName}) => {
    
    return (

        <div className="article_list calculator-sidebar" >
            <h2>CALCULATOR</h2>
            <ul className='calculator-list'>
                <li><Link href="/calculator/emi-calculator"><a title="EMI Calculator">EMI Calculator</a></Link></li>
                {/* <li><Link href="/calculator/subsidy-calculator"><a title="SUBSIDY Calculator">SUBSIDY Calculator</a></Link></li> */}
                <li><Link href="/calculator/sip-calculator"><a title="SIP Calculator">SIP Calculator</a></Link></li>
                <li><Link href="/calculator/rd-calculator"><a title="RD Calculator">RD Calculator</a></Link></li>
                <li><Link href="/calculator/ssy-calculator"><a title="SSY Calculator">SSY Calculator</a></Link></li>
                <li><Link href="/calculator/ppf-calculator"><a title="PPF Calculator">PPF Calculator</a></Link></li>
                <li><Link href="/calculator/epf-calculator"><a title="EPF Calculator">EPF Calculator</a></Link></li>
                <li><Link href="/calculator/lumpsum-calculator"><a title="Lumpsum Calculator">Lumpsum Calculator</a></Link></li>
                <li><Link href="/calculator/mf-calculator"><a title="MF Returns Calculator">MF Returns Calculator</a></Link></li>
            </ul>
        </div>
    )
}
export default calcSidebar;