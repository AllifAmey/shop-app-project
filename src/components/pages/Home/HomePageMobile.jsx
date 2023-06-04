import MainSectionMobile from "./utility/Mobile/MainSectionMobile";
import ProductSectionMobile from "./utility/Mobile/ProductSectionMobile";
import ValuesSectionMobile from "./utility/Mobile/ValuesSectionMobile";
import LocationMobile from "./utility/Mobile/LocationMobile";
import { useInView } from "react-intersection-observer";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";

function HomePageMobile(props) {
  /*
  docs - 
    Read HomePage.jsx docs
  
  */
  const { ref, inView } = useInView({
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <>
      <AnimatedPopUpPage>
        <MainSectionMobile />
        <ValuesSectionMobile></ValuesSectionMobile>
        <span ref={ref}>
          {inView ? <ProductSectionMobile></ProductSectionMobile> : null}
        </span>
        <LocationMobile weatherIcon={props.loadedWeather}></LocationMobile>
      </AnimatedPopUpPage>
    </>
  );
}

export default HomePageMobile;
