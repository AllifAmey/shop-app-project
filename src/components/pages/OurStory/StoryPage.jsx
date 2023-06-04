import { useOutletContext } from "react-router-dom";
import StoryPageDesktop from "./StoryPageDesktop";
import StoryPageTablet from "./StoryPageTablet";
import StoryPageMobile from "./StoryPageMobile";

function StoryPage() {
  /*
    
    docs:
    The main component is wrapped around the animation component to bring out the animation.
    The layout logic is based solely on flexbox. On Mobile the flexbox is column.

    future plans:

    Perhaps later showcasing the educational profile of the site's owner should be added.


  */
  const context = useOutletContext();
  return (
    <>
      {context.isDesktop && <StoryPageDesktop />}
      {context.isTablet && <StoryPageTablet />}
      {context.isMobile && <StoryPageMobile />}
    </>
  );
}

export default StoryPage;
