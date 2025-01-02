import React,{useState} from "react";
import './BlogSection.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";

const blogs = [
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
]

export default function BlogSection(){

    const [hovered, setHovered] = useState(false);

    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/myblog'); // Navigate to Day1.js with the selected blog ID
    };

    return(
        <>
        <div className="heading" style={{height:'200px',marginBottom:'-180px', paddingTop:'200px'}}> 
           <center>
           <p>Blog</p>
           <h1 style={{color:'white', fontFamily:'Impact', fontWeight:'400', fontSize:'50px'}}>Our Recent Blog Posts</h1>
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
        <center>
            <div className="more-button" style={{justifyItems: 'center',marginTop:'50px'}}>
            <center>
              <button type="button" onClick={handleClick}>View All Articles</button>
            </center>
          </div>
        </center>

      </div>

        
        

            
            <Footer/>
        </>
    )
}