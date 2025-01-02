import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faSearch, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyBlog.css"; // Include relevant CSS
import yoga_body_images from "./Images/yoga_body_images.jpg";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";

import Footer from "../Footer";

export const blogs = [
  {
    id: 1,
    date: "Jan 3, 2024",
    title: "Discover Inner Peace: The Benefits of Daily Yoga Practice",
    description:
      "Learn how daily yoga practice can enhance mental clarity, reduce stress, and improve physical well-being.",
    image: img1,
  },
  {
    id: 2,
    date: "Dec 20, 2023",
    title: "Yoga Nutrition: Eating Right for Mind-Body Balance",
    description:
      "Explore nutrition tips that complement your yoga routine, from energizing meals to mindful eating practices.",
    image: img2,
  },
  {
    id: 3,
    date: "Dec 16, 2023",
    title: "Find Your Flow: Choosing the Right Yoga Style for You",
    description:
      "Understand the different yoga styles and find the one that aligns with your goals and lifestyle.",
    image: img3,
  },
  {
    id: 4,
    date: "Jan 10, 2024",
    title: "Morning Yoga Routines: Start Your Day with Energy and Positivity",
    description:
      "Discover energizing morning yoga routines to awaken your body, boost productivity, and set a positive tone for the day.",
    image: img4,
  },
  {
    id: 5,
    date: "Dec 28, 2023",
    title: "The Science of Yoga: How It Transforms Your Mind and Body",
    description:
      "Dive into the science behind yoga's benefits, from improved flexibility and strength to mental resilience and mindfulness.",
    image: img5,
  },
  {
    id: 6,
    date: "Dec 22, 2023",
    title: "Yoga for Stress Relief: Poses to Calm Your Mind and Body",
    description:
      "Learn specific yoga poses and breathing techniques designed to alleviate stress and promote relaxation in your daily life.",
    image: img6,
  },
];

const MyBlog = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hovered, setHovered] = useState(false);


  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleResultClick = (id) => {
    console.log(`Navigating to /blog/${id}`); // Debugging
    navigate(`/blog/${id}`); // Navigate to Day1.js with the selected blog ID
  };

  const handleClose = () => {
    setIsSearchActive(false);
    setSearchQuery("");
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

    <div className="main-body">
      {isSearchActive && <div className="overlay" onClick={handleClose}></div>}

      <div className="bg-covers">
        <img src={yoga_body_images} alt="background" />
      </div>

      <div className="hero">
        <div className="content">
          <h2>Blog</h2>
          <h1>Our Blog</h1>
          <p>Enjoy a variety of articles about the fitness world.</p>
        </div>
      </div>

      <div className="search-section">
  <center>
  <div
  className={`search-bar ${isSearchActive ? "active" : ""}`}
  onClick={handleSearchClick}
>
  <form style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <input
      type="text"
      placeholder="Search Articles..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      autoFocus={isSearchActive}
      style={{ width: isSearchActive ? '650px' : '550px', transition: 'width 0.3s' }}
    />
    <FontAwesomeIcon
      icon={faSearch}
      style={{
        marginRight: '10px',
        marginTop: '10px',
        cursor: "pointer",
        zIndex: "1000",
        position: "absolute",
        color: "white",
      }}
    />
    {isSearchActive && searchQuery.trim() !== "" && (
      <div className="search-results" onClick={(e) => e.stopPropagation()}>
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="search-result-item"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from being intercepted
              handleResultClick(blog.id);
            }}
            style={{ cursor: "pointer" }}
          >
            <b>{blog.id} {blog.title}</b>
            <hr style={{ opacity: ".3" }} />
          </div>
        ))}
      </div>
    )}
  </form>
</div>

    {/* <div
      className={`search-bar ${isSearchActive ? "active" : ""}`}
      onClick={handleSearchClick}
    >
      <form style={{display:'flex', justifyContent:'flex-end',}}>
        <input
          type="text"
          placeholder="Search Articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoFocus={isSearchActive}
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            marginRight:'10px',
            marginTop:'10px',
            cursor: "pointer",
            zIndex: "1000",
            position: "absolute",
            color: "white",
            
          }}
        />
        {isSearchActive && (
    <div className="search-results">
      {filteredBlogs.map((blog, ) => (
        <div
          key={blog.id}
          className="search-result-item"
          onClick={() => handleResultClick(blog.id)}
          style={{ cursor: "pointer" }} >
          <b>{blog.title}</b>
          <hr style={{ opacity: ".3" }} />
    </div>
      ))}
    </div>
  )}
      </form>
    </div> */}
  </center>
  
</div>


    <div className="blog-container">
        {blogs.map((blog, index) => (
          <Link to={`/blog/${blog.id}`} key={index} className="blog-card-link">
            <div className="blog-card">
              <div
                className="blog-image"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="blog-date">
                  <p>{blog.date}</p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="hover-icon"
                   style={{
                        cursor: 'pointer',
                        color: hovered ? '#cf5eff' : '#ffffff', // Dynamically set color based on 'hovered' state
                      }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  />
                </div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                
              </div>
            </div>
          </Link>
        ))}
      </div>

<Footer/>


    </div>
  );
};

export default MyBlog;
