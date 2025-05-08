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
import "./service.css";

const Service = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {/* first section */}
      <section className="homehero-section">
        <div className="homehero3">
          <div className="homehero-content-one2">
            <div className="homeheros-content2">
              <h1> Services </h1>
            </div>
          </div>

          <div className="homehero-image2"></div>
        </div>
      </section>
      {/* end of first section */}























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

      {/* end of section 5 */}















      {/* customer section */}

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
     {/* end of customer section */}
    </>
  );
};

export default Service;
