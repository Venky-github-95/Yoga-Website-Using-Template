import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import  { blogs } from './MyBlog'; // Import the blogs array or data
import './Days.css';
import Footer from "../Footer";
// import OtherBlog from "../Pages/OtherBlog";

const Day1 = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  console.log("Blog ID from URL:", id); // Debugging
  const currentId = parseInt(id);
  const selectedBlog = blogs.find((blog) => blog.id === parseInt(id)); // Find the selected blog
  // const otherBlogs = blogs.filter((blog) => blog.id !== parseInt(id)); // Exclude the selected blog

    // Determine the three IDs to display in the "Other Blogs" section
   const totalBlogs = blogs.length;
   const otherBlogIds = Array.from({ length: 3 }, (_, i) => ((currentId + i) % totalBlogs) + 1).filter((blogId) => blogId !== currentId);
 
   // Filter the blogs based on the calculated IDs
   const otherBlogs = blogs.filter((blog) => otherBlogIds.includes(blog.id));


   const navigate = useNavigate();
   
  const handleClick = () => {
    navigate('/myblog'); // Navigate to Day1.js with the selected blog ID
  };

  if (!selectedBlog) {
    return <p>Blog not found!</p>;
  }

  // Define additional content for specific blog IDs
  const additionalContent = {
    1: (
      <div>
        <h1>{selectedBlog.title}</h1>
        <p>{selectedBlog.description}</p>

        <br></br><br></br><br></br><br></br>

      <strong>Mental Clarity and Focus </strong> <br></br> <br></br>
      Daily yoga practice has a remarkable ability to <b>quiet the noise of a busy mind</b>. Through mindful breathing techniques (pranayama) and meditation, yoga helps individuals center their thoughts. These practices increase mindfulness, allowing you to stay present and focused.
      <ul>
      <li>Yoga encourages a <b>greater awareness of your thoughts and emotions</b>, helping you focus on the present moment.</li>
      <li>
      Regular practice enhances <b>memory and cognitive function</b>, aiding in better decision-making.</li>

      </ul>

      <br></br> <br></br>

      <strong>Stress Reduction and Emotional Balance</strong> <br></br> <br></br>
      Stress is a common thread in modern life, but yoga offers an effective remedy. Regular practice reduces the production of <b>cortisol, the stress hormone,</b> while stimulating the parasympathetic nervous system, which promotes relaxation. Yoga also encourages self-reflection, helping practitioners process emotions and cultivate resilience.

      <ul>Why yoga is effective for stress reduction:

      <li><b>Deep breathing exercises </b>calm the nervous system and reduce anxiety. </li>
      <li>Gentle movements in yoga help release <b>tension stored in the body.</b></li>
      <li>Mindfulness techniques allow for a better <b>understanding and control of emotions</b>.</li>
      

      </ul>
      <br></br> <br></br>

      <strong>Improved Physical Health and Flexibility</strong> <br></br> <br></br>
      On a physical level, yoga is a comprehensive workout that strengthens muscles, improves flexibility, and enhances posture. <b>Even a few minutes of daily stretching</b> can reduce muscle stiffness and improve mobility. Daily practice helps to alleviate aches and pains, particularly in the back and neck, which are often caused by sedentary lifestyles.

      <ul>
      Benefits of physical yoga practice:
      <li>Strengthens <b>core muscles</b> and improves balance.</li>
      <li> Enhances <b>joint health and reduces the risk</b> of injury.</li>
      <li> Boosts <b>immune function</b> and <b>overall vitality</b>.</li>

      </ul>

      <br></br>
      <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>

       <br></br>

      <strong>Enhanced Connection to Breath</strong> <br></br> <br></br>
      Breathing is an essential yet often overlooked aspect of health. Yoga emphasizes conscious breathing, teaching techniques that increase lung capacity and oxygen flow. These breathing exercises not only improve physical endurance but also reduce anxiety and enhance relaxation.

      The connection between breath and movement in yoga creates a <b>sense of harmony and flow that lingers long after practice</b>. Simple practices like diaphragmatic breathing can <b>instantly calm the mind and reduce stress</b>, making it a powerful tool for everyday life.

      <br></br> <br></br> <br></br>

      <strong>A Gateway to Inner Peace</strong> <br></br> <br></br>
      The true essence of yoga lies in its ability to connect practitioners with their inner selves.<b> Daily practice fosters a sense of purpose and tranquility</b>, enabling you to navigate life with a peaceful mind and open heart. As you align with your inner values and goals, yoga becomes a tool for personal growth and self-discovery.

      By creating space for self-reflection and mindfulness, yoga helps you identify what truly matters and live in alignment with those priorities.

      </div>


    ),
    2: (
      <div>
    <h1><b>Yoga Nutrition: Eating Right for Mind-Body Balance</b></h1>
    <p>
      Explore nutrition tips that complement your yoga routine, from energizing meals to mindful eating practices.
    </p>

    <br></br><br></br><br></br><br></br>

    <p>
      Proper nutrition is a vital component of a balanced yoga lifestyle. The foods we eat not only fuel our bodies but also 
      influence our mental and emotional well-being. Yoga practitioners can benefit from a mindful approach to eating, focusing 
      on nourishing the body in alignment with their practice.
    </p>
    <h2><b>Energizing Meals for Yoga Practice</b></h2>
    <p>
      Eating the right foods before and after yoga can enhance performance and recovery:
    </p>
    <ul>
      <li>
        <strong>Before practice:</strong> Opt for light meals like fruits, nuts, or smoothies to provide sustained energy.
      </li>
      <li>
        <strong>Post-practice:</strong> Include protein-rich foods and healthy carbs to replenish energy stores and support muscle repair.
      </li>
    </ul>
    <h2><b>The Importance of Hydration</b></h2>
    <p>
      Staying hydrated is crucial, especially during intensive yoga sessions. Drinking water or herbal teas throughout the day helps 
      maintain energy levels and detoxifies the body.
    </p>

    <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>


    <h2><b>Mindful Eating Practices</b></h2>
    <p>
      Yoga teaches mindfulness, and this can extend to your meals:
    </p>
    <ul>
      <li>Eat slowly and savor each bite.</li>
      <li>Avoid distractions like screens while eating.</li>
      <li>Listen to your body’s hunger and fullness cues.</li>
    </ul>
    <h2><b>Foods That Support Balance</b></h2>
    <p>
      Incorporate whole foods, such as vegetables, whole grains, legumes, and healthy fats, into your diet. Avoid processed foods 
      and excessive caffeine, which can disrupt mental clarity and energy levels.
    </p>
  </div>
    ),

    3:(
      <div>
      <h1><b>Find Your Flow: Choosing the Right Yoga Style for You</b></h1>
      <p>
        Understand the different yoga styles and find the one that aligns with your goals and lifestyle.
      </p>

      <br></br><br></br><br></br><br></br>

      <p>
        With so many yoga styles available, it can be overwhelming to choose the right one. Each style offers unique benefits 
        and caters to different needs, goals, and preferences.
      </p>
      <h2><b>Hatha Yoga: The Foundation</b></h2>
      <p>
        Perfect for beginners, Hatha yoga focuses on basic postures and breathing techniques. It’s a slower-paced practice 
        that builds strength and flexibility.
      </p>
      <h2><b>Vinyasa Yoga: Dynamic and Flowing</b></h2>
      <p>
        Known for its fluid sequences, Vinyasa yoga is great for those seeking a cardio-based workout. It links breath with 
        movement, offering a meditative yet energetic experience.
      </p>
      <h2><b>Ashtanga Yoga: Discipline and Structure</b></h2>
      <p>
        Ashtanga yoga follows a set sequence of postures and is ideal for those who enjoy structure and physical challenges.
      </p>
      <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>


      <h2><b>Yin Yoga: Deep Stretching and Relaxation</b></h2>
      <p>
        This slower-paced style focuses on deep stretches held for longer periods. It’s excellent for improving flexibility 
        and releasing tension.
      </p>
      <h2><b>Restorative Yoga: Ultimate Relaxation</b></h2>
      <p>
        If you’re looking for stress relief and relaxation, restorative yoga uses props to support the body in restful poses.
      </p>
    </div>
    ),

    4:(
      <div>
    <h1><b>Morning Yoga Routines: Start Your Day with Energy and Positivity</b></h1>
    <p>
      Discover energizing morning yoga routines to awaken your body, boost productivity, and set a positive tone for the day.
    </p>

    <br></br><br></br><br></br><br></br>

    <p>
      A morning yoga routine is a powerful way to kickstart your day. It awakens the body, sharpens the mind, and cultivates a positive mindset.
    </p>
    <h2><b>Why Practice Yoga in the Morning?</b></h2>
    <ul>
      <li>Boosts circulation and warms up muscles for the day.</li>
      <li>Enhances mental clarity and sets a positive tone for the day.</li>
      <li>Promotes better productivity by reducing stress and increasing focus.</li>
    </ul>
    <h2><b>Essential Poses for Morning Yoga</b></h2>
    <p>Include these poses in your routine to awaken your body:</p>
    <ul>
      <li><strong>Cat-Cow Pose (Marjaryasana-Bitilasana):</strong> Loosens the spine and prepares your body for movement.</li>
      <li><strong>Downward Dog (Adho Mukha Svanasana):</strong> Stretches the entire body and boosts blood flow.</li>
      <li><strong>Sun Salutations (Surya Namaskar):</strong> A complete sequence to energize and align your body.</li>
      <li><strong>Warrior Pose (Virabhadrasana):</strong> Builds strength and focus to tackle the day ahead.</li>
    </ul>
    <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>


    <h2><b>Mindful Breathing and Meditation</b></h2>
    <p>
      Start your routine with a few minutes of mindful breathing. Focus on deep inhalations and exhalations to calm your mind. 
      End with a short meditation to set positive intentions for the day.
    </p>
    <h2><b>Tips for Consistency</b></h2>
    <ul>
      <li>Wake up 15-20 minutes earlier to dedicate time to your practice.</li>
      <li>Create a serene space free from distractions.</li>
      <li>Pair your routine with uplifting music or natural sounds to enhance the experience.</li>
    </ul>
  </div>

    ),

    5:(
      <div>
    <h1><b>The Science of Yoga: How It Transforms Your Mind and Body</b></h1>
    <p>
      Dive into the science behind yoga's benefits, from improved flexibility and strength to mental resilience and mindfulness.
    </p>

    <br></br><br></br><br></br><br></br>


    <p>
      Yoga is not just an ancient practice; it is a scientifically-backed method to improve both mental and physical health. 
      Research has shown profound changes in the body and brain resulting from consistent yoga practice.
    </p>
    <h2><b>Improved Physical Health</b></h2>
    <ul>
      <li>
        <strong>Flexibility and Strength:</strong> Yoga stretches and strengthens muscles, reducing the risk of injury.
      </li>
      <li>
        <strong>Heart Health:</strong> Regular practice lowers blood pressure and improves cardiovascular health.
      </li>
      <li>
        <strong>Pain Management:</strong> Yoga alleviates chronic pain, particularly in the back, neck, and joints.
      </li>
    </ul>
    <h2><b>Mental Resilience</b></h2>
    <ul>
      <li>
        Yoga reduces the levels of <strong>cortisol</strong>, the stress hormone, enhancing emotional balance.
      </li>
      <li>
        Regular practice increases gray matter in the brain, improving memory and decision-making.
      </li>
      <li>
        It fosters resilience, helping practitioners handle life’s challenges with a calm mindset.
      </li>
    </ul>
    <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>


    <h2><b>Enhanced Mindfulness and Relaxation</b></h2>
    <ul>
      <li>
        Yoga encourages awareness of the present moment, reducing overthinking and anxiety.
      </li>
      <li>
        Practices like <strong>shavasana (corpse pose)</strong> and meditation promote deep relaxation and better sleep.
      </li>
    </ul>
    <h2><b>The Role of Breathing</b></h2>
    <p>
      <strong>Pranayama breathing techniques</strong> increase oxygen flow to the brain, improving focus and reducing stress.
    </p>
  </div>
    ),

    6:(
      <div>
      <h1><b>Yoga for Stress Relief: Poses to Calm Your Mind and Body</b></h1>
      <p>
        Learn specific yoga poses and breathing techniques designed to alleviate stress and promote relaxation in your daily life.
      </p>

      <br></br><br></br><br></br><br></br>

      <p>
        Stress affects everyone, but yoga offers a sanctuary of calm through specific poses and breathing exercises.
      </p>
      <h2><b>Calming Yoga Poses</b></h2>
      <ul>
        <li><strong>Child’s Pose (Balasana):</strong> Provides a sense of safety and grounding.</li>
        <li><strong>Legs-Up-The-Wall Pose (Viparita Karani):</strong> Relieves tension and promotes relaxation.</li>
        <li><strong>Seated Forward Bend (Paschimottanasana):</strong> Soothes the nervous system and reduces anxiety.</li>
      </ul>
      <h2><b>Breathing Techniques for Relaxation</b></h2>
      <ul>
        <li><strong>Alternate Nostril Breathing (Nadi Shodhana):</strong> Balances energy and calms the mind.</li>
        <li><strong>4-7-8 Breathing:</strong> A pattern of breathing that reduces stress and induces relaxation.</li>
      </ul>
      <div className="image-div">
                <img src={selectedBlog.image} alt={selectedBlog.title} />
              </div>


      <h2><b>Creating a Stress-Free Environment</b></h2>
      <ul>
        <li>Practice in a quiet, comfortable space.</li>
        <li>Use calming music or essential oils to enhance the experience.</li>
      </ul>
      <h2><b>Incorporating Yoga into Your Routine</b></h2>
      <p>
        Dedicate at least 10-15 minutes daily to stress-relieving yoga practices. Over time, these small efforts lead to a more relaxed and peaceful life.
      </p>
    </div>

    )


    // Add more entries for other blog IDs
  };

  return (
    <>
      <div className="body-content">
        <center>
          <div className="background">
            {/* Selected Blog */}
            <div className="blog-detail">
               <p><strong>{selectedBlog.date}</strong></p>
              {/* <h1>{selectedBlog.title}</h1>
              <p>{selectedBlog.description}</p> */}
              
              {/* Render Additional Content Based on Blog ID */}
              {additionalContent[id] && additionalContent[id]}
            </div>
          </div>

          <div className="banner">
            <center>
              <p>Similar Articles</p>
              <h1>Explore More Articles</h1>
            </center>
          </div>

          {/* Other Blogs */}
          <div className="other-blogs">
            <div className="blog-container">
              {otherBlogs.map((blog) => (
                <Link to={`/blog/${blog.id}`} key={blog.id} className="blog-card-link">
                  <div className="blog-card">
                    <div
                      className="blog-image"
                      style={{ backgroundImage: `url(${blog.image})` }}
                    >
                      <div className="blog-date">
                        <p>{blog.date}</p>
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
          </div>

          {/* <OtherBlog/> */}

          <div className="more-button">
            <center>
              <button type="button" onClick={handleClick}>View All Articles</button>
            </center>
          </div>

          <div className="foot">
            <Footer />
          </div>
        </center>
      </div>
    </>
  );
};

export default Day1;
