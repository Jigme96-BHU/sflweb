import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col-md-4 footer-navigation">
            <a className="nav-link active" href="index.html">
              <Image src="/assets/img/dhi.png" width={155} height={120} />
            </a>
            <br />
            <br />
            <p style={{ color: "white" }}>
              Druk Holdings & Investments Limited
            </p>
          </div>
          <div className="col-md-4 footer-contacts">
            <h5>Contact us</h5>
            <div>
              <span className="fa fa-map-marker footer-contacts-icon"></span>
              <p>
                <span className="new-line-span">Thimphu, Bhutan</span> Tech Park
              </p>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-start">
                +975-2-336257/8
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"></i>
              <p>
                <a href="#" target="_blank">
                  DHI, drive@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-about">
            <h3 style={{ fontSize: "25px" }}>
              We'd love to hear
              <br />
              from you!
            </h3>
            <br />
            <a href="about" className="joinbtn" style={{ color: "#fff" }}>
              Stay In Touch
            </a>
            <div className="social-links social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ width: "100%", height: "3px" }} />
        <div className="row text-center">
          <p className="company-name" style={{ color: "white" }}>
            © Copyright 2022 DHI InnoTech. All rights reserved
          </p>
        </div>
      </footer>
      {/* <script src="assets/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/bs-init.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="assets/js/Swiper-Slider-Card-For-Blog-Or-Product.js"></script> */}
    </div>
  );
}
