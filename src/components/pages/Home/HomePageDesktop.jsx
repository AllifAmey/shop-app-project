import MainSectionDesktop from "./utility/Desktop/MainSectionDesktop";
import ProductSectionDesktop from "./utility/Desktop/ProductSectionDesktop";
import ValuesSectionDesktop from "./utility/Desktop/ValuesSectionDesktop";
import LocationDesktop from "./utility/Desktop/LocationDesktop";
import { useInView } from "react-intersection-observer";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";

function HomePageDesktop(props) {
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
        <MainSectionDesktop />
        <ValuesSectionDesktop></ValuesSectionDesktop>
        <span ref={ref}>
          {inView ? <ProductSectionDesktop></ProductSectionDesktop> : null}
        </span>
        <LocationDesktop weatherIcon={props.loadedWeather}></LocationDesktop>
      </AnimatedPopUpPage>
    </>
  );
}

export default HomePageDesktop;
