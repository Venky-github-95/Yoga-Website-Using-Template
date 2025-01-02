import ClassSection from "./Classes/ClassSection";
import BlogSection from "./Blog/BlogSection";
import './Home.css';
import PricingSection from "./Pricing/PricingSection";

import {useNavigate } from "react-router-dom";


export default function Home(){

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/about'); // Navigate to Card.js with the selected blog ID
    };



    return (<>

<div className="home-screen">
    <div className="home-title"> 
      <center>
        <p className="title-p"> The #1 Yoga In The Country </p>
        <h1 className="title-h1"> Inhale the future,<br></br> exhale the past </h1>
        <h3 className="title-h3"> "Discover the transformative power of yoga at Peak Yoga,<br></br> where every class inspires progress." </h3>
        <button className="more-details-btn-1" >Let's Reach your
        <div class="extra-bar-left-1"></div>
        <div class="extra-bar-right-1"></div>
        </button>

        <div className="banner-details">
            <div className="banner-details-box">
            <div className="status-item">
              <h3>10K</h3>
              <p>Members</p>
            </div>
            <div className="status-item">
              <h3>1K</h3>
              <p>Trainers</p>
            </div>
            <div className="status-item">
              <h3>10M</h3>
              <p>Calories Burnt</p>
            </div>
            <div className="status-item">
              <h3>20K</h3>
              <p>Hours Trained</p>
            </div>
            </div>
        </div>

        </center>
    </div>
    </div>
    {/* About */}
    <div style={{paddingLeft:"60px", paddingRight:"60px"}}>
    <section className="mission-section">
      <div className="mission-content">
        <h5 className="mission-title">Mission</h5>
        <h1 className="mission-heading">Our Mission</h1>
        <p className="mission-text">
          At the core of Peak Fitness is a mission to empower<br/>individuals oreach their peak potential, physically,mentally, and emotionally.
        </p>
        <p className="mission-text">
          We strive to create an inclusive space where everyone,regardless of
          fitness level, feels inspired and supported on their journey towards
          a healthier and more fulfilling life.
        </p>
        <button className="more-details-btn-1" onClick={handleClick}>About Rishikul
        <div class="extra-bar-left-1"></div>
        <div class="extra-bar-right-1"></div>
        </button>
      </div>
      <div className="mission-image">
        <img
          src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/08/MNT-woman-doing-yoga-732x549-thumbnail-732x549.jpg"
          alt="Fitness workout"
        />
      </div>
     </section>
     <section className="values-section">
      <div className="over"></div>
      <header className="values-header">
        <p1 className="values-title">Values</p1>
        <h1>Our Values</h1>
        <p>
        We believe in creating an environment where each individual is empowered to <br/>reach their peak potential.
        </p>
      </header>

      <div className="values-cards">
        <div className="card">
          <div className="icons">✨</div>
          <h3>Holistic Approach</h3>
          <p>We embrace a holistic approach to <br/>health and fitness.</p>
        </div>

        <div className="card">
          <div className="icons">🚴</div>
          <h3>Expert Guidance</h3>
          <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
        </div>

        <div className="card">
          <div className="icons">🏋️</div>
          <h3>State-of-the-Art Facilities</h3>
          <p>Experience the latest in fitness technology to elevate your training.</p>
        </div>
        </div>
        <div className="values-cards2">
        <div className="card">
          <div className="icons">🤝</div>
          <h3>Dynamic Community</h3>
          <p>Join a vibrant and supportive fitness community that celebrates achievements.</p>
        </div>

        <div className="card">
          <div className="icons">📋</div>
          <h3>Personalized Programs</h3>
          <p>We pride ourselves on creating the best personalized workout and nutrition programs.</p>
        </div>

        <div className="card">
          <div className="icons">📅</div>
          <h3>Diverse Class Offerings</h3>
          <p>Immerse yourself in our diverse range of group fitness classes.</p>
        </div>
        </div>
    </section>
    </div>
    {/* About end */}

    {/* Classes start */}
        <ClassSection/>
    {/* Classes end */}

<br></br> <br></br> 

    {/* Pricing start */}
        <PricingSection />
    {/* Pricing end */}


        {/* About section */}
        <section className="testimonials-section">
    
    <header className="testimonials-header">
    <p1>Testimonials</p1>
      <h1>Words From Our Members</h1>
    </header>

    <div className="testimonials-cards">
  
    <div class="scroll-content">
    <div className="tcard">
        <h3>Alexandra D.  ⭐️⭐️⭐️⭐️⭐️  </h3>
        <p>We embrace a holistic approach to <br/>health and fitness.</p>
      </div>
      <div className="tcard">
        <h3>Expert Guidance</h3>
        <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
      </div>
      <div className="tcard">
        <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
        <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."

</p>
      </div>
      <div className="tcard">
        <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
        <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
      </div>
      <div className="tcard">
      <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
        <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
      </div>
      <div className="tcard">
      <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
        <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
      </div>
      <div className="tcard">
      <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
        <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
        </div>
      
      </div>
      </div>


      <div className="te">
  
  <div class="sc">
  <div className="tcard">
      <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
    </div>
    <div className="tcard">
    <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
    </div>
    <div className="tcard">
    <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
    </div>
    <div className="tcard">
    <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
      </div>
  <div className="tcard">
      <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."

</p>
</div>
  <div className="tcard">
      <h3>Alexandra D.  ⭐️⭐️⭐️⭐️⭐️  </h3>
      <p>We embrace a holistic approach to <br/>health and fitness.</p>
    </div>
    <div className="tcard">
    <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
    </div>
    <div className="tcard">
      <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"The combination of relaxation and challenging sequences in every class keeps me coming back. Whether I’m working on flexibility or strength, I always feel supported and inspired by the instructors. This is hands down the best yoga experience I’ve had."

</p>
    </div>
    <div className="tcard">
      <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"I can’t thank this yoga studio enough for helping me find balance in my life. Every class feels like a breath of fresh air – the perfect way to escape from stress. I feel stronger, more centered, and more at peace with myself. Highly recommend!".</p>
    </div>
    <div className="tcard">
    <h3><pre>Jason M.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>"I absolutely love this studio! Every session is thoughtfully designed to meet individual needs while fostering a sense of community. The teachers are encouraging and help me deepen my practice with each class. I always leave feeling relaxed and rejuvenated.</p>
    </div>
    <div className="tcard">
    <h3><pre>Lindsay P.     ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
    </div>
    <div className="tcard">
    <h3><pre>Alexandra D.      ⭐️⭐️⭐️⭐️⭐️</pre></h3>
      <p>Benefit from the expertise of our<br/> certified and experienced personal<br/> trainers.</p>
      </div>
    
    </div>
    
    </div>
    <div>
    <button className="more-details-btn-2" >Let's Reach your
      <div class="extra-bar2-left"></div>
      <div class="extra-bar2-right"></div>
      </button>
      </div>
  </section>
        {/* About Section */}

    {/* Blog start */}
    <div>  
        <BlogSection/>
    </div>
    {/* Blog end */}
        </>
    );
}