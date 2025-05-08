import React, { useEffect } from "react";

import "./gallery.css";
import { allgalleryimage } from "../data";

const Gallery = () => {
  return (
    <>
      <section className="homehero-section">
        <div className="homehero4">
          <div className="homehero-content-one4">
            <div className="homeheros-content4">
              <h1> Gallery </h1>
            </div>
          </div>

          <div className="homehero-image3"></div>
        </div>
      </section>
      {/* end of first section */}

      {/* customer section */}

      <section className="customer-sections">
        <div className="customer-lines"></div>
        <h1>Gallery</h1>

        <div className="gallery-pictures">
          {allgalleryimage.map((images) => {
            const { id, all } = images;
            return (
              <>
                <div key={id}>
                  <img src={all} />
                </div>
              </>
            );
          })}
        </div>
      </section>

      {/* end of customer section */}
    </>
  );
};

export default Gallery;
