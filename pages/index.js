import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super Fab Lab</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="video-background-holder" style={{ minHeight: "35rem" }}>
          <div className="video-background-overlay"></div>
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src="assets/img/3d.mp4" type="video/mp4" />
          </video>
          <div className="video-background-content container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <Image
                  src="/assets/img/logo.png"
                  alt="logo"
                  height={175}
                  width={175}
                />
                <h1
                  className="display-4"
                  style={{
                    paddingTop: "18px",
                    color: "#fff",
                    fontSize: "3rem",
                  }}
                >
                  Welcome To Super FabLab
                </h1>
                <p
                  className="lead mb-0"
                  style={{ fontFamily: "bell", color: "#fff" }}
                >
                  Inspire the future of learning and creating. Provide digital
                  design tools to ignite a culture of innovation.
                </p>
                <br />
                <a
                  href="register"
                  className="joinbtn"
                  style={{ color: "#fff" }}
                >
                  Join Us Today!
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div
          className="about-us"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <div>
            <header>
              <h1 style={{ fontSize: "2.8rem" }}>
                <b>About Us</b>
              </h1>
            </header>
          </div>
          <div className="about-us">
            <div
              className="row no-gutters"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                padding: "2.5rem",
                marginRight: "3rem",
                marginLeft: "3rem",
                borderRadius: "40px",
              }}
            >
              <div className="col-md-4">
                <div className="img" style={{ backgroundSize: "cover" }}>
                  <Image
                    src="/assets/img/logo.png"
                    alt="logo"
                    layout="fill"
                    height={260}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 style={{ fontSize: "1.5rem", textAlign: "center" }}>
                    Vision
                  </h4>
                  <p
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    “Inspire the future of learning and creating”
                  </p>
                  <h4 style={{ fontSize: "1.5rem", textAlign: "center" }}>
                    Mission
                  </h4>
                  <p
                    style={{
                      color: "black",
                      textAlign: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    “Provide digital design tools to ignite a culture of
                    innovation”
                  </p>
                  <hr />
                  <h6
                    className="text-muted mb-2 ml-2"
                    style={{
                      textAlign: "center",
                      fontSize: "1.2rem",
                      color: "black",
                      fontFamily: "bell",
                    }}
                  >
                    The Bhutan Super FabLab is an open platform for learning and
                    innovation; a place to play, learn, mentor, collaborate, and
                    create.Located at Thimphu Tech Park, it is the 2nd Super Fab
                    Lab in the world, providing unique digital fabrication tools
                    and services to its community.It currently consists of four
                    different labs - focused on metalwork, carpentry,
                    electronics production, and industrial graded work.Join us
                    in our journey to learn and create almost anything.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Learn"
          style={{ textAlign: "center", margin: "2.6rem 0" }}
        >
          <div>
            <header>
              <h1 style={{ color: "#f7dc49", fontSize: "2.8rem" }}>
                <b>Learn</b>
              </h1>
              <h4 style={{ marginTop: "-8px" }}>To Make Almost Anything</h4>
            </header>
          </div>
        </div>
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div
                className="card"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="150"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="card_image">
                  <Image
                    src="/assets/img/printer1.jpg"
                    height={250}
                    layout="fill"
                    alt="printer1"
                    style={{ borderRadius: "2rem" }}
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Education</h2>
                  <hr />
                  <p className="card_text">
                    Education programs are developed to equip the next
                    generation with the necessary skills and knowledge in the
                    field of technology and digital fabrication.
                    <br />
                    Here are some of our programs: <br />
                    <ul
                      style={{
                        fontFamily: "bell",
                        fontSize: "1rem",
                        color: "gray",
                      }}
                    >
                      <li>STEM program</li>
                      <li>Fab academy ( 2023 onwards)</li>
                      <li>Machining program</li>

                      <li>Internship programs</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />

                  <a href="program" className="joinbtn">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div
                className="card"
                data-aos="zoom-in"
                data-aos-duration="900"
                data-aos-delay="250"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="card_image">
                  <Image
                    src="/assets/img/laser.jpg"
                    height={250}
                    layout="fill"
                    alt="laser"
                    style={{ borderRadius: "2rem" }}
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Professional Development</h2>
                  <hr />
                  <p className="card_text">
                    SFL will offer trainings, workshops, and seminars, all
                    focused on professional development, and building the skills
                    and capacity for digital designing and fabrication.
                    <br />
                    Here are some of the training:
                    <br />
                    <ul
                      style={{
                        fontFamily: "bell",
                        fontSize: "1rem",
                        color: "gray",
                      }}
                    >
                      <li>How to design for and use the machine</li>
                      <li> Design thinking and product design</li>
                      <li> Workshops, seminars, and tech talks</li>
                    </ul>
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href="trainingprogram" className="joinbtn">
                    Read more
                  </a>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div
                className="card"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="300"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div className="card_image">
                  <Image
                    src="/assets/img/molding.jpg"
                    height={250}
                    layout="fill"
                    alt="molding"
                    style={{ borderRadius: "2rem" }}
                  />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Research And Collaboration</h2>
                  <hr />
                  <p className="card_text">
                    There is a huge potential for enabling research through the
                    SFL platform. The lab currently enables innovation,
                    invention, and prototyping. To foster a culture of learning,
                    applicable and sustainable in-house research is encouraged.
                    SFL is also open to collaborations with like-minded
                    organizations and individuals.
                    <ul
                      style={{
                        fontFamily: "bell",
                        fontSize: "1rem",
                        color: "gray",
                      }}
                    >
                      <li>In-house ventures</li>
                      <li>EV project</li>
                      <li>Drone development project</li>
                      <li>Start-ups incubations</li>
                      <li>Collaboration with universities and institutes.</li>
                    </ul>{" "}
                  </p>
                  <a href="research" className="joinbtn">
                    Read more
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="Learn"
          style={{ textAlign: "center", margin: "2.6rem 0" }}
        >
          <div>
            <header>
              <h1 style={{ color: "#f17b59", fontSize: "2.8rem" }}>
                <b>Create</b>
              </h1>
              <h4 style={{ marginTop: "-8px" }}>
                Through Digital Tools And Open Community Ecosystem
              </h4>
            </header>
          </div>
        </div>
        <div
          className="container"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "2rem 0",
            borderRadius: "40px",
          }}
        >
          <section>
            <div
              id="w_shop_105"
              className="carousel slide w_shop_105_indicators w_shop_105_control_button thumb_scroll_x swipe_x ps_easeOutInCubic"
              data-duration="2000"
              data-bs-ride="carousel"
              data-bs-pause="hover"
              data-bs-interval="8000"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  style={{ filter: "blur(0px)" }}
                  data-bs-target="#w_shop_105"
                  data-bs-slide-to="0"
                ></li>
                <li data-bs-target="#w_shop_105" data-bs-slide-to="1"></li>
                <li data-bs-target="#w_shop_105" data-bs-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <Image
                    src="/assets/img/shopbot.jpg"
                    alt="w_shop_105_01"
                    height={350}
                    width={300}
                  />
                  <div className="w_shop_105_left_box">
                    <span
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell" }}
                    >
                      Carpentry Lab
                    </span>
                    <h1
                      className="left-h"
                      style={{ paddingRight: "250px" }}
                      data-animation="animated fadeInLeft"
                    >
                      ShopBot
                    </h1>
                    <p
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell", fontSize: "14px" }}
                    >
                      Uses advanced technology of CNC cutting, drilling, carving
                      and machining. It has full production performance in the
                      digital fabrication of wood, plastic, aluminum and other
                      materials.
                    </p>
                    <a
                      href="machine"
                      className="joinbtn"
                      style={{ fontFamily: "bell" }}
                    >
                      Read more
                    </a>
                  </div>
                  <div
                    className="w_shop_105_right_box"
                    data-animation="animated fadeInRight"
                  >
                    <ul>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Step resolution of 0.010mm
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Linear cutting force of
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        XY Move Speed(with full{" "}
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        max .15.2 m/min
                      </li>
                      {/* <li data-animation="animated fadeInRight" style={{fontFamily: "bell"; fontSize: "16px"}}>Validation </li> */}
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/tro.jpg"
                    alt="w_shop_105_02"
                    height={350}
                    width={300}
                  />
                  <div className="w_shop_105_left_box">
                    <span
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell" }}
                    >
                      Metal work Lab
                    </span>
                    <h1
                      className="left-h"
                      data-animation="animated fadeInLeft"
                      style={{ marginLeft: "-100px" }}
                    >
                      Laser cutter Speedy 100
                    </h1>
                    <p
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell", fontSize: "14px" }}
                    >
                      Speedy 100 only has a CO2 laser source but also allows you
                      to work with a wide variety of materials Can work with
                      wide variety of materials like acrylic, glass, fabric,
                      papers, stones and woods.
                    </p>
                    <a
                      href="metal"
                      className="joinbtn"
                      style={{ fontFamily: "bell" }}
                    >
                      Read more
                    </a>
                  </div>
                  <div
                    className="w_shop_105_right_box"
                    data-animation="animated fadeInRight"
                  >
                    <ul>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Overall dimensions (W x D1 x H)
                        <br />
                        :1428 x 952 x 1050 mm
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Max. height of workpiece 305 mm
                        <br />
                        with CO2 and 283 mm with fibre
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Laser power: CO2 : 60 - 250 watts
                        <br /> Fiber: 20 - 50 watts
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <Image
                    src="/assets/img/mechantronika.jpg"
                    alt="w_shop_105_03"
                    height={350}
                    width={300}
                  />
                  <div className="w_shop_105_left_box">
                    <span
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell" }}
                    >
                      Electronic Lab
                    </span>
                    <h1
                      className="left-h"
                      data-animation="animated fadeInLeft"
                      style={{ marginLeft: "-20px" }}
                    >
                      Mechatronika M10 Pick and Place{" "}
                    </h1>
                    <p
                      data-animation="animated fadeInLeft"
                      style={{ fontFamily: "bell", fontSize: "14px" }}
                    >
                      The G3 Cutter is a precision machine. From the innovative
                      drive system to the blade, all components are perfectly
                      coordinated.{" "}
                    </p>
                    <a
                      href="electronic"
                      className="joinbtn"
                      style={{ fontFamily: "bell" }}
                    >
                      Read more
                    </a>
                  </div>
                  <div
                    className="w_shop_105_right_box"
                    data-animation="animated fadeInRight"
                  >
                    <ul>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Vision centering{" "}
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Fully automated placing
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Solder paste dispensing head
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        Automatic change of nozzles
                      </li>
                      <li
                        data-animation="animated fadeInRight"
                        style={{ fontFamily: "bell", fontSize: "16px" }}
                      >
                        {" "}
                        Automatic fiducials correction
                        <br />
                        and bad mark sensing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />

      <div
        className="Learn"
        style={{ textAlign: "center", margin: "2.6rem 0" }}
      >
        <div>
          <header>
            <h1 style={{ color: "#3b70b4", fontSize: "2.8rem" }}>
              <b>Collaborate</b>
            </h1>
            <h4 style={{ marginTop: "-8px" }}>In An Innovative Space</h4>
          </header>
        </div>
      </div>
      <section>
        <div className="container">
          <figure
            className="snip1563"
            style={{
              borderRadius: "20px",
              marginRight: "50px",
              height: "60%",
              width: "700px",
            }}
          >
            <Image src="/assets/img/b3.jpg" alt="sample110" layout="fill" />
            <figcaption>
              <h4> Work with us as a Volunteer</h4>
              <p style={{ color: "#fff" }}>
                Get a chance to become a part of SFL and get work experience.It
                is an opportunity to get free access to the facilities provided
                by SFL.
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure
            className="snip1563"
            style={{
              borderRadius: "30px",
              marginRight: "58px",
              height: "60%",
              width: "700px",
            }}
          >
            <Image src="/assets/img/b5.jpg" alt="sample110" layout="fill" />
            <figcaption>
              <h4>Apply for Internships </h4>
              <p style={{ color: "#fff" }}>
                SFL is a great place to learn and get exposure.You will be able
                to do research and projects with our staff and even our
                collaborators.
              </p>
            </figcaption>
            <a href="#"></a>
          </figure>

          <figure
            className="snip1563"
            style={{
              borderRadius: "20px",
              marginRight: "30px",
              backgroundColor: "#f7dc49",
            }}
          >
            <Image src="/assets/img/sensor.jpg" alt="sample59" layout="fill" />
            <figcaption>
              <h4>Become a Member </h4>
              <p style={{ color: "#fff" }}>
                We have great membership plans :<br />
                SFL Youth
                <br />
                SFL Community
                <br />
                SFL creator
                <br />
                SFl Business
              </p>
            </figcaption>
            <a href="register"></a>
          </figure>
        </div>
      </section>
      <br />
      <br />

      <div className="container">
        <h1
          style={{
            textAlign: "center",
            padding: "10px",
            margin: "6px",
            fontSize: "2.8rem",
          }}
        >
          <b>Visit Us!!!</b>
        </h1>
      </div>

      <section className="features-boxed" style={{ color: "#fff" }}>
        <div className="container">
          <div className="intro"></div>
          <div
            className="row justify-content-center features"
            style={{ color: "#fff", background: "#fff", padding: "23px 0px" }}
          >
            <div
              className="col-sm-9 col-md-8 col-lg-7 item"
              style={{ boxShadow: "0px 0px 3px 5px" }}
            >
              <div
                className="box"
                data-bss-hover-animate="pulse"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <i className="fa fa-clock-o icon"></i>
                <h3
                  className="name"
                  style={{
                    color: "black",
                    fontFamily: "bell",
                    fontSize: "2rem",
                  }}
                >
                  When
                </h3>
                <p
                  className="description"
                  style={{ color: "grey", fontSize: "1.1rem" }}
                >
                  Monday to Friday: 9:00 AM -6:00 PM
                  <br />
                  Saturday and Sunday:
                  <br /> Open hours you can walk in anytime for a lab visit. You
                  can also book a schedule to use a specific machine at a
                  suitable time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <h1
          style={{
            textAlign: "center",
            padding: "18px",
            margin: "6px",
            fontSize: "2.8rem",
          }}
        >
          <b>News And Events</b>
        </h1>
      </div>

      <div
        className="header-container"
        style={{
          backgroundImage: "url(assets/img/see.jpg)",
          paddingTop: "100px",
          paddingBottom: "5rem",
        }}
      >
        <div className="container">
          <div className="col-md-6 offset-md-3 header-title">
            <h1
              className="text-center"
              style={{ color: "#ffffff", fontFamily: "bell", fontSize: "2rem" }}
            >
              Covid 19 Protocol
            </h1>
            <p
              style={{
                fontFamily: "bell",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              New covid varient omicron is coming to bhutan and we people should
              be warned.
            </p>
            <a
              href="announ"
              className="joinbtn"
              style={{ marginLeft: "40%", color: "#fff" }}
            >
              Update more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
