import Image from "next/image";
import Link from 'next/link';
import { newsdata } from "../constant/data";
// import Marquee from "react-fast-marquee";
const newdata = newsdata.slice(0 ,12)
const impactSection = ({status}) => {
  return (
    <section className="our-impact" id="impactSection">
     {
      status  == true &&  <div className="container">
      <div className="imp">
        <div className="best-top">
          <span>OUR IMPACT</span>
          <div className="besth6">We're making a difference</div>
          <p>With Referloan, you can save time and money while leveraging a simple, intuitive, and transparent Financial Journey</p>
        </div>
      </div>
      <div className="row">
        <div className="imp">
          <div className="imp-wrap">
            <div className="best-top best-mid">
              <div className="c-short-he">IN 2021 WE’VE HELPED OVER</div>
              <p className="count-people">100,000 people</p>
              <span>To get an Easy Financial Stability</span>
            </div>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="bests-tab">
          
            {
              
              newdata.map((item, index) => (
                  <div className="bests-icon-box impact-box-image" key={index}>
                    <div className="bests-icon-img">
                      <Link href={item.url}>
                        <a target="_blank">
                          <Image src={`/images/${item.image}`} width={150} height={79} loading='lazy' alt={`Impact-${index}`} />
                        </a>
                      </Link>
                    </div>
                  </div>
              ))
            }
        
        </div>
      </div>
    </div>
     }
    </section>

  )
}

export default impactSection;