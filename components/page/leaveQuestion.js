
import { useState } from "react";
import Image from "next/image";
const LeaveQuestion = ({ faq }) => {
  const [toggle, setToggle] = useState(false);

  const toggleUpdate = () => {
    setToggle(current => !current);
  };

  return (
    <>
      <div className="faq-content-section">
        <div className="faq-content-heading">
        {
         faq !== '' &&  faq !== undefined &&  faq.length>0 &&<>
         
         <span className="title-img"><Image src="/images/icon/faqicon.webp" width ={100} height={100}  alt="Leave Your Question" loading = 'lazy'/></span>
          
             <h2 className="mb-2">FREQUENTLY ASKED QUESTIONS</h2>

             </>
          }

        </div>
      </div>
    </>
  )
}

export default LeaveQuestion