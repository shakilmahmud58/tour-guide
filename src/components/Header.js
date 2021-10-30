import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header =()=> {
    const {user, logOut } = useAuth();
  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand as={Link} to="/home">Tourist Guide</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="/additem">Add Place</Nav.Link>
    <Nav.Link as={Link} to="/mylists">My List</Nav.Link>
    <Nav.Link as={Link} to="/all_lists">Overall List</Nav.Link> 
      {user ? 
         <Navbar>
            <Navbar.Text>
            Signed in as : {user}
          </Navbar.Text>
          <button className="btn btn-danger ms-2" onClick={logOut}>Logout</button>
         </Navbar>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }    


    </Navbar.Collapse>
    </Container>
    </Navbar>

    </>
  );
}

export default Header;
