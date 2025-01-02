import "./Class.css";
import React, { useEffect,useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import FAQ from "../Pricing/FAQ";
// import ClassSection from "./Pages/ClassSection";
// import Scroller from "./Pages/Scroller";
import Footer from "../Footer";

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

function Front() {

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

  const handleScroll = (event) => {
    const r2 = r2Ref.current;

    if (!r2) return;

    const isVerticalScroll = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    const atTop = r2.scrollTop === 0;
    const atBottom = r2.scrollTop + r2.clientHeight === r2.scrollHeight;

    if (isVerticalScroll) {
      if (!atBottom && event.deltaY > 0) {
        // Scroll inside .r2 when scrolling down and not at the bottom
        r2.scrollTop += event.deltaY;
        event.preventDefault();
      } else if (!atTop && event.deltaY < 0) {
        // Scroll inside .r2 when scrolling up and not at the top
        r2.scrollTop += event.deltaY;
        event.preventDefault();
      } else if (atBottom) {
        // Resume normal scrolling when at the bottom of .r2
        return; // Allow default behavior
      }
    }
  };

  const syncScroll = (event) => {
    const r2 = r2Ref.current;

    if (!r2) return;

    const atBottom = r2.scrollTop + r2.clientHeight === r2.scrollHeight;
    const atTop = r2.scrollTop === 0;

    if (!atBottom && !atTop) {
      // Sync scroll behavior: Scroll `.r2` alongside `.r1`
      r2.scrollTop += event.deltaY;
      event.preventDefault();
    }
  };

  const subElement = document.querySelector(".sub");

  const lockMouseInSub = (event) => {
    const rect = subElement.getBoundingClientRect();
    const inR1Area = rect.top <= 0 && rect.bottom > 0; // Check if `.r1` is visible

    if (inR1Area) {
      // Attach `.r1` and `.r2` sync scrolling
      subElement.addEventListener("wheel", syncScroll);
    } else {
      subElement.removeEventListener("wheel", syncScroll);
    }
  };

  // Attach scroll and mouse move events
  subElement.addEventListener("wheel", handleScroll);
  window.addEventListener("scroll", lockMouseInSub);

  return () => {
    // Cleanup
    scrollElements.forEach((el) => observer.unobserve(el));
    subElement.removeEventListener("wheel", handleScroll);
    subElement.removeEventListener("wheel", syncScroll);
    window.removeEventListener("scroll", lockMouseInSub);
  };
}, []);



  const navigate = useNavigate();

  const ClassCard = ({ id, title, description, level, intensity, image }) => {
    const handleMoreDetails = () => {
      navigate(`/class/${id}`, {
        state: { id, title, description, level, intensity, image },
      });
    };
    return (
      <>
        <div className="class-card">
          <div className="overlay"></div>
          <div className="bck">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="details">
              <span>
                Level: <br />
                <br />
                {level}
              </span>
              <span>
                Intensity:
                <br />
                <br />
                {intensity}
              </span>
            </div>
            <button className="more-details-btn" onClick={handleMoreDetails}>
              More Details
              <div class="extra-bar-left"></div>
              <div class="extra-bar-right"></div>
            </button>
          </div>
        </div>
      </>
    );
  };

  const classes = [
    {
      id: 1,
      title: "1. Sunrise Vinyasa Flow",
      description:
        "Start your day with grace and energy through our Sunrise Vinyasa Flow. This class focuses on seamless transitions between poses, linking breath with movement to invigorate your body and awaken your mind.",
      level: "Beginner",
      intensity: "Low",
      image: yogaImages["img20"],
    },
    {
      id: 2,
      title: "2. Gentle Hatha Yoga",
      description:
        "Unwind and relax with Gentle Hatha Yoga, designed for all skill levels. This class emphasizes holding postures to improve flexibility, balance, and overall well-being, perfect for easing stress and tension.",
      level: "Beginner",
      intensity: "Low",
      image: yogaImages["img9"],
    },
    {
      id: 3,
      title: "3. Power Yoga Fusion",
      description:
        "Elevate your practice with Power Yoga Fusion, blending strength-building sequences and core-focused exercises. This dynamic class is tailored to boost endurance and leave you feeling energized and accomplished.",
      level: "Advanced",
      intensity: "Medium",
      image: yogaImages["img11"],
    },
    {
      id: 4,
      title: "4. Restorative Yoga Bliss",
      description:
        "Rediscover peace and relaxation with Restorative Yoga Bliss. Using props and gentle stretches, this class provides a meditative experience that calms your mind and rejuvenates your body.",
      level: "Advanced",
      intensity: "Medium",
      image: yogaImages["img23"],
    },
    {
      id: 5,
      title: "5. Deep Stretching",
      description:
        "Experience the transformative benefits of Yin Yoga, targeting deep connective tissues and promoting joint health. With extended holds and mindful breathing, this class enhances flexibility and fosters inner stillness.",
      level: "Advanced",
      intensity: "Medium",
      image: yogaImages["img18"],
    },

    // Add more classes here
  ];

  return (
    <>
      <div className="main">
        <div className="a1">
          <div className="bg-cover">
            {/* <img src={yoga_body_images} alt="background" /> */}
          </div>
          <div className="hero">
            <div className="content">
              <h2>Our Classes</h2>
              <h1>
                Diverse Yoga Classes for
                <br /> Every Yogi
              </h1>
              <p>
                Our thoughtfully curated range of yoga classes caters to all
                skill levels,
                <br /> offering a harmonious blend of energizing flows and
                restorative practices to
                <br /> keep your yoga journey fulfilling and transformative.
              </p>
            </div>
          </div>
          <div className="container-wrapper">
            {classes.map((cls, index) => (
              <div
                className="container"
                key={cls.id}
                style={{
                  backgroundImage: `url(${cls.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <ClassCard
                  key={index}
                  title={cls.title}
                  id={cls.id}
                  description={cls.description}
                  level={cls.level}
                  intensity={cls.intensity}
                  image={cls.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="sub" >
          <div className="r1" >
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
      </div>
      <FAQ/>
      {/* <ClassSection/> */}
      {/* <Scroller></Scroller> */}
      <Footer/>
    </>
  );
}

export default Front;
