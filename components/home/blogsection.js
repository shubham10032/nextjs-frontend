import Image from "next/image"
import Link from "next/link"

const insuranceInvestment = () => {
  return (
    <>
    <section className="home_blogArea" style={{}}>
      <div className="container">
        <div className="row">
          <h2 className="blog_heading">Blogs</h2>

          <div className="col-lg-3 order-lg-12">
            <div className="step-imgBox blog_subheading_shadow"><Image src="/images/e-mudra.webp" className="blog_pic" alt="SBI e-Mudra Loan" layout="responsive" width="350" height="259" loading='lazy' /></div>
            <div className="blog_dis_area">
              <h2 className="blog_subheading">SBI e-Mudra Loan</h2>
              <p className="blog_subheadingPar">State Bank of India is one of the government banks operating in India for a very long time. They have been serving their customers with various loan products at a very minimal interest rate. One such loan is SBI e-Mudra Loan. <Link href="https://blog.referloan.in/sbi-e-mudra-loan-a-venture-launched-to-support-sme-business/"><a className="blog_subheading_readmore" target={"_blank"}> Read full blog</a></Link></p>
            </div>

          </div>
          <div className="col-lg-3 order-lg-12">
            <div className="step-imgBox blog_subheading_shadow">
              <Image src="/images/investment-plan.webp" className="blog_pic" alt="Top 5 Investments" layout="responsive" width="350" height="259" loading='lazy' />
              </div>
            <div className="blog_dis_area">
              <h2 className="blog_subheading">Top 5 Investments </h2>
              <p className="blog_subheadingPar">Do you have a small amount of money to invest? Are you tired of searching for information regarding where to invest and how to double your money? If yes, then keep on reading because you sure aren’t going to regret it. <Link href="https://blog.referloan.in/top-5-investments-you-should-consider-to-double-your-money/"><a className="blog_subheading_readmore" target={"_blank"}> Read full blog</a></Link></p>
            </div>
          </div>

          <div className="col-lg-3 order-lg-12">
            <div className="step-imgBox blog_subheading_shadow"><Image src="/images/digital-banking.webp" className="blog_pic" alt="Development of digital banking" layout="responsive" width="350" height="259" loading='lazy' /></div>
            <div className="blog_dis_area">
              <h2 className="blog_subheading">Development of digital banking </h2>
              <p className="blog_subheadingPar">On Sunday, India launched 75 digital banking facilities in rural and small-town locations to increase access to financial services. To promote digital banking throughout the country, India established 75 these digital banking units. <Link href="https://blog.referloan.in/the-development-of-digital-banking-in-rural-india-and-its-significance/"><a className="blog_subheading_readmore" target={"_blank"}> Read full blog</a></Link></p>
            </div>

          </div>
          <div className="col-lg-3 order-lg-12">
            <div className="step-imgBox blog_subheading_shadow"><Image src="/images/policies.webp" className="blog_pic" alt="Looking for the Best Policies" layout="responsive" width="350" height="259" loading='lazy' /></div>
            <div className="blog_dis_area">
              <h2 className="blog_subheading">Looking for the Best Policies </h2>
              <p className="blog_subheadingPar">Having insurance coverage has become essential for everyone due to the increasing level of uncertainty in life, particularly following COVID-19. Policies are like a helping hand that comes to rescue when one is under .<Link href="https://blog.referloan.in/the-best-lic-policies-to-invest-in-2022/"><a className="blog_subheading_readmore" target={"_blank"}> Read full blog</a></Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default insuranceInvestment