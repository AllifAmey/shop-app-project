import { useOutletContext } from "react-router-dom";
import StoryPageDesktop from "./StoryPageDesktop";
import StoryPageTablet from "./StoryPageTablet";
import StoryPageMobile from "./StoryPageMobile";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Our Story</title>
        <meta
          name="description"
          content="Why we created UniqueShopGB and what brought us to Jewellery and art."
        />
        <link rel="canonical" href="/story" />
      </Helmet>
      {context.isDesktop && <StoryPageDesktop />}
      {context.isTablet && <StoryPageTablet />}
      {context.isMobile && <StoryPageMobile />}
    </>
  );
}

export default StoryPage;
