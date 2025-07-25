import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
function ContactPage() {
  return (
    <>
      <div className="bg-gradient-light min-vh-100 position-relative">
        <div
          className="background-overlay position-absolute top-0 start-0 w-100"
          style={{
            height: "500px",
            background: "linear-gradient(135deg,  #4169e1 65%, #0f3460 100%)",
            zIndex: 0,
          }}
        ></div>

        <div
          className="container py-5 fade-in-up position-relative"
          style={{ zIndex: 1 }}
        >
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-white mb-3">
              Get in Touch with Nazario
            </h1>
            <p
              className="text-white fs-6 lead mx-auto"
              style={{ maxWidth: "600px" }}
            >
              We're here to help you find the perfect eyewear. Reach out with
              any questions or visit us in-store for a personalized
              consultation.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card card-hover shadow-lg border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4 d-flex align-items-center fw-semibold">
                    <i className="bi bi-envelope-fill text-primary me-2 fs-5"></i>
                    Send Us a Message
                  </h5>

                  <div>
                    <div className="mb-3">
                      <label className="form-label fw-medium text-dark">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-modern py-3"
                        placeholder="Your Full Name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium text-dark">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-modern py-3"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-medium text-dark">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        className="form-control form-control-modern py-3"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-medium text-dark">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        className="form-control form-control-modern"
                        rows="4"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      className={`btn btn-gradient-primary w-100 py-3 d-flex align-items-center justify-content-center `}
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact and Address */}
            <div className="col-lg-6">
              <div className="card card-hover shadow-lg border-0 h-100">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4 d-flex align-items-center fw-semibold">
                    <i className="bi bi-geo-alt-fill text-primary me-2 fs-5"></i>
                    Visit or Call Us
                  </h5>

                  <div className="mb-4">
                    <div className="contact-info-item d-flex align-items-start mb-3 p-2 rounded">
                      <i
                        className="bi bi-building-fill text-primary me-3 mt-1"
                        style={{ width: "20px" }}
                      ></i>
                      <div>
                        <strong className="d-block">Nazario Optical</strong>
                        <small className="text-muted">
                          Premium Eyewear Specialists
                        </small>
                      </div>
                    </div>

                    <div className="contact-info-item d-flex align-items-start mb-3 p-2 rounded">
                      <i
                        className="bi bi-geo-alt-fill text-primary me-3 mt-1"
                        style={{ width: "20px" }}
                      ></i>
                      <div>
                        <span>Renuka Nagar,</span>
                        <br />
                        <span>Akola, Maharashtra 444002</span>
                      </div>
                    </div>

                    <div className="contact-info-item d-flex align-items-center mb-3 p-2 rounded">
                      <i
                        className="bi bi-telephone-fill text-primary me-3"
                        style={{ width: "20px" }}
                      ></i>
                      <a
                        href="tel:+911234567890"
                        className="text-decoration-none text-dark"
                      >
                        +91 12345 67890
                      </a>
                    </div>

                    <div className="contact-info-item d-flex align-items-center mb-3 p-2 rounded">
                      <i
                        className="bi bi-envelope-fill text-primary me-3"
                        style={{ width: "20px" }}
                      ></i>
                      <a
                        href="mailto:care@nazario.com"
                        className="text-decoration-none text-dark"
                      >
                        care@nazario.com
                      </a>
                    </div>
                  </div>

                  <hr className="my-4" />
                  {/*Social Media Links */}
                  <h6 className="mb-3 fw-semibold">Follow Us</h6>
                  <div className="d-flex justify-content-start social-links-mobile">
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="social-link text-decoration-none d-flex align-items-center justify-content- mx-3 p-2 rounded"
                    >
                      <i className="bi bi-instagram fs-1 text-instagram"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="social-link text-decoration-none d-flex align-items-center justify-content-center mx-3 p-2 rounded"
                    >
                      <i className="bi bi-facebook fs-1 text-facebook"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="social-link text-decoration-none d-flex align-items-center justify-content-center mx-3 p-2 rounded"
                    >
                      <i className="bi bi-youtube fs-1 text-youtube"></i>
                    </a>
                    <a
                      href="#"
                      aria-label="X"
                      className="social-link text-decoration-none d-flex align-items-center justify-content-center mx-3 p-2 rounded"
                    >
                      <i className="bi bi-twitter fs-1 text-x"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card card-hover shadow-lg border-0">
                <div className="card-body p-4 ">
                  <h5 className="card-title mb-4 d-flex align-items-center fw-semibold">
                    <i className="bi bi-map-fill text-primary me-2 fs-5"></i>
                    Find Us Here
                  </h5>
                  <div className="map-rounded shadow-lg mb-3">
                    <div
                      className="ratio ratio-16x9"
                      style={{ height: "300px" }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.0057975903105!2d76.97570467365279!3d20.70998918086078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7317b81370bb3%3A0xe935e97e13ed4c5c!2sNazario!5e0!3m2!1sen!2sin!4v1753257518229!5m2!1sen!2sin"
                        title="Nazario Optical Location"
                        loading="lazy"
                        style={{ border: 0, height: "100%" }}
                        allowFullScreen
                        className="map-rounded"
                      ></iframe>
                    </div>
                  </div>
                  <p className="text-center ">
                    Follow us on social media or visit us in store today!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
