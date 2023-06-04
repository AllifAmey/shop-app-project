import MainSectionTablet from "./utility/Tablet/MainSectionTablet";
import ProductSectionTablet from "./utility/Tablet/ProductSectionTablet";
import ValuesSectionTablet from "./utility/Tablet/ValuesSectionTablet";
import LocationTablet from "./utility/Tablet/LocationTablet";
import { useInView } from "react-intersection-observer";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";

function HomePageTablet(props) {
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
        <MainSectionTablet />
        <ValuesSectionTablet></ValuesSectionTablet>
        <span ref={ref}>
          {inView ? <ProductSectionTablet></ProductSectionTablet> : null}
        </span>
        <LocationTablet weatherIcon={props.loadedWeather}></LocationTablet>
      </AnimatedPopUpPage>
    </>
  );
}

export default HomePageTablet;
