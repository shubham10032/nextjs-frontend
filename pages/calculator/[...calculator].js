import { db } from './../../config/db'
import dynamic from 'next/dynamic'
import React, { useState} from 'react'
const CalcSidebar = dynamic(() => import('../../components/calculator/calculatorsidebar'))
const EmiCalculator = dynamic(() => import('../../components/calculator/emiCalculator'))
const SubsidyCalculator = dynamic(() => import('../../components/calculator/subsidyCalculator'))
const SipCalculator = dynamic(() => import('../../components/calculator/sipCalculator'))
const PpfCalculator = dynamic(() => import('../../components/calculator/ppfCalculator'))
const RdCaculator = dynamic(() => import('../../components/calculator/rdcalculator'))
const EpfCalculator = dynamic(() => import('../../components/calculator/epfCalculator'))
const SsyCalculator = dynamic(() => import('../../components/calculator/ssyCalculator'))
const LumpsumCalculator = dynamic(() => import('../../components/calculator/lumpsumpcalculator'))
const Mfcalculator = dynamic(() => import('../../components/calculator/mfcalculator'))

import { useRouter } from 'next/router'

const calculator = ({ data, content }) => {
  const router = useRouter()
  const { name } = router.query

  const [calcName, setCalcName] = useState(data.name);

  return (
    <>
      <div>
        <div className='emiCalcHeading calculator-header'>
          <div className="what-heading calculator-what-heading">
            <div>
              <h2>{data}</h2>
            </div>
            <div className="wdr cal-wdr"></div>
          </div>
        </div>

        <div className='emicontainer container'>
          <div className='row emi-main-row'>
          <div className='right col-lg-3 col-md-4 col-12'>
              <CalcSidebar setCalcName={setCalcName} calcName={calcName} />
            </div>
            <div className='left col-lg-9 col-md-8 col-12'>

              {data == 'emi-calculator' && <EmiCalculator />}
              {data == 'sip-calculator' && <SipCalculator />}
              {data == 'ppf-calculator' && <PpfCalculator />}
              {/* {data == 'subsidy-calculator' && <SubsidyCalculator />} */}
              {data == 'rd-calculator' && <RdCaculator />}
              {data == 'epf-calculator' && <EpfCalculator />}
              {data == 'ssy-calculator' && <SsyCalculator />}
              {data == 'lumpsum-calculator' && <LumpsumCalculator />}
              {data == 'mf-calculator' && <Mfcalculator />}

            </div>
           
          </div>
        </div>
      </div>

      <div className="innerpage_bg">
        <section className="section_pad">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: content[0].description }}></div>
          </div>
        </section>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {

  const data = context.query.calculator;
  let res = await db.query("SELECT * FROM `pages` WHERE `slug` =  'calculator/" + data + "' AND `status` = '1' ");
  let content = JSON.parse(JSON.stringify(res))

  return { props: { data, content } }
}

export default calculator