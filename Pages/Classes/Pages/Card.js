import React from "react";
import "./Card.css";
import { useLocation, useNavigate } from "react-router-dom";
import FAQ from '../Faq/FAQ';
import Footer from "../../Footer";


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
  require.context("../pics", false, /\.(png|jpe?g|svg)$/)
);

function Card() {
  const location = useLocation();
  const { title, description, level, intensity, image, id } = location.state; // Get passed data

  

  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/Classes');
}

  const ClassCard = ({ id, title, description, level, intensity, image }) => {
    const handleMoreDetails = () => {
      navigate(`/class/${id}`, {
        state: { id, title, description, level, intensity, image },
      });
    };

    

    return (
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
            <div className="extra-bar-left"></div>
            <div className="extra-bar-right"></div>
          </button>
        </div>
      </div>
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
  ];

  // Define additional content for each class
  const additionalContent = [
    {
      id: 1,
      content: (
        <>
          <section className="cons">
            <p>
              <strong>
                Start your day with grace and energy through our Sunrise Vinyasa
                Flow. This class focuses on seamless transitions between poses,
                linking breath with movement to invigorate your body and awaken
                your mind.
              </strong>
            </p>

            <h3>
              <strong>What to Expect:</strong>
            </h3>
            <p>
              {" "}
              Begin your day with an energizing and fluid practice that
              synchronizes breath with movement. This class is designed to
              awaken your senses, build strength, and cultivate a mindful start
              to your morning.
            </p>
            <h3>Start Your Day with Intention:</h3>
            <p>
              The Sunrise Vinyasa Flow is more than just a yoga session; it's a
              mindful practice that sets the tone for your entire day. Whether
              you’re a morning person or not, this flow will help you connect
              with your inner rhythm, awaken your body, and cultivate clarity
              and energy. It’s the perfect way to embrace the new day, leaving
              you feeling refreshed and ready to tackle anything that comes your
              way.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>
                <strong>1. Boosts Energy Levels:</strong> Kickstart your
                metabolism and feel rejuvenated throughout the day.
              </li>
              <li>
                <strong>2. Improves Flexibility:</strong> Flowing sequences
                loosen up stiff joints and muscles.
              </li>
              <li>
                <strong>3. Reduces Stress:</strong> Gentle breathing and mindful
                movement set a calming tone for your day.
              </li>
              <li>
                <strong>4. Enhances Focus:</strong> A mindful morning practice
                clears your head for improved concentration.
              </li>
              <li>
                <strong>5. Promotes Overall Wellness:</strong> Builds strength,
                stamina, and mental clarity.
              </li>
            </ul>

            <div className="image">
              <img src={yogaImages["img25"]} alt="id1"></img>
            </div>

            <h3 className="who">Who Can Benefit:</h3>
            <p>
              Perfect for beginners and experienced yogis looking for an
              uplifting start to their day. Ideal for those with busy schedules
              who want a peaceful moment in the morning.
            </p>
            <h3>What to Bring:</h3>
            <ul>
              <li>
                <b>1. Yoga mat</b>
              </li>
              <li>
                <b>2. Water bottle</b>
              </li>
              <li>
                <b>3. Comfortable, breathable attire</b>
              </li>
              <li>
                <b>4. A small towel</b>
              </li>
            </ul>
            <h3>Join Us for Our Yoga Classes!</h3>
            <p>
              <strong>
                Explore the transformative power of yoga with our thoughtfully
                designed classes. Whether you're seeking energy, relaxation,
                strength, or flexibility, there's something for everyone. Take
                the first step towards a healthier, more balanced life. Join us
                today and embark on a journey of self-discovery, growth, and
                well-being.
              </strong>
            </p>
          </section>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <section className="cons">
            <p>
              <strong>
                Unwind and relax with Gentle Hatha Yoga, designed for all skill
                levels. This class emphasizes holding postures to improve
                flexibility, balance, and overall well-being, perfect for easing
                stress and tension.
              </strong>
            </p>

            <h3>
              <strong>What to Expect:</strong>
            </h3>
            <p>
              {" "}
              This slow-paced class focuses on foundational poses and mindful
              breathing. It’s ideal for relaxation and building a strong
              mind-body connection.
            </p>
            <h3>Nurture Your Body and Mind:</h3>
            <p>
              Gentle Hatha Yoga offers a soothing experience that allows you to
              slow down and reconnect with your body. It's not just about
              stretching; it's about finding peace in the present moment and
              honoring your body’s limits. With a focus on relaxation, this
              class gives you the space to unwind, heal, and develop a deeper
              awareness of your physical and mental state. It’s the ideal
              practice for anyone looking to enhance their overall well-being
              with patience and care.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>
                <strong>1. Improves Posture:</strong> Gentle stretches align
                your body and reduce tension.
              </li>
              <li>
                <strong>2. Relieves Stress:</strong> Focus on breathing calms
                the mind and relaxes the nervous system.
              </li>
              <li>
                <strong>3. Builds Strength Gradually:</strong> Perfect for
                building physical stability without strain.
              </li>
              <li>
                <strong>4. Boosts Mental Clarity:</strong> A slower pace allows
                for self-reflection and mindfulness.
              </li>
              <li>
                <strong>5. Increases Flexibility:</strong> Safe and steady
                stretches improve joint mobility.
              </li>
            </ul>

            <div className="image">
              <img src={yogaImages["img4"]} alt="id1"></img>
            </div>

            <h3 className="who">Who Can Benefit:</h3>
            <p>
              Great for beginners, seniors, and anyone recovering from an injury
              or looking for a restorative practice.
            </p>
            <h3>What to Bring:</h3>
            <ul>
              <li>
                <b>1. Yoga mat</b>
              </li>
              <li>
                <b>2. Blanket or cushion (optional for added support)</b>
              </li>
              <li>
                <b>3. Water bottle</b>
              </li>
            </ul>
            <h3>Join Us for Our Yoga Classes!</h3>
            <p>
              <strong>
                Explore the transformative power of yoga with our thoughtfully
                designed classes. Whether you're seeking energy, relaxation,
                strength, or flexibility, there's something for everyone. Take
                the first step towards a healthier, more balanced life. Join us
                today and embark on a journey of self-discovery, growth, and
                well-being.
              </strong>
            </p>
          </section>
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <section className="cons">
            <p>
              <strong>
                Elevate your practice with Power Yoga Fusion, blending
                strength-building sequences and core-focused exercises. This
                dynamic class is tailored to boost endurance and leave you
                feeling energized and accomplished.
              </strong>
            </p>

            <h3>
              <strong>What to Expect:</strong>
            </h3>
            <p>
              A high-energy class combining strength-building poses,
              cardio-inspired movements, and core-focused exercises for a
              challenging and dynamic session.
            </p>
            <h3>Challenge Your Limits:</h3>
            <p>
              Power Yoga Fusion is designed for those who crave a fast-paced,
              full-body workout with the added benefits of yoga. If you’re
              looking to break a sweat, build strength, and feel empowered, this
              class will push you to new heights. It's a dynamic fusion of yoga,
              cardio, and core training that will help you achieve a balanced
              body, boost endurance, and improve overall fitness. Expect to
              leave this class feeling stronger, more confident, and energized
              for the rest of your day.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>
                <strong>1. Builds Strength:</strong> Develops lean muscle
                through strength-based sequences.
              </li>
              <li>
                <strong>2. Boosts Endurance:</strong> Improves cardiovascular
                health and stamina.
              </li>
              <li>
                <strong>3. Burns Calories:</strong> A faster pace promotes
                weight management and fitness.
              </li>
              <li>
                <strong>4. Improves Balance and Core Strength:</strong> Focuses
                on stability and core engagement.
              </li>
              <li>
                <strong>5. Enhances Confidence:</strong> A challenging practice
                leaves you feeling strong and empowered.
              </li>
            </ul>

            <div className="image">
              <img src={yogaImages["img8"]} alt="id1"></img>
            </div>

            <h3 className="who">Who Can Benefit:</h3>
            <p>
              Ideal for intermediate and advanced practitioners who want a
              physically demanding practice. Suitable for anyone looking to tone
              their body and improve endurance.
            </p>
            <h3>What to Bring:</h3>
            <ul>
              <li>
                <b>1. Yoga mat</b>
              </li>
              <li>
                <b>2. Water bottle</b>
              </li>
              <li>
                <b>3. Towel for sweat</b>
              </li>
              <li>
                <b>4. Comfortable, flexible attire</b>
              </li>
            </ul>
            <h3>Join Us for Our Yoga Classes!</h3>
            <p>
              <strong>
                Explore the transformative power of yoga with our thoughtfully
                designed classes. Whether you're seeking energy, relaxation,
                strength, or flexibility, there's something for everyone. Take
                the first step towards a healthier, more balanced life. Join us
                today and embark on a journey of self-discovery, growth, and
                well-being.
              </strong>
            </p>
          </section>
        </>
      ),
    },

    {
      id: 4,
      content: (
        <>
          <section className="cons">
            <p>
              <strong>
                Rediscover peace and relaxation with Restorative Yoga Bliss.
                Using props and gentle stretches, this class provides a
                meditative experience that calms your mind and rejuvenates your
                body.
              </strong>
            </p>

            <h3>
              <strong>What to Expect:</strong>
            </h3>
            <p>
              A deeply relaxing class that uses props and supported poses to
              help you unwind, release tension, and recharge. This class focuses
              on long holds and meditative breathing.
            </p>
            <h3>Embrace Deep Healing and Relaxation:</h3>
            <p>
              Restorative Yoga Bliss is a peaceful escape from the demands of
              daily life. This class is all about slowing down and letting go.
              It’s a sanctuary where you can fully relax and allow your body and
              mind to restore themselves. Using props for extra comfort and
              support, you’ll sink into long-held poses that release deep
              tension and stress. It’s the perfect opportunity to recharge,
              improve mental clarity, and experience the profound benefits of
              relaxation.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>
                <strong>1. Deep Relaxation:</strong> Soothes the nervous system
                and relieves stress.
              </li>
              <li>
                <strong>2. Improves Sleep Quality: </strong> A calming practice
                that prepares you for restful sleep.
              </li>
              <li>
                <strong>3. Promotes Healing:</strong> Gentle stretches encourage
                recovery from physical and mental strain.
              </li>
              <li>
                <strong>4. Reduces Anxiety:</strong> Mindful breathing
                cultivates a sense of peace and calm.
              </li>
              <li>
                <strong>5. Enhances Flexibility:</strong> Long holds release
                tension in deeper muscle layers.
              </li>
            </ul>

            <div className="image">
              <img src={yogaImages["img26"]} alt="id1"></img>
            </div>

            <h3 className="who">Who Can Benefit:</h3>
            <p>
              Perfect for anyone experiencing stress, anxiety, or physical
              fatigue. Great for those seeking a meditative practice.
            </p>
            <h3>What to Bring:</h3>
            <ul>
              <li>
                <b>1. Yoga mat</b>
              </li>
              <li>
                <b>2. Blanket or bolster for support</b>
              </li>
              <li>
                <b>3. Eye pillow (optional)</b>
              </li>
              <li>
                <b>4. Comfortable, loose clothing</b>
              </li>
            </ul>
            <h3>Join Us for Our Yoga Classes!</h3>
            <p>
              <strong>
                Explore the transformative power of yoga with our thoughtfully
                designed classes. Whether you're seeking energy, relaxation,
                strength, or flexibility, there's something for everyone. Take
                the first step towards a healthier, more balanced life. Join us
                today and embark on a journey of self-discovery, growth, and
                well-being.
              </strong>
            </p>
          </section>
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <section className="cons">
            <p>
              <strong>
                Experience the transformative benefits of Yin Yoga, targeting
                deep connective tissues and promoting joint health. With
                extended holds and mindful breathing, this class enhances
                flexibility and fosters inner stillness.
              </strong>
            </p>

            <h3>
              <strong>What to Expect:</strong>
            </h3>
            <p>
              {" "}
              Yin Yoga focuses on long-held poses that target connective tissues
              and joints, promoting deep relaxation and flexibility.
            </p>
            <h3>Find Deep Relaxation and Flexibility:</h3>
            <p>
              Yin Yoga is the perfect complement to more dynamic forms of
              exercise or yoga. By focusing on long-held poses and the deep
              stretching of connective tissues, Yin Yoga helps release stored
              tension in your body while promoting flexibility and joint health.
              This class is not about speed or intensity, but about being
              present in each pose, deepening your stretch, and surrendering to
              the process. It’s a meditative practice that will leave you
              feeling relaxed, stretched, and more attuned to your body’s needs.
            </p>
            <h3>Benefits:</h3>
            <ul>
              <li>
                <strong>1. Enhances Flexibility:</strong> Lengthens deep
                connective tissues and increases range of motion.
              </li>
              <li>
                <strong>2. Strengthens Joints:</strong> Improves joint mobility
                and resilience.
              </li>
              <li>
                <strong>3. Promotes Inner Calm:</strong> A slow, meditative pace
                soothes the mind.
              </li>
              <li>
                <strong>4. Reduces Chronic Pain:</strong> Helps alleviate
                stiffness and tension from prolonged inactivity.
              </li>
              <li>
                <strong>5. Balances Energy:</strong> Restores energy flow and
                encourages mindfulness.
              </li>
            </ul>

            <div className="image">
              <img src={yogaImages["img3"]} alt="id1"></img>
            </div>

            <h3 className="who">Who Can Benefit:</h3>
            <p>
              Ideal for anyone looking to enhance flexibility, relieve stress,
              or complement more dynamic yoga practices.
            </p>
            <h3>What to Bring:</h3>
            <ul>
              <li>
                <b>1. Yoga mat</b>
              </li>
              <li>
                <b>2. Blocks or cushions for support</b>
              </li>
              <li>
                <b>3. Comfortable, warm clothing</b>
              </li>
              <li>
                <b>4. A water bottle</b>
              </li>
            </ul>
            <h3>Join Us for Our Yoga Classes!</h3>
            <p>
              <strong>
                Explore the transformative power of yoga with our thoughtfully
                designed classes. Whether you're seeking energy, relaxation,
                strength, or flexibility, there's something for everyone. Take
                the first step towards a healthier, more balanced life. Join us
                today and embark on a journey of self-discovery, growth, and
                well-being.
              </strong>
            </p>
          </section>
        </>
      ),
    },
    // Continue this pattern for other classes...
  ];

  // Get the additional content for the current class based on its id
  const classContent = additionalContent.find((item) => item.id === id);

  const otherClasses = classes.filter((cls) => cls.id !== id);

  return (
    <div className="mains">
      <div className="bg-bck" style={{ backgroundImage: `url(${image})` }}>
        {/* background-image is here */}
      </div>
      <center>
      <div className="sub-main">
        <div className="contents">
          <h2>Class</h2>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      </center>
      <center>
      <div className="b1">
        <div className="detail">
          <span>
            Days:
            <br />
            <br />
            Sat, Mon, Wed, Fri
          </span>
          <span>
            Time:
            <br />
            <br />
            (7am - 8am) (5pm - 6pm)
          </span>
          <span>
            Level: <br />
            <br />
            {level}
          </span>
          <span>
            Intensity: <br />
            <br />
            {intensity}
          </span>
        </div>
        <div className="enroll">
          <center>
        <button>
          Enroll In This Class
          <div className="extra-bar-lefts"></div>
          <div className="extra-bar-rights"></div>
        </button>
        </center>
        </div>
      </div>
      </center>



      <center>
        {/* Additional content displayed based on the class id */}



        {classContent && (
          <div className="additional-content">


            
            <h2>{classContent.title}</h2>
            {classContent.content}
{/* FAQ */}

     <FAQ/>

{/* FAQ */}

            <p id="p1">More Classes</p>
            <h3 id="p2">Explore More Classes</h3>
          </div>
        )}
      </center>
      {/* Buttons for selecting different sections */}
      <div className="section-buttons">

    


        <div className="container-wrappers">
          {otherClasses.map((cls, index) => (
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
        <div className="bot" >
        <button className="view" onClick={handleClick}>View All Classes</button>
        </div>
      </div>

      {/* Below section */}
      {/* You can include buttons or other containers here */}

      <Footer/>

    </div>
  );
}

export default Card;
