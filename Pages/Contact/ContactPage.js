import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";


import './ContactPage.css';

const ContactPage = () => {
  const [buttonText, setButtonText] = useState("Send message");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Thank You!");
    setTimeout(() => setButtonText("Send message"), 3000);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Head Section */}
      <div
        className="head-container"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/11/15/97/95/360_F_1115979561_ZtsAFp331vfv4sBnnm29nt57WVwyVqgM.jpg')",
          width: "100%",/* Full width of the container */
          height: "570px"
        }}
      >
        {/* White Overlay for Background */}
        <div className="background-overlay"></div>

        {/* Content */}
        <div className="slide-text">Contact Us</div>
        <h1 className="slide-text-2">
          Your Path to Inner Peace <br /> and Wellness
        </h1>
        <p className="slide-text-3">
          We welcome your questions and feedback at Peak Yoga. Whether you're curious
          about our yoga classes, need assistance with membership, or simply want to
          know more about our practices, our team is here to guide you.
        </p>
        <p className="slide-text-3">
          Choose the method that works best for you, and we’ll provide a thoughtful
          and timely response.
        </p>
      </div>


      {/* Contact Form Section */}
      <div className="contact-section-container">
        <h2 className="head2" style={{
          fontSize: "40px", marginLeft: "50px",
          fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", color: "#440961"
        }}>Reach Out</h2>
        <div className="contact-section-tata">
          <p style={{ fontSize: "20px", marginLeft: "-11px", color: "#440961" }}>
            Your yoga journey is a path to inner peace and balance,<br /> and we're here to guide and support you on every stretch and breath.</p>
        </div>

        <div className="contact-section-content">
          {/* Contact Info */}
          <div className="contact-info">
            <p><strong>Email:</strong> info@peak.com</p>
            <hr />
            <p><strong>Phone:</strong> (123) 456 7890</p>
            <hr />
            <p><strong>Socials:</strong></p>
            <div className="socials">
              <ul>
                <li>
                  <FaTwitter style={{ color: "#440961" }} />
                  <span>Twitter</span>
                </li>
                <li>
                  <FaInstagram style={{ color: "#440961" }} />
                  <span>Instagram</span>
                </li>
                <li>
                  <FaTiktok style={{ color: "#440961" }} />
                  <span>TikTok</span>
                </li>
                <li>
                  <FaFacebook style={{ color: "#440961" }} />
                  <span>Facebook</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form" style={{ maxWidth: "700px", margin: "0 auto", marginRight: "40px" }}>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginBottom: "50px",
                  flexDirection: "row", // Default to row layout on larger screens
                  flexWrap: "wrap", // Allow fields to wrap on smaller screens
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  className="name-field"
                  placeholder="Name"
                  style={{
                    flex: "1", // Makes both fields equal width
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginBottom: "10px", // Added space below fields
                  }}
                />
                <input
                  type="email"
                  className="email-field"
                  placeholder="Email"
                  style={{
                    flex: "1", // Makes both fields equal width
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginBottom: "10px", // Added space below fields
                  }}
                />
              </div>
              <textarea
                className="message-field"
                placeholder="Message"
                style={{
                  width: "100%", // Take full width
                  padding: "10px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  height: "100px",
                  marginBottom: "10px", // Adjusted spacing below textarea
                }}
              ></textarea>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="newsletter"
                  style={{
                    marginRight: "10px",
                    marginLeft: "-130px",
                    color: "#FFFFFF",
                  }}
                />
                <label htmlFor="newsletter" style={{ fontSize: "14px" }}>
                  Subscribe to Newsletter
                </label>
              </div>
              <button
                type="submit"
                style={{
                  padding: "10px 260px", // Adjusted button padding
                  fontSize: "16px",
                  backgroundColor: "#4B0082", // Adjusted button color
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {buttonText}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Visit Section */}
      <div
        style={{
          position: "relative",
          padding: "50px 20px",
          backgroundColor: "transparent",
          // filter: "brightness(50%)",
          // backgroundSize: "cover",
          fontWeight: 400,
        }}
      >
        {/* White Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // background: "rgba(255, 255, 255, 0.33)", // Adjust opacity as needed
            zIndex: 1,
            pointerEvents: "none", // Ensures it doesn't block interactions
          }}
        ></div>

        {/* Content */}
        <h2
          style={{
            position: "relative",
            fontSize: "24px",
            marginBottom: "5px",
            textAlign: "center",
            marginRight: "0px",
            color: "#440961", // Yellow color for the header
            textShadow: "1px 1px 2px #440961", // Adding shadow for emphasis
            animation: "slideUp 4s ease-out",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            zIndex: 2, // Ensures content is above the overlay
          }}
        >
          Visit
        </h2>
        <h2
          style={{
            position: "relative",
            fontSize: "54px",
            fontWeight: "400",
            marginBottom: "20px",
            textAlign: "center",
            animation: "slideUp 4.5s ease-out",
            fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            color: "#FFFFFF",
            zIndex: 2, // Ensures content is above the overlay
          }}
        >
          Join Us at Peak Yoga Studio
        </h2>
        <p
          style={{
            position: "relative",
            marginBottom: "30px",
            textAlign: "center",
            animation: "slideUp 5s ease-out",
            fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            color: "#440961",

            zIndex: 2, // Ensures content is above the overlay
          }}
        >
          <span style={{ display: "block", lineHeight: "2", textAlign: "center" }}>
            If you prefer face-to-face assistance or want to experience our facilities
          </span>
          <span style={{ display: "block", lineHeight: "2", textAlign: "center" }}>
            firsthand, feel free to visit our location during business hours.
          </span>
        </p>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            height: "600px",
            paddingLeft: "40px",
            animation: "slideUp 5.5s ease-out",
            alignItems: "center",
            zIndex: 2, // Ensures content is above the overlay
          }}
        >
          {/* Content Box */}
          <div
            style={{
              flex: "7 1 40%",
              backgroundColor: "transparent", // Slightly transparent white
              padding: "5px 20px 5px 30px",
              borderRadius: "10px",
              color: "#440961",
              border: "2px solid #FFFFFF", // Outline box
              marginLeft: "10px",
              marginBottom: "20px",
              lineHeight: "1",
              height: "270px",
              zIndex: 2, // Ensures content is above the overlay
            }}
          >
            <div
              style={{
                flex: "1 1 20%",
                marginBottom: "20px",
                fontSize: "20",
              }}
            >
              <p style={{ lineHeight: ".3", color: "#FFFFFF", fontSize: 20, fontWeight: 'bold', letterSpacing: "1px" }}>
                Address:
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  lineHeight: ".3",
                  fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Street Address
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  lineHeight: ".3",
                  fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Your City, State, Zip Code
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  lineHeight: ".3",
                  fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Country
              </p>
            </div>

            <hr
              style={{
                border: "none",
                borderTop: "2px solid rgb(249, 244, 244)",
                margin: "5px 0 5px 0",
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            />

            <p
              style={{
                color: "#FFFFFF",
                lineHeight: ".3",
                fontSize: 20,
                fontWeight: 'bold',

              }}
            >
              Business Hours:
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              Monday - Friday: 6:00 AM - 9:00 PM
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              Saturday: 8:00 AM - 6:00 PM
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              Sunday: 10:00 AM - 4:00 PM
            </p>
          </div>

          <div style={{ flex: "2 1 45%", padding: "30px", color: "#212121", height: "500px" }}>
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9308374516035!2d-73.9781772845929!3d40.68268597933466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDQwJzU3LjgiTiA3M8KwNTgnMzMuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{
                border: "0",
                borderRadius: "10px",
                color: "#212121",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
}


export default ContactPage;