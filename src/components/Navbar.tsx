import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <BsNavbar sticky="top" className="shadow-sm mb-3 bg-light">
      <Container>
        <Nav className="me.auto  ">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 512 512"
          >
            <title>wheel-cart-glyph</title>
            <path d="M430.08,450.56a41,41,0,1,1-41-41A41,41,0,0,1,430.08,450.56Zm-204.8-41a41,41,0,1,0,41,41A41,41,0,0,0,225.28,409.6Zm-81.52-57.42a20.48,20.48,0,0,0,1,3.48c.2.52.49,1,.73,1.48s.51,1.15.84,1.68.72,1,1.08,1.48.62.92,1,1.33.76.73,1.13,1.1.87.91,1.36,1.31c.33.27.71.48,1.06.73a20.56,20.56,0,0,0,1.8,1.22c.34.19.71.32,1.06.49a20.37,20.37,0,0,0,2.08,1c.57.2,1.17.32,1.76.47s1.06.33,1.61.43a20.3,20.3,0,0,0,3.55.31H450.56a20.48,20.48,0,0,0,20.08-16.46l17.19-85.94H126.57Zm363.6-221.8a20.47,20.47,0,0,0-15.84-7.5H139.67L122.48,36.94A20.48,20.48,0,0,0,102.4,20.48H20.48a20.48,20.48,0,0,0,0,41H85.61l32.77,163.84H496l15.58-77.9A20.46,20.46,0,0,0,507.36,130.38Z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "#fff",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: "0",
              right: "0",
              transform: "translate(30%, 30%)",
            }}
          >
            2
          </div>
        </Button>
      </Container>
    </BsNavbar>
  );
}
