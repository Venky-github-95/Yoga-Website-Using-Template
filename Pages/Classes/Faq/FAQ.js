import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./FAQ.css";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <button className="toggle-button">{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

const FAQ = () => {


  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/contact');
}

  const faqs = [
    {
      question: "How do I sign up for a yoga membership?",
      answer: "You can sign up online through our website or visit our yoga studio in person.",
    },
    {
      question: "What makes your yoga studio unique?",
      answer: "We offer experienced instructors, a serene environment, and a wide variety of yoga styles to suit all levels.",
    },
    {
      question: "Can I try a yoga class before committing to a membership?",
      answer: "Yes, we offer a free trial class for first-time visitors to experience our studio and instructors.",
    },
    {
      question: "Are personal yoga sessions included in any membership plans?",
      answer: "Personal yoga sessions are available for an additional fee to provide individualized guidance.",
    },
    {
      question: "Can I pause or cancel my yoga membership?",
      answer: "Yes, you can pause or cancel your membership with prior notice. Please contact us for more details.",
    },
    {
      question: "Do you offer yoga classes for families or kids?",
      answer: "Yes, we provide family yoga classes and special sessions for kids to enjoy the benefits of yoga together.",
    },
    {
      question: "Are there meditation or wellness programs included in the memberships?",
      answer: "Yes, many of our memberships include guided meditation sessions and wellness workshops.",
    },
  ];
  

  return (
    <section className="faq-section">
      <header className="faq-header">
        <h4>FAQ</h4>
        <h2>Frequently Asked Questions</h2>
        <p>Don't hesitate to reach out if you have any questions.</p>
        <button className="animate-btn" onClick={handleClick}>
        Contact Us
        <div className="animate-extra-bar-left"></div>
        <div className="animate-extra-bar-right"></div>
      </button>
      </header>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
