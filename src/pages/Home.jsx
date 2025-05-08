import React, { useEffect } from "react";

import Marquee from "react-fast-marquee";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import accordianpicture from "../assets/accordian-picture.jpg";

import hero1 from "../assets/hero-icon.svg";
import { aboutData } from "../data";
import { allBarbing } from "../data";
import { allTestimonial } from "../data";
import img2 from "../assets/newcut.jpg";
import icon2 from "../assets/right-arrow.svg";
import { services } from "../data";
import { allimages } from "../data";

import barber1 from "../assets/barber1.jpg";
import barber2 from "../assets/barber2.jpg";
import barber3 from "../assets/barber3.jpg";
import barber4 from "../assets/barber4.jpg";
import barber5 from "../assets/barber5.jpg";
import barber6 from "../assets/barber6.jpg";

const Home = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* first section */}
      <section className="homehero-section">
        <div className="homehero">
          <div className="homehero-content-one">
            <div className="homehero-content">
              <img src={hero1} />

              <h1>
                WE'RE THE <br />
                LAST OF <br /> BREED
              </h1>
              <p>Achieve your Dream Style.</p>
              <button className="hero-button">
                <a href="">Book now</a>
              </button>
            </div>
          </div>
          <div className="homehero-image"></div>
        </div>
      </section>
      {/* end of first section */}
















      {/* second section*/}

      <section className="about-section">
        <div className="about-container">
          <div className="about-content-one">
            {aboutData.map((fooditem) => {
              const { id, paragraph } = fooditem;
              return (
                <div key={id} className="about-content-flex">
                  <div>
                    <img src={icon2} />
                  </div>
                  <p>{paragraph}</p>
                </div>
              );
            })}
          </div>

          <div className="abouthero-image">
            <img src={img2} alt="About Our Barbershop" />
          </div>

          <div className="about-content-two">
            <div className="about-accent-line"></div>
            <h1>ABOUT OUR STORY</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available be
              the majority have suffered alteration in some form, by injected
              humour or randomised words.
            </p>

            <button className="abouthero-btn">Book Now</button>
          </div>
        </div>
      </section>

      {/* end of second section */}















      {/* thrid section */}

      <section className="cutting-section">
        <div className="cutting-section-container">
          <div className="cutting1">
            <img src={barber1} alt="Barber 1" />
            <img src={barber2} alt="Barber 2" />
            <img src={barber3} alt="Barber 3" />
            <img src={barber4} alt="Barber 4" />
            <img src={barber5} alt="Barber 5" />
            <img src={barber6} alt="Barber 6" />
          </div>

          <div className="cutting2">
            <div className="cutting2-contents">
              <div className="top-price"></div>
              <h1>
                OUR TOP PRICE
                <hr className="price-divider" />
              </h1>
              <div className="cutting2-content">
                {allBarbing.map((alllist) => {
                  const { id, text, price } = alllist;
                  return (
                    <>
                      <div key={id} className="cutting2-content-list">
                        <p>{text}</p>
                        <div className="cutting2-price">
                          From <span className="cutting2-price">${price}</span>
                        </div>
                      </div>
                      <hr className="item-divider" />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end of section 3 */}












      {/* section 4 */}

      <div className="accordion">

        <div className="accordion-section">
          <div className="about-accent-line"></div>
          <h1> All We Do for You </h1>
          <Accordion expanded={expanded === "panel1"}onChange={handleChange("panel1")}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="pickme" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{ backgroundColor: "#150303" }}
            >
              <Typography className="accordion-head" sx={{ color: "#ffffff" }}>
                <span className="accordionhead-header">For Hair</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Special Beard Treatment</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Color your Beard</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>Wax your Beard</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>

              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            className="accordion-second"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="pickme" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{ backgroundColor: "#150303" }}
            >
              <Typography className="accordion-head" sx={{ color: "#ffffff" }}>
                <span className="accordionhead-header">For Beards</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography className="typohead">
                  <span>Trim your hair</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>Special Beard Treatment</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
              <div>
                <Typography className="typohead">
                  <span>Color your Beard</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>

              <div>
                <Typography className="typohead">
                  <span>TWax your Beard</span>
                  <span>
                    From <span className="currency">$50</span>
                  </span>
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="accordion-img">
          <img src={accordianpicture} />
        </div>
      </div>

      {/* end of section 4 */}








      {/* section 5 */}


      <section className="services-section">
        <div className="services-container">
          {services.map((service) => {
            const { id, icon, title, description } = service;
            return (
              <>
                <div className="container-card">
                  <img src={icon} />
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <div className="services-overlay"></div>
                </div>
              </>
            );
          })}
        </div>
      </section>


      {/* end of section 5 */}





















      {/* barbing-section */}

      <section className="barbing-section">
        <div className="barbing-container">
          <Marquee autoFill={true} direction="left" speed={15}>
            {allimages.map((image) => {
              const { id, gallery } = image;
              return (
                <div key={id} className="barbing">
                  <img src={gallery} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>








      {/* get to know section */}

      <section className="customer-section">
        <div className="customer-line"></div>
        <h1>CUSTOMERS SAY ABOUT US</h1>

        <div className="customer-flex-container">
          {allTestimonial.map((testimony) => {
            const { id, name, text, test } = testimony;
            return (
              <div className="customer-flex" key={id}>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={5}
                    precision={0.2}
                    readOnly
                    className="rating"
                  />
                </Stack>
                <p className="customer-paragraph"> 
                  "{text}
                </p>
                <div className="profile">
                  <img src={test} alt={name} />
                  <p className="gettoknow">{name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>



    </>

  );
  
};

export default Home;
