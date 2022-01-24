import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <div>
      <div className="mid-box">
        <div className="container">
          <div className="typewriter">
            <h1 className="typed-out main-heading">Right To Education</h1>
          </div>

          <div className="row">
            <div className="col-lg-6">
            <h5 className="para1">Our Mission:</h5>

              <p className="para1">
                Our aim is to provide excellent and free courses to all of the
                students belonging from class 6th to class 12th of any board
                (CBSE,ICSE etc.) with quality content. In india there are many
                students who can't afford the high demanding fees of good
                instituitions so they can not get quality education and good
                mentor as well. So, here we came up with little startup to help
                students like you. Hope, you find this website useful.
              </p>

              <button className="btn btn-md btn-info">
                <a className="learn" href="#learnMore">
                  Learn More
                </a>
              </button>
            </div>

            <div className="col-lg-6 childrens-image">
              <img
                src="/images/childrenhome.jpg"
                alt="homepage"
                style={{ height: "100%", width: "80%",boxShadow: "0px 0px 5px white" , borderRadius: "5px"}}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="middle">
        <div id="learnMore" className="block">
          <img
            className="question-student"
            src="/images/question.png"
            alt="learnMore"
            height="150px"
            width="150px"
          />
          <h4>What is actually Gyandan?</h4>
          <p>
            Gynadan is an educational portal to help students belonging to poor
            family to provide them free education with the mentorship from great
            teachers through online mode. It is an opportunity for students to
            clear their doubts from the teachers at the time which will be
            scheduled by teacher.
          </p>
        </div>

        <div className="block">
          <img
            className="work-teacher"
            alt="teacher"
            src="/images/howtowork.png"
            height="150px"
            width="150px"
          />
          <h4 className="how">How it works?</h4>
          <p className="para">
            First of all students and mentors need to register himself by giving
            some basic details. After their successfull registration they need
            to login into their account to use their respective features.
          </p>
        </div>

        <div className="block">
          <img
            className="question-student"
            alt="student"
            src="/images/student.png"
            height="150px"
            width="150px"
          />
          <h4>For Students</h4>
          <p>
            After successfull login they need to select or choose their class,
            subject ,topic and board, after that he/she can see the list of
            teachers/mentors respective to thier preferred choices, acoordingly
            he/she can choose their teacher and can start thier journey. At the
            bottom they can also watch the live classes streaming if they want
            to join them then they can do so as well.
          </p>
        </div>

        <div className="block">
          <img
            className="work-teacher"
            alt="teacher"
            src="/images/teacher.png"
            height="150px"
            width="150px"
          />
          <h4 className="how">For Teachers</h4>
          <p className="para">
            After successfull logging to their account. They can modify their
            details and can see the list of students allotated to him and
            accordingly he/she need to allot a date and time to these students.
            They also have an option to start a live class if they want to do
            so.
          </p>
        </div>
      </div>

      <div id="features">
        <div className="row">
          <div className="col-lg-4 feature-box">
            <img src="/images/freecost.png" alt="free" height="100px" width="100px" />
            <h3>Free of cost</h3>
            <p>Everything is free of cost from teaching to guidance.</p>
          </div>

          <div className="col-lg-4 feature-box">
            <img
              src="./images/trustedcontent.png"
              alt="Trusted"
              height="100px"
              width="100px"
            />
            <h3>Trusted Content</h3>
            <p>
              Created by subject experts having an experience of atleast 8-10
              years.
            </p>
          </div>

          <div className="col-lg-4 feature-box">
            <img src="/images/contact.png" alt="contact" height="100px" width="100px" />
            <h3>Contact Teachers</h3>
            <p>
              In case if you have any query/doubt you can directly contact
              corresponding subject teacher.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div
          id="About Us"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-touch="true"
          data-bs-pause="hover"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#About Us"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#About Us"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#About Us"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/vedPhoto.png"
                className="our-images"
                alt="Ved Prakash"
              />
              <h5>Ved Prakash</h5>
              <p className="our-details">
                "Hello Everyone, Myself Ved Prakash and currently I am DTU
                second year student I am passionate about coding and our aim is
                to provide best educational content to school students
                especially for those who can't afford coaching. We hope you
                enjoy our website."
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="images\tusharPhoto.jpeg"
                className="our-images"
                alt="Tushar Pal"
              />
              <h5>Tushar Pal</h5>
              <p className="our-details">
                "Hi Everyone, I am Tushar Pal and currently I am in second year
                from CSE branch in DTU. Learning about new technical thing is my
                hobby, i also like to think something creative and love to do
                work with my teammates. Our aim is to develop some skills to the
                every children of india through education, so that they can lead
                india in future."
              </p>
            </div>
            <div className="carousel-item">
              <img
                src="images/VikramPhoto.jpeg"
                className="our-images"
                alt="Vikram Mishra"
              />
              <h5>Vikram Mishra</h5>
              <p className="our-details">
                "Hello Everyone, Myself Vikram Mishra and currently I am DTU
                second year student I am passionate about coding and our aim is
                to provide best educational content to school students
                especially for those who can't afford coaching. We hope you
                enjoy our website."
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        Copyright © 2022 by 
    <a className="text-reset fw-bold" href="/"> Team Big-O-Master</a> | All Rights Reserved
  </div>
    </div>
  );
}

export default Homepage;
