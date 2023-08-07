import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux'
import { resetState  } from './../../store/slices/filterSlice';
import { useEffect, useState } from 'react';
const ProductSection = dynamic(() => import('./productSection'));
const ReferEarn = dynamic(() => import('./referEarnSection'));
const ReferloanSpecification = dynamic(() => import('./referloanSpecification'));
const CalculatorSection = dynamic(() => import('./calculatorSection'));
const EligibilitySection = dynamic(() => import('./eligibilitySection'));
const ImpactSection = dynamic(() => import('./impactSection'));
const MobileApp = dynamic(() => import('./mobileApp'));
const Testimonial = dynamic(() => import('./testimonial'));
const BestOffer = dynamic(() => import('./bestOffer'));

const MainHome = (props) => {
  const [status, setStatus] = useState(false);
  const [calculaterSection, setCalculaterSection] = useState(false);
  const [bestOfferSection, setBestOfferSection] = useState(false);
  const [eligibilitySection, setEligibilitySection] = useState(false);
  const [mobieAppSection, setMobieAppSection] = useState(false);
  const [impactSectionSection, setImpactSectionSection] = useState(false);
  const [testimonialSection, setTestimonialSection] = useState(false);
  const [referloanSpeciFication, setReferloanSpeciFication] = useState(false);
  const [referErn, setReferErn] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          switch (targetId) {
            case 'calculaterSection':
              setCalculaterSection(true);
              break;
            case 'bestofferSection':
              setBestOfferSection(true);
              break;
            case 'eligibilitySection':
              setEligibilitySection(true);
              break;
            case 'mobileSection':
              setMobieAppSection(true);
              break;
            case 'impactSection':
              setImpactSectionSection(true);
              break;
            case 'testimonialSection':
              setTestimonialSection(true);
              break;
            case 'referloanSpecificationSection':
              setReferloanSpeciFication(true);
              break;
            case 'referErnSection':
              setReferErn(true);
              break;
            default:
              break;
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerRef = new IntersectionObserver(handleIntersection, observerOptions);

    const observeElement = (elementId) => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        observerRef.observe(targetElement);
      }
    };

    observeElement('calculaterSection');
    observeElement('bestofferSection');
    observeElement('eligibilitySection');
    observeElement('mobileSection');
    observeElement('impactSection');
    observeElement('testimonialSection');
    observeElement('referloanSpecificationSection');
    observeElement('referErnSection');
    dispatch(resetState())
    return () => observerRef.disconnect();
  }, []);

  return (
    <>
        <ProductSection  />
        <ReferloanSpecification status={referloanSpeciFication} />
        <ReferEarn status={referErn} />
        <BestOffer status={bestOfferSection} />
        <CalculatorSection status={calculaterSection} />
        <EligibilitySection status={eligibilitySection} />
        <MobileApp status={mobieAppSection} />
        <ImpactSection status={impactSectionSection} />
        <Testimonial status={testimonialSection} testimonial={props.testimonial} />
    </>
  );
};

export default MainHome;
