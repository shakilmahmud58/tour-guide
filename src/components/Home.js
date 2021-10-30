import useAuth from "../hooks/useAuth";
import Gallery from "./Gallery";
import Places from "./Places";
import ReviewSection from "./ReviewSection";

import TopBanner from "./TopBanner";

const Home =()=>{
    const { user } = useAuth();
    return (
       <div>
           <TopBanner></TopBanner>
           <Places></Places>
           <ReviewSection></ReviewSection>
           <Gallery></Gallery>
       </div>
   )
}
export default Home;