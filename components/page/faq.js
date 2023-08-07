import { useState } from "react";

const Faq = ({ faq }) => {
 
  const [visibility, setVsibility] = useState(7)
  return (
    <>
      {faq !== '' && (
        <div className="faqSetion" itemScope={true} itemType="https://schema.org/FAQPage">
          <div className="faq_row">
            <div className="accordion accordion-flush faqAccordion" id="accordionFlushExample">

              {faq != '1' && faq.map((item, key) => (

                <div key={key} className={`accordion-item my-accourdian-section ${key >=visibility?'d-none':'' }`} itemScope={true} itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h2 className="accordion-header" id={'flush-heading' + key} itemProp="name">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse' + key} aria-expanded="false" aria-controls={'flush-collapse' + key}>
                      {item.question}
                    </button>
                  </h2>
                  <div id={'flush-collapse' + key} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body" itemScope={true} itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div>
                        <div itemProp="text" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                      </div>
                    </div>
                  </div>
                </div>


              ))}

               {faq.length > 7 && (visibility < faq.length ?
             
             <button className="read-more-button" onClick={() => setVsibility(visibility + 7)}>
                 Read More
               </button>
               :
            
             <button className="show-less-button" onClick={() => setVsibility(7)}>
                 Show Less
               </button>
             )
}
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Faq;