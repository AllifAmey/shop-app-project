import MainSectionDesktop from "./utility/Desktop/MainSectionDesktop";
import ProductSectionDesktop from "./utility/Desktop/ProductSectionDesktop";
import ValuesSectionDesktop from "./utility/Desktop/ValuesSectionDesktop";
import LocationDesktop from "./utility/Desktop/LocationDesktop";
import { useInView } from "react-intersection-observer";
import AnimatedPopUpPage from "../../utility/AnimatedPopUpPage";

/*
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f22e96be8bc2cc5785b_6002086f72b7277a6401e43e_sobremesa.jpeg - look at the white arrow at the bottom. Maybe add that.
https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f2158f4bbbcec10c88f_6002086f72b727f54401e412_space-posters.jpeg - look at the bottom right , add that most likely

https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f23208b459df8790224_6002086f72b7270da901e44a_personalized-cans.jpeg - maybe as inspiration ? Not sure. 

!IMPORTANT FEATURE TO ADD:

Add video to the homepage to show examples of making the jewellery.
*/

function HomePageDesktop(props) {
  /*
  docs - 
    Logic for layout - 
    essentially the image is placed in the center of a 90vh 100% container
    Another container is overlapped in that which contains the exact length and height of the image container
    This particular container that overlaps the image is used to darken the image
    On top of the image layer another layer is overlapped called center-container and location-container,
    these two containers are the text that overlaps the darken sunk background to give the illusion of ,
    the text being lifted up, the z-index is important as it directly lifts the importance of the background.

  future - 
    possible improvements could be the styling of the button but other than that not much.
  
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
