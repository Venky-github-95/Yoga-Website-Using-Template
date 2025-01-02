import React, { useState } from "react";
import FAQ from "./FAQ";
import './PricingPlans.css';
// import Footer from "./Footer";

const PricingPlans = () => {
  // Pricing Card Component
  const PricingCard = ({ title, price, description, features, isPopular, buttonLabel }) => (
    <div className={`pricing-card ${isPopular ? "popular" : ""}`}>
      {isPopular && <div className="popular-badge">Popular</div>}
      <h3>{title}</h3>
      <h2>{price}</h2>
      <p className="description">{description}</p>
      <hr />
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <span role="img" aria-label="check">
              ✔️
            </span>{" "}
            {feature}
          </li>
        ))}
      </ul>
      <button className="animate-btn">
        Get Started
        <div className="animate-extra-bar-left"></div>
        <div className="animate-extra-bar-right"></div>
      </button>
    </div>
  );

  // Short-Term Plans Card Component
  const ShortTermPlanCard = ({ title, price, description, features, buttonLabel }) => (
    <div className="short-term-plan">
      <h3>{title}</h3>
      <h2 className="price">{price}</h2>
      <p className="payment-type">One-Time Payment</p>
      <p className="description">{description}</p>
      <hr />
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <span role="img" aria-label="check">
              ✔️
            </span>{" "}
            {feature}
          </li>
        ))}
      </ul>
      <button className="animate-btn">
        Buy Now
        <div className="animate-extra-bar-left"></div>
        <div className="animate-extra-bar-right"></div>
      </button>
    </div>
  );

  const [selectMonthly, setSelectMonthly] = useState(true);


  return (
    <div className="prici">
      <section className="gb-section">
    <pre></pre>  <h4 className="sub-header">Pricing Plan</h4> <br></br>
        <h1 className="title">
        Find Your Inner Peace <br /> and Transform Your Life
        </h1> <br></br>
        <p>
        Explore our variety of yoga membership plans designed to help you achieve <br />
          balance, mindfulness, and wellness. Choose the plan that resonates with your <br />
          goals and journey toward a healthier, more centered life.
         </p>
      </section>

      
    <div className="pricing-plans">
      {/* Header Section */}
       <header className="app-header">
        <div className="toggle-buttons">
          <button
          
            className={`price-toggle ${!selectMonthly ? "active" : ""}`}
            onClick={() => setSelectMonthly(false)}
          >
            Yearly
          </button>
          <button
            className={`price-toggle ${selectMonthly ? "active" : ""}`}
            onClick={() => setSelectMonthly(true)}
          >
            Monthly
          </button>
        </div>
      </header>

      {/* Pricing Plans Section */}
      <div className="pricing-cards">
        <PricingCard
          title="Yoga Essentials"
          price={selectMonthly ? "$49/m" : "$39/m"}
          description="Start your yoga journey with our essential membership"
          features={[
            "Access to beginner yoga classes",
            "Basic meditation sessions",
            "Breathing exercises",
            "Guided relaxation sessions",
          ]}
          buttonLabel="Get Started"
        />
        <PricingCard
          title="Yoga Plus"
          price={selectMonthly ? "$69/m" : "$49/m"}
          description="Take your yoga practice to the next level with additional benefits"
          features={[
            "All features of Yoga Essentials",
            "Intermediate yoga classes",
            "Access to workshops and special events",
            "Priority access to class bookings", 
          ]}
          isPopular
          buttonLabel="Get Started"
        />
        <PricingCard
          title="Yoga Premium"
          price={selectMonthly ? "$99/m" : "$89/m"}
          description="Unlock the full yoga experience with premium benefits"
          features={[
            "All features of Yoga Plus",
            "Unlimited access to all yoga classes",
            "One-on-one personal yoga sessions",
            "Access to premium yoga retreats",
           ]}
          buttonLabel="Get Started"
        />
      </div>

      {/* Short-Term Plans Section */}
      <section className="short-term-plans">
        <header className="short-plan-header">
          <h2>Short-Term Plans</h2>
        </header>
        <div className="short-term-cards">
        
          <ShortTermPlanCard
            title="Single Session"
            price="$20"
            description="Drop-in for a single yoga session"
            features={[
              "Access to any scheduled class",
              "Guidance from certified instructors",
            ]}
            buttonLabel="Buy Now"
          />
          <ShortTermPlanCard
            title="Weekly Pass"
            price="$100"
            description="Enjoy unlimited yoga classes for one week"
            features={[
              "Access to all scheduled classes",
              "Guidance from certified instructors",
            ]}
            buttonLabel="Buy Now"
          />
          <ShortTermPlanCard
            title="Customized Plan"
            price="Contact for Price"
            description="Create a personalized yoga plan tailored to your needs"
            features={[
              "Access to all scheduled classes",
              "Guidance from certified instructors",
            ]}
            
            buttonLabel="Contact Us"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
    {/* <Footer /> */}
    </div>
  );
};

export default PricingPlans;