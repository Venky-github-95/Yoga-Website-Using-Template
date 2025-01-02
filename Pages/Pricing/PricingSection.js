import React, { useState } from "react";

const Pricing = () => {
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
      <button className="more-details-btn">
        Get Started
        <div className="extra-bar-left"></div>
        <div className="extra-bar-right"></div>
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
      <button className="more-details-btn">
        Buy Now
        <div className="extra-bar-left"></div>
        <div className="extra-bar-right"></div>
      </button>
    </div>
  );

  const [selectMonthly, setSelectMonthly] = useState(true);

  return (
    <div className="pricing-plans" style={{marginTop:"150px"}}>
      {/* Header Section */}
      <header className="app-header">
        <h4 className="sub-header">Pricing Plan</h4>
        <h1>
          Choose the Path to Your <br /> Peak Potential
        </h1>
        <p>
          We offer a variety of membership plans to cater to your specific needs and <br />
          goals. Explore our flexible options and choose the plan that aligns with your <br />
          fitness aspirations.
        </p>
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
          title="Peak Essentials"
          price={selectMonthly ? "$49/m" : "$39/m"}
          description="Elevate your fitness journey with Peak Essentials."
          features={[
            "Access to state-of-the-art facilities",
            "Standard gym equipment usage",
            "Group fitness classes included",
            "Regular fitness assessments",
          ]}
          buttonLabel="Get Started"
        />
        <PricingCard
          title="Peak Plus"
          price={selectMonthly ? "$69/m" : "$49/m"}
          description="Take your fitness commitment up a notch with Peak Plus."
          features={[
            "All features of Peak Essentials",
            "Priority access to popular group classes",
            "Complimentary personal training session upon sign-up",
            "Access to locker room facilities",
          ]}
          isPopular
          buttonLabel="Get Started"
        />
        <PricingCard
          title="Peak Premium"
          price={selectMonthly ? "$99/m" : "$89/m"}
          description="Experience the epitome of fitness luxury with Peak Premium."
          features={[
            "All features of Peak Plus",
            "Unlimited access to specialty programs",
            "Exclusive access to Peak Fitness events",
            "Towel service included",
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
            description="One-time drop-in session"
            features={[
              "Access to state-of-the-art facilities",
              "Standard gym equipment usage",
            ]}
            buttonLabel="Buy Now"
          />
          <ShortTermPlanCard
            title="Weekly Pass"
            price="$100"
            description="7 days per week sessions"
            features={[
              "Access to state-of-the-art facilities",
              "Standard gym equipment usage",
            ]}
            buttonLabel="Buy Now"
          />
          <ShortTermPlanCard
            title="Customized Plan"
            price="Contact for Price"
            description="Contact us for a more personalized plan"
            features={[]}
            buttonLabel="Contact Us"
          />
        </div>
      </section>
    </div>
  );
};

export default Pricing;
