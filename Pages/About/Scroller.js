import React, { useEffect,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Class.css';

// Dynamically import all images from the folder
const importAllImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
      const imageName = key.replace("./", "").replace(/\.\w+$/, ""); // Extract file name without extension
      images[imageName] = requireContext(key); // Map file name to image path
    });
    return images;
  };
  
  const yogaImages = importAllImages(
    require.context("./pics", false, /\.(png|jpe?g|svg)$/)
  );
  



export default function Scroller(){
    const r2Ref = useRef(null);
    useEffect(() => {
      const scrollElements = document.querySelectorAll(".scroll-animate");
  
      // Intersection Observer for animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.2 }
      );
  
      scrollElements.forEach((el) => observer.observe(el));
  
      // Scroll handling for r2
      const handleScroll = (event) => {
        const r2 = r2Ref.current;
  
        if (!r2) return;
  
        const isHorizontalScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);
        const isVerticalScroll = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
  
        const atTop = r2.scrollTop === 0;
        const atBottom = r2.scrollTop + r2.clientHeight === r2.scrollHeight;
        const atLeft = r2.scrollLeft === 0;
        const atRight = r2.scrollLeft + r2.clientWidth === r2.scrollWidth;
  
        if (isHorizontalScroll && r2.scrollWidth > r2.clientWidth) {
          if ((!atLeft && event.deltaX < 0) || (!atRight && event.deltaX > 0)) {
            r2.scrollLeft += event.deltaX; // Scroll horizontally inside r2
            event.preventDefault(); // Prevent default horizontal scrolling
          }
        }
  
        if (isVerticalScroll && r2.scrollHeight > r2.clientHeight) {
          if ((!atTop && event.deltaY < 0) || (!atBottom && event.deltaY > 0)) {
            r2.scrollTop += event.deltaY; // Scroll vertically inside r2
            event.preventDefault(); // Prevent default vertical scrolling
          }
        }
      };
  
      // Attach scroll event listener
      const subElement = document.querySelector(".sub");
      subElement.addEventListener("wheel", handleScroll);
  
      return () => {
        // Cleanup
        scrollElements.forEach((el) => observer.unobserve(el));
        subElement.removeEventListener("wheel", handleScroll);
      };
    }, []);
  

    return(
        <>
                <div className="sub">
                  <div className="r1">
                    <div className="content">
                      <h2>Team</h2>
                      <h1>Meet Our Yoga Experts</h1>
                      <p>
                        At Peak Fitness, our team of certified yoga instructors is more
                        than just teachers; they are your dedicated guides on your
                        journey to balance, mindfulness, and well-being. <br />
                        <br />
                        With a deep passion for yoga and a commitment to nurturing
                        growth, our instructors bring years of experience and wisdom to
                        help you achieve harmony in both body and mind.
                      </p>
                    </div>
                  </div>
                  <div className="r2" ref={r2Ref}>
                    <div className="scroll-section">
                      <div className="scroll-container">
                        <div className="scroll-box scroll-animate">
                          <img
                            src={yogaImages["img20"]}
                            alt="Dynamic"
                            className="scroll-image"
                          />
                          <div className="scroll-content">
                            <h2>Sunrise Vinyasa Flow</h2>
                            <p>
                              Start your day with grace and energy through our Sunrise
                              Vinyasa Flow.
                            </p>
                            <div className="icon">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                  margin: "10px",
                                  color: "#1DA1F2",
                                  cursor: "pointer",
                                  marginRight: "-87px",
                                }}
                              />
                              Twitter
                              <FontAwesomeIcon
                                icon={faInstagram}
                                style={{
                                  margin: "10px",
                                  color: "#C13584",
                                  cursor: "pointer",
                                  marginRight: "-87px",
                                }}
                              />
                             Instagram
                            </div>
                          </div>
                        </div>
        
                        <div className="scroll-box scroll-animate">
                          <img
                            src={yogaImages["img9"]}
                            alt="Scroll"
                            className="scroll-image"
                            style={{height:'400px'}}
                          />
                          <div className="scroll-content">
                            <h2>Gentle Hatha Yoga</h2>
                            <p>
                              Unwind and relax with Gentle Hatha Yoga, designed for all
                              skill levels.
                            </p>
                            <div className="icon">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                  margin: "10px",
                                  color: "#1DA1F2",
                                  cursor: "pointer",
                                  marginRight: "-83px",
                                }}
                              />
                              Twitter
                              <FontAwesomeIcon
                                icon={faInstagram}
                                style={{
                                  margin: "10px",
                                  color: "#C13584",
                                  cursor: "pointer",
                                  marginRight: "-83px",
                                }}
                              />
                              Instagram
                            </div>
                          </div>
                        </div>
        
                        <div className="scroll-box scroll-animate">
                          <img
                            src={yogaImages["img11"]}
                            alt="Clean"
                            className="scroll-image"
                          />
                          <div className="scroll-content">
                            <h2>Power Yoga Fusion</h2>
                            <p>
                              Elevate your practice with Power Yoga Fusion, blending
                              strength-building sequences and core-focused exercises.
                            </p>
                            <div className="icon">
                              <FontAwesomeIcon
                                icon={faTwitter}
                                style={{
                                  margin: "10px",
                                  color: "#1DA1F2",
                                  cursor: "pointer",
                                  marginRight: "-93px",
                                }}
                              />
                              Twitter
                              <FontAwesomeIcon
                                icon={faInstagram}
                                style={{
                                  margin: "10px",
                                  color: "#C13584",
                                  cursor: "pointer",
                                  marginRight: "-93px",
                                }}
                              />
                              Instagram
                            </div>
                          </div>
                        </div>
                        <div className="scroll-box scroll-animate">
                          <img
                            src={yogaImages["img23"]}
                            alt="Clean"
                            className="scroll-image"
                            style={{height:'400px'}}
                          />
                          <div className="scroll-content">
                            <h2>Restorative Yoga Bliss</h2>
                            <p>
                              Rediscover peace and relaxation with Restorative Yoga
                              Bliss.
                            </p>
                            <div className="icon">
                              <FontAwesomeIcon
                                className="ic1"
                                icon={faTwitter}
                                style={{
                                  margin: "10px",
                                  color: "#1DA1F2",
                                  cursor: "pointer",
                                  marginRight: "-63px",
                                }}
                              />
                              <h5>Twitter</h5>
                              <FontAwesomeIcon
                                className="ic1"
                                icon={faInstagram}
                                style={{
                                  margin: "10px",
                                  color: "#C13584",
                                  cursor: "pointer",
                                  marginRight: "-63px",
                  
                                }}
                              />
                              <h5>Instagram</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    )
}