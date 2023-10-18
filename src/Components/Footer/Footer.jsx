import "./Footer.css";
const Footer = () => {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">About us</div>
            <p>
              CodingLab is a channel where you can learn HTML, CSS, and also
              JavaScript along with creative CSS Animations and Effects.
            </p>
          </div>
          <div className="lower">
            <div className="topic">Contact us</div>
            <div className="phone">
              <a href="#">
                <i className="fas fa-phone-volume"></i>+007 9089 6767
              </a>
            </div>
            <div className="email">
              <a href="#">
                <i className="fas fa-envelope"></i>abc@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">Our Services</div>
          <div>
            <a href="#">Web Design, Development</a>
          </div>
          <div>
            <a href="#">Web UX Design, Reasearch</a>
          </div>
        </div>
        <div className="right box">
          <div className="topic">Subscribe us</div>
          <form action="#">
            <input type="text" placeholder="Enter email address" />
            <input type="submit" name="" value="Send" className="btn btn-outline-success" />
            <div className="media-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
        <div className="bottom">
          <p>
            Copyright &copy;   {year} CodingLab  All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
