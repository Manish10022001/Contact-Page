import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactPage = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">Contact Nazario</h1>
        <p className="text-muted lead">
          We’re here to help you find the perfect eyewear. Reach out with any
          questions or visit us in-store.
        </p>
      </div>

      <div className="row g-5">
        {/* Contact Form */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title mb-4">Send Us a Message</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map & Info */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Our Showroom</h5>
              <p className="mb-2">
                <strong>Nazario Optical</strong>
              </p>
              <p className="mb-2">
                Renuka Nagar,
                <br />
                Akola, Maharashtra 444002
              </p>
              <p className="mb-2">
                📞{" "}
                <a href="tel:+911234567890" className="text-decoration-none">
                  +91 12345 67890
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:care@nazario.com"
                  className="text-decoration-none"
                >
                  care@nazario.com
                </a>
              </p>
            </div>
          </div>

          {/* Embedded Map  */}
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7789081.881100919!2d70.9447756745587!3d17.590259008836707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7317b81370bb3%3A0xe935e97e13ed4c5c!2sNazario!5e0!3m2!1sen!2sin!4v1753254996012!5m2!1sen!2sin"
              title="Nazario Map"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>

          {/* Social Media */}
          <div className="d-flex justify-content-around">
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-instagram fs-4"></i> Instagram
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-tiktok fs-4"></i> TikTok
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-youtube fs-4"></i> YouTube
            </a>
            <a href="#" className="text-dark text-decoration-none">
              <i className="bi bi-pinterest fs-4"></i> Pinterest
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
