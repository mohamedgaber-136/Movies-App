import { Link } from 'react-router-dom';
import './notfound.css'
import { Helmet } from 'react-helmet';
export default function NotFound() {
  return (
    <>
    <Helmet>
      <title>NotFound</title>
    </Helmet>
    <section className="page_404 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to={'/'} className="link_404 bg-danger rounded ">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
