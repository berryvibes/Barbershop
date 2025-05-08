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
import "./about.css";

const About = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* first section */}
      <section className="homehero-section1">
        <div className="homehero2">
          <div className="homehero-content-one1">
            <div className="homeheros-content1">
              <h1> About Us </h1>
            </div>
          </div>

          <div className="homehero-image1"></div>
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












      {/* section 4 */}

      <div className="accordion">
        <div className="accordion-section">
          <div className="about-accent-line"></div>
          <h1> All We Do for You </h1>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
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
              <div></div>
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
      {/* end of section 5 */}












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
                <p className="customer-paragraph">"{text}</p>
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

export default About;
