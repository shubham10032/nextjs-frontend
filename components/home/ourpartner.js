import Carousel from "react-slick";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Marquee from "react-fast-marquee";
function Partner(props) {
  const router = useRouter()
  let utmData = '';
  const { utm_campaign, utm_id, utm_medium, utm_source } = router.query
  if (!utm_campaign) {
    utmData = `?utm_source=direct_visitors&utm_medium=self&utm_campaign=&utm_id=`
  } else {
    utmData = `?utm_source=${utm_source}&utm_medium=${utm_medium}&utm_campaign=${utm_campaign}&utm_id=${utm_id}`
  }

  return (
    <section className="partner-acc">
      <div className="container Our-partner-container">
        <div className="row">
          <div className="best-top1">
            <h2 style={{ "textAlign": "center" }}>Our Partners  Across the Industry</h2>
            {/* <div className="feature-four__top-btn-box No-risk-btn">
              <a href="#" className="thm-btn feature-four__top-btn" aria-label="view all our partners" type="submit">View All</a>
            </div> */}
          </div>

        </div>
        <Marquee pauseOnHover={true}>
        {
                props.partner && props.partner.map((item, index) => (
                  <div className="" key={index}>

                    <div className="bests-icon-box m-3">
                      <div className="bests-icon-img">
                        {item.url != null ? <Link href={item.url + utmData} key={index} className="bank-card-link"><a><Image src={'/uploads/partner/' + item.logo_path} height={100} width={249} alt={item.name} loading='lazy' /></a></Link> :
                          <Image src={'/uploads/partner/' + item.logo_path} key={index} className="bank-card-link" height={100} width={249} alt={item.name} loading='lazy' />}
                      </div>
                    </div>
                  </div>
                ))
                
              }
              
          </Marquee>
      </div>
    </section>
  )

}

export default Partner