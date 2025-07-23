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
                456 Vision Blvd
                <br />
                Beverly Hills, CA 90210
              </p>
              <p className="mb-2">
                📞{" "}
                <a href="tel:+18005NAZARIO" className="text-decoration-none">
                  +1 (800) 5-NAZARIO
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

          {/* Embedded Map (Optional real map can be added) */}
          <div className="ratio ratio-16x9 mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.781167224096!2d-118.40035668478252!3d34.07362038060206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bff909a3d975%3A0x4bb61a9f54d5df1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1718912075596"
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
