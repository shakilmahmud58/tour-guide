import { Carousel } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const TopBanner =()=>{
    const { user } = useAuth();
    return (
       <>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/JChmnfH/tour1.jpg"
      alt="First slide"
      height="400px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://i.ibb.co/58HDfhs/tour2.jpg"
      alt="Third slide"
      height="400px"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/2NZb1tH/tour3.jpg"
      alt="Third slide"
      height="400px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
       </>
   )
}
export default TopBanner;