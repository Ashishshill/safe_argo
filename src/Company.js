import React from "react";
import "./About.css";
import aboutImg from "./img/Da.jpg";
import aboutImg1 from "./img/Gc.jpg";
function Company() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
        <div className="heading">
        <h1 className="heading">Our Beautiful Partners</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
       
      </div>
      <div className="container">
        <div className="row">
        <div className="col__2">
            <img src={aboutImg1} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Safe Argo</h1>
            <div className="about__meta">
                <h3>Rural Livelihoods and Project Evaluation</h3>
              <p className="about__text p__color">Working for 3 years on Database Design & Implementation, Data Quality Monitoring, Data Analysis, Visualization & Interpretation, Critical Thinking and Technological Approach, M & E Design and Planning, Determining Analytical Factors influencing risks and solving them Developing Visual Reports and Presentations and Strong Organizational Skills. Completed Master degree in Applied Statistics and Data Science in 2019, Jahangirnagar University, Bachelor Degree in Business Information Technology, University of Greenwich, London, UK. .   
              </p>
              <p className="about__text p__color">
                
              </p>
              <p className="about__text p__color">
              SAFE served till now includes: DFID, DANIDA, FAO, SDC, CARE Bangladesh, 
              </p>
              {/* <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div> */}
            </div>
          </div>
         
        </div>
      </div>

      {/* Datto Enterprise */}
      <div className="container">
        <div className="row">
          
          <div className="col__2">
            <h1 className="about__heading">Dattto Enterprise</h1>
            <div className="about__meta">
                <h3>Data management and programmer</h3>
              <p className="about__text p__color">Working for 3 years on Database Design & Implementation, Data Quality Monitoring, Data Analysis, Visualization & Interpretation, Critical Thinking and Technological Approach, M & E Design and Planning, Determining Analytical Factors influencing risks and solving them Developing Visual Reports and Presentations and Strong Organizational Skills. Completed Master degree in Applied Statistics and Data Science in 2019, Jahangirnagar University, Bachelor Degree in Business Information Technology, University of Greenwich, London, UK. .   
              </p>
              <p className="about__text p__color">
                
              </p>
              <p className="about__text p__color">
              SAFE served till now includes: DFID, DANIDA, FAO, SDC, CARE Bangladesh, 
              </p>
              {/* <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div> */}
            </div>
          </div>
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default Company;
