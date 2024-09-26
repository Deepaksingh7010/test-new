import React from "react";

function Home() {
  return (
    <div>
      <div class="container-fluid bg-dark px-0">
        <div class="row gx-0">
          <div class="col-lg-3 bg-dark d-none d-lg-block">
            <a
              href="index.html"
              class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 class="m-0 display-4 text-primary text-uppercase">Gymster</h1>
            </a>
          </div>
          <div class="col-lg-9">
            <div class="row gx-0 bg-secondary d-none d-lg-flex">
              <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                  <i class="fa fa-envelope text-primary me-2"></i>
                  <h6 class="mb-0">info@example.com</h6>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-2">
                  <i class="fa fa-phone-alt text-primary me-2"></i>
                  <h6 class="mb-0">+012 345 6789</h6>
                </div>
              </div>
              <div class="col-lg-5 px-5 text-end">
                <div class="d-inline-flex align-items-center py-2">
                  <a
                    class="btn btn-light btn-square rounded-circle me-2"
                    href=""
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    class="btn btn-light btn-square rounded-circle me-2"
                    href=""
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    class="btn btn-light btn-square rounded-circle me-2"
                    href=""
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="btn btn-light btn-square rounded-circle me-2"
                    href=""
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                <a class="btn btn-light btn-square rounded-circle" href="">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0 px-lg-5">
              <a href="index.html" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-4 text-primary text-uppercase">
                  Gymster
                </h1>
              </a>
              <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div class="navbar-nav mr-auto py-0">
                  <a href="index.html" class="nav-item nav-link active">
                    Home
                  </a>
                  <a href="about.html" class="nav-item nav-link">
                    About
                  </a>
                  <a href="class.html" class="nav-item nav-link">
                    Classes
                  </a>
                  <a href="team.html" class="nav-item nav-link">
                    Trainers
                  </a>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div class="dropdown-menu rounded-0 m-0">
                      <a href="blog.html" class="dropdown-item">
                        Blog Grid
                      </a>
                      <a href="detail.html" class="dropdown-item">
                        Blog Detail
                      </a>
                      <a href="testimonial.html" class="dropdown-item">
                        Testimonial
                      </a>
                    </div>
                  </div>
                  <a href="contact.html" class="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <a
                  href=""
                  class="btn btn-primary py-md-3 px-md-5 d-none d-lg-block"
                >
                  Join Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src={require("../img/carousel-1.jpg")} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase">Best Gym Center</h5>
                  <h1 class="display-2 text-white text-uppercase mb-md-4">
                    Build Your Body Strong With Gymster
                  </h1>
                  <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">
                    Join Us
                  </a>
                  <a href="" class="btn btn-light py-md-3 px-md-5">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src={require("../img/carousel-2.jpg")} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h5 class="text-white text-uppercase">Best Gym Center</h5>
                  <h1 class="display-2 text-white text-uppercase mb-md-4">
                    Grow Your Strength With Our Trainers
                  </h1>
                  <a href="" class="btn btn-primary py-md-3 px-md-5 me-3">
                    Join Us
                  </a>
                  <a href="" class="btn btn-light py-md-3 px-md-5">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container-fluid p-5">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded"
                src="img/about.jpg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="mb-4">
              <h5 class="text-primary text-uppercase">About Us</h5>
              <h1 class="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
            </div>
            <h4 class="text-body mb-4">
              Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
              no labore lorem sit clita duo justo magna dolore
            </h4>
            <p class="mb-4">
              Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea
              duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut
              sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et
              stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore
              lorem.
            </p>
            <div class="rounded bg-dark p-5">
              <ul class="nav nav-pills justify-content-between mb-3">
                <li class="nav-item w-50">
                  <a
                    class="nav-link text-uppercase text-center w-100 active"
                    data-bs-toggle="pill"
                    href="#pills-1"
                  >
                    About Us
                  </a>
                </li>
                <li class="nav-item w-50">
                  <a
                    class="nav-link text-uppercase text-center w-100"
                    data-bs-toggle="pill"
                    href="#pills-2"
                  >
                    Why Choose Us
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-1">
                  <p class="text-secondary mb-0">
                    Tempor erat elitr at rebum at at clita aliquyam consetetur.
                    Diam dolor diam ipsum et, tempor voluptua sit consetetur
                    sit. Aliquyam diam amet diam et eos sadipscing labore. Clita
                    erat ipsum et lorem et sit, sed stet no labore lorem sit.
                    Sanctus clita duo justo et tempor consetetur takimata
                    eirmod, dolores takimata consetetur invidunt magna dolores
                    aliquyam dolores dolore. Amet erat amet et magna
                  </p>
                </div>
                <div class="tab-pane fade" id="pills-2">
                  <p class="text-secondary mb-0">
                    Tempor erat elitr at rebum at at clita aliquyam consetetur.
                    Diam dolor diam ipsum et, tempor voluptua sit consetetur
                    sit. Aliquyam diam amet diam et eos sadipscing labore. Clita
                    erat ipsum et lorem et sit, sed stet no labore lorem sit.
                    Sanctus clita duo justo et tempor consetetur takimata
                    eirmod, dolores takimata consetetur invidunt magna dolores
                    aliquyam dolores dolore. Amet erat amet et magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
