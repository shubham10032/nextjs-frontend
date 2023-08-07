import Image from "next/image";
const testimonial = (props) => {
  const  testimonialData = props.testimonial.slice(0, 3);
  return (
  <>
    <section className="testimonial_Area new-testmonial" id="testimonialSection">
    {
      props.status == true &&   <div className="container">
      <div className="testmonial-top">
        <div className="heading text-center">What Our Patrons Have to Say About Our Services</div>
      </div>
      
      <div className="testimaol_carousel  testimaol_carousel-new">
         
          {
            testimonialData && testimonialData.map((item, index) => (
              <div className="testimonialItem" key={index}>
                <p>{item.client_message}</p>
                <div className="profileBxo">
                  <div className="profile-img"><Image src={`/uploads/testimonial/${item.client_pic}`} height={50} width = {50} loading='lazy' alt="Client Name" /></div>
                  {item.client_name}
                </div>
              </div>
            ))
          }
        
      </div>
    </div>
    }
    </section>
  </>
  )
}

export default testimonial