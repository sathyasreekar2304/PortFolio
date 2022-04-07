import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " - " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C++", ratingPercentage: 90 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Flutter", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "Mongo Db and FireBase", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Machine Learning", ratingPercentage: 70 },
    { skill: "Hadoop", ratingPercentage: 60 },

  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Nodejs",
    },
    {
      title: "E-Shoppers ",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "An Shopping Application where the customers can use the app to purchase and add the products to cart.Integrated the App with Strip payment gateway",
        subHeading: "Technologies Used:  Flutter, FireBase, Getx",
    },
    {
      title: "Scribble Now",
      duration: { fromDate: "2021", toDate: "2021" },
      description:"An Web App designed for helping the users to purchase and read books",
      subHeading:
        "Technologies Used: NextJs,MongoDb",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"B.Tech-Computer Science and Engineering"}
        subHeading={"VNR VJIET,Hyderabad"}
        fromDate={"2019"}
        toDate={"ongoing"}
      />

      <ResumeHeading
        heading={"Intermediate"}
        subHeading={"Sri Chaitanya Junior College,Khammam"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School(SSC-CBSE)"}
        subHeading={"Harvest Public School,Khammam"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Fosterate Private Limited"}
          subHeading={"FLUTTER DEVELOPER INTERN"}
          fromDate={"2021 June"}
          toDate={"2022 January"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as Mobile Application Developer using Flutter for 6 months.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an Mobile-Application for client to provide car washing services for customers.
          </span>
          <br />
          <span className="resume-description-text">
            - Used Firebase as backend database and Getx as the state management technique.
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the Mobile application with payment gateway(Paytm) and Google Maps.
          </span>
          <br />
          <span className="resume-description-text">
            - Authenticated the App using Google-OAuth and Facebook-OAuth.
          </span>
          <br />
          <span className="resume-description-text">
            - Worked with Agile and scrum team in delivering the product in expected time.
          </span>
          <br />
        </div>
      </div>
      
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with,I have learnt Karnatic Music for 5 years."
      />
      <ResumeHeading
        heading="Cricket"
        description="I love to play cricket a lot with my friends in weekends.I watch cricket a lot and my favourite team is RCB in IPL."
      />
      <ResumeHeading
        heading="Planting Trees"
        description="I love gardening and planting new saplings every week.This actually gives me Pleasant Feeling."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
