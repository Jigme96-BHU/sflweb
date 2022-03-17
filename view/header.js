import Image from "next/image";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-button fixed-top navbar-transparency"
        style={{
          fontFamily: "bell",
          fontSize: "18px",
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        }}
        
      >
        <div className="container">
          <Image
            id="logo"
            src="/assets/img/logo.png"
            width={70}
            height={70}
          />
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Machines
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="machine">
                    Carpentry lab
                  </a>
                  <a className="dropdown-item" href="electronic">
                    Electronic lab
                  </a>
                  <a className="dropdown-item" href="heaveymachine">
                    Heavy machinary lab
                  </a>
                  <a className="dropdown-item" href="metal">
                    Metal works lab
                  </a>
                  <a className="dropdown-item" href="frontbooking">
                    Booking
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  Programs{" "}
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="program">
                    Education program
                  </a>
                  <a className="dropdown-item" href="trainingprogram">
                    Training program
                  </a>
                  <a className="dropdown-item" href="research">
                    Research and Development
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="service">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="announ">
                  News And Events
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  About us
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="about">
                    The story of sfl
                  </a>
                  <a className="dropdown-item" href="team">
                    Meet the team
                  </a>
                  <a className="dropdown-item" href="about">
                    Virtual tour
                  </a>
                  <a className="dropdown-item" href="gallery">
                    Gallery
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
