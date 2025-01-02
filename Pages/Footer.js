import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function Footer(){
    return(
        <>
            <footer className="footer">
                    <center>
                      <div className="newsletter">
                        <h2>Sign Up To Our Newsletter</h2>
                        <p>Stay connected, inspired, and informed about everything yoga!</p>
                        <form className="newsletter-form">
                          <input type="email" placeholder="email@gmail.com" />
                          <button type="submit">Sign Up</button>
                        </form>
                      </div>
                    </center>
                    <div className="footer-content">
                      <div className="footer-branding">
                        <h3>🧘 Yoga Bliss</h3>
                        <p>
                          Your journey to balance and mindfulness begins here. 
                          We're here to guide you every step of the way.
                        </p>
                        <button>Join Your Yoga Journey</button>
                        <div className="footer-links">
                          <h4>Pages</h4>
                          <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Classes</li>
                            <li>Blog</li>
                            <li>Contact</li>
                          </ul>
                          <hr></hr>
                          <h4>Utility</h4>
                          <ul>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                            <li>404</li>
                          </ul>
                        </div>
                      </div>
                      <br></br>
            
                      <div className="footer-contact">
                        <h1>Follow us</h1>
                        <ul style={{ alignItems: "center", marginLeft: "0px" }}>
                          <FontAwesomeIcon icon={faTwitter} style={{ margin: "10px", color: "#1DA1F2", cursor: "pointer" }} /> Twitter
                          <FontAwesomeIcon icon={faFacebook} style={{ margin: "10px", color: "#4267B2", cursor: "pointer" }} /> Facebook
                          <FontAwesomeIcon icon={faInstagram} style={{ margin: "10px", color: "#C13584", cursor: "pointer" }} /> Instagram
                          <FontAwesomeIcon icon={faYoutube} style={{ margin: "10px", color: "#FF0000", cursor: "pointer" }} /> YouTube
                        </ul>
                        <hr></hr>
                        <h1>Email</h1>
                        <input type="text" placeholder="example@gmail.com" />
                        <h1>Phone</h1>
                        <input type="text" placeholder="(123) 456 7890" />
                        <h1>Address</h1>
                        <input type="text" placeholder="Street Address Your City, State, Zip Code Country" />
                        <h1>Business Hours</h1>
                        <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </footer>
        </>
    )
}