import { useOutletContext } from "react-router-dom";
import StoryPageDesktop from "./StoryPageDesktop";
import StoryPageTablet from "./StoryPageTablet";
import StoryPageMobile from "./StoryPageMobile";

function StoryPage() {
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
