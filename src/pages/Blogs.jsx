import React, { useEffect, useState } from "react";
// import "./blogsdetails.css";
import "./blogs.css";

import { allblogsdata, tagCloud } from "../data";
// import { BsPeople } from "react-icons/bs";
import { MdPerson2 } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { FaRegComment } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";
import { allPost } from "../data";
import { allFeed } from "../data";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2; 

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };
  return (
    <>
      <section className="blogs-section">
        <div className="blogs-container">
          <div className="blogs-content-one">
            <div className="blogs-content">
              <h1>Blogs</h1>
            </div>
          </div>
          <div className="blogs-image"></div>
        </div>
      </section>




      <section className="blogs-component-section">
        <div className="blogs-allwrapper">
          <div className="blogs-component-container">
            {allblogsdata.map((blogs) => {
              const { id, blog, para, text } = blogs;
              return (
                <>
                  <div className="blogs-component-display">
                    <div className="blogs-component" key={id}>
                      <img src={blog} />
                      <div className="blogs-component-content" key={id}>
                        <h1>{text}</h1>
                        <p>{para}</p>
                        <div className="blogs-icons-link">
                          <div className="blogs-icons1">
                            <MdPerson2 />
                            <span>Travel,Lifestyle</span>
                          </div>
                          <span>|</span>

                          <div className="blogs-icons1">
                            <FaComments />
                            <span> 03 Comments</span>
                          </div>
                        </div>
                        {/* <div className='overlay'>
                    <p>15<br/>Jan</p>

                    </div> */}
                      </div>
                    </div>
                    <div className="overlay">
                      <p>
                        {" "}
                        15  <span>Jan</span> {" "}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="pagination">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FiChevronLeft />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i + 1)}
                  className={currentPage === i + 1 ? "active" : ""}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>


















          <div className="blogs-component2">
            <div className="blogs-component2-container">
              <div className="blog-search-button">
                <input placeholder="Search Keyword" />
                <div className="blog-button">
                  <button>Search</button>
                </div>
              </div>

              <div className="blog-search-list">
                <div className="bloglist-category">
                  <h1>Category</h1>
                  {/* <div className="bloglist-line"></div> */}
                  <ul className="bloglist-content">
                    <li> 
                        <a href="">Resturant food  <span> (32) </span></a>
                        </li>
                    <li> <a href="">Travel news  <span> (10) </span></a></li>
                    <li> <a href="">Modern technology  <span> (03) </span></a></li>
                    <li> <a href=""> Product <span> (11) </span></a></li>
                    <li> <a href=""> Inspiration <span> (21) </span></a></li>
                    <li> <a href=""> Health Care <span> (21) </span></a></li>
                  </ul>
                </div>
              </div>


              <div className="bloglist-content2">
                <div className="bloglist-content2-content">
                  <h1>Recent Posts</h1>
                  {allPost.map((posts) => {
                    const { id, post, text, date } = posts;
                    return (
                      <>
                        <div key={id} className="blogs-feeds">
                          <img src={post} />
                          <div className="blogs-feeds-content">
                            <p className="blogs-para">{text}</p>
                            <p className="blogs-date">{date}</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>






            <div className="bloglist-content2">
              <div className="tagcloud-content">
                <h1>Tag Clouds</h1>

                <div className="tag-clouds">  
                    {tagCloud.map((cloud) => {
                        const { id, text} = cloud;
                        return (
                            <>
                            <div key={id} className="text-cloud">
                                <p>{text}</p>
                            </div>
                            </>
                        )
                    })}
                </div>
              </div>
            </div>








              <div className="bloglist-content2-insta-feed">
                <div className="bloglist-feed1">
                  <h1>Instagram Feeds</h1>
                  <div className="bloglist-content2-insta-flex">
                    {allFeed.map((instaimg) => {
                      const { id, insta } = instaimg;
                      return (
                        <>
                          <div key={id} className="blogs-feeds-insta-feed">
                            <img src={insta} />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="newsletter">
                <div className="bloglist-feed1">
                  <h1>NewsLetter</h1>
                  <div className="newsletter">
                    <input placeholder="Enter Email" />

                    <div className="newsletter-button">
                      <button>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
