import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineCaretDown,AiOutlineCaretUp } from "react-icons/ai";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./movies-removebg-preview.webp";
import { Link } from "react-router-dom";
import { MovieContext } from "../../Context/MoviesContext.js";
import { useContext } from "react";
import "./Nav.css";
import { useLocation } from "react-router-dom";
export default function NavBar() {
  let { getSearchResult } = useContext(MovieContext);
  
  const location = useLocation();
  let Path = location.pathname;
  return (
    // Nav Comp ----------------------------------
    <Navbar expand="md">
      <Container>
        <Navbar.Brand className="text-white">
          <img src={logo} alt="Logo" width={"175px"} className="logoImg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <AiOutlineCaretDown className="text-white arrowDown"></AiOutlineCaretDown>
          <AiOutlineCaretUp className="text-white arrowup"></AiOutlineCaretUp>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="gap-lg-5 align-items-center gap-3 navParent ms-4">
            <Nav.Link
              className={
                Path == "/"
                  ? "homeIcon bg-danger rounded rounded-2  w-100"
                  : '"homeIcon bg-dark rounded rounded-2  w-100"'
              }
            >
              <div className="childIcon  d-flex justify-content-center bg-danger rounded rounded-2 ">
                <Link to="/" className={Path == "/" ? "bg-danger " : "bg-dark"}>
                  {" "}
                  <i
                    className={
                      Path == "/"
                        ? "fas bg-danger  fa-home fa-lg mb-1 text-white icon "
                        : "fas   fa-home fa-lg mb-1 text-white icon"
                    }
                  ></i>
                </Link>
              </div>
            </Nav.Link>
            <NavDropdown
              title="Movies"
              id="basic-nav-dropdown"
              className="text-white   "
            >
              <NavDropdown.Item href="#action/3.1">NowPlaying</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TopRated</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TvSeries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">NowPlaying</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TopRated</NavDropdown.Item>
            </NavDropdown>
            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              id="navSearch"
            >
              <div className="searchArea d-flex gap-2">
                <div className="search_bar  d-flex alig-items-center justif-content-center  gap-1 ">
                  <input
                    onChange={getSearchResult}
                    type="search"
                    placeholder="search "
                    id="seachNav"
                    className="searchArea"
                  />
                  <i className="fa fa-search" id="searchBtn"></i>
                </div>
              </div>
            </form>
            <Nav.Link>
              <Link className="LoginBtn text-dark bg-danger" to="#">
                LogIn
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
