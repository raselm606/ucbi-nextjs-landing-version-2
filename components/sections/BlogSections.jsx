"use client";
 
import Image from "next/image";
import { useEffect, useState } from "react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './BlogCard.css';

 
// function trimByWords(text = "", count = 20) {
//   return text.split(" ").slice(0, count).join(" ") + "...";
// }

const BlogSection = () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/coindex");
        const data = await res.json();

        const latest15 = (data?.Data || [])
          .sort((a, b) => (b.PUBLISHED_ON || 0) - (a.PUBLISHED_ON || 0))
          .slice(0, 15);

        setPosts(latest15);
      } catch (err) {
        console.error("Failed to load posts", err);
      }
    }

    loadPosts();
  }, []);

  return (
    <>
    <div className="blog_section">
        <div className="container cline blog_extra_l"> 
            <div className="row mb-3">
                {/* <div className="col-lg-12 text-center">
                    <span className="blog_tag"> Insights & news</span>
                    <h2  className="section_title_dark">
                        {blogSectionData.title}
                    </h2>
                </div> */}
                <div className="col-lg-12">
                    <div className="ucbi-blog-section-heading">
                        <span className="ucbi-heading-kicker">
                            <span className="ucbi-kicker-dot"></span>
                            Insights & news
                        </span>

                        <h2>Stay Updated with <br />Latest Articles</h2>

                        <p>
                            Expert analysis, industry trends, and market insights <br /> to keep you informed and ahead
                        </p>
                    </div>
                </div>

            </div>
             
            <div className="row  drs ">

                <div className="col-lg-6">
                    <div className="flex_blog_area">
                    <div className="featured_section_blog">
                        <div className="featured_btn_blog">
                            Featured
                        </div>
                        <Image src="https://cdn.pixabay.com/photo/2026/07/25/15/40/anselmo7511-cat-10394867_1280.jpg" alt="Featured Blog" height={100} width={100} />
                    </div>
                    <div className="featured_section_text_blog">
                        <span>Blockchain </span>
                        <h3>Featured Blog Post</h3>
                        <p>This is a brief description of the featured blog post.</p>

                        <div className="date_part">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                                <path
                                d="M8 2V5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                />
                                <path
                                d="M16 2V5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                />
                                <path
                                d="M3.5 9.09H20.5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                />
                                <path
                                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                />
                            </svg>
                            <span>01 july 2026</span>
                        </div>
                    </div>
                    </div>
                </div>
                              
                <div className="col-lg-12">
                    {/* <div className="swiper_nav_btn mb-4 d-flex justify-content-end">
                        <button className="prev-btn">←</button>
                        <button className="next-btn">→</button>
                    </div> */}
                       
                {/* <Swiper 
                             
                    modules={[ Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    autoplay= {{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}

                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    className="swiper_blog" >                    
                   
                
               {posts.map((item) => {
                const id = item.ID || item.URL;
                const title = item.TITLE || "UCBI Blogs ";
                const desc = item.BODY || "";
                const date = dateOnly(item.PUBLISHED_ON);

                const rawThumb = item.IMAGE_URL || "";
                const safeThumb =
                  rawThumb && rawThumb.startsWith("http")
                    ? rawThumb.replace(/^http:/, "https:")
                    : "";
                const thumb = safeThumb ? safeThumb : placeholder_blog;
                const link = item.URL || "#";

                return (
                    <SwiperSlide key={id}>                   
                            

                            <BlogCard
                          
                            thumb={thumb}
                            title={title}
                            link={link}
                            desc={desc}
                            date={date}
                            />
                                               
                    </SwiperSlide>
                ); })}

                </Swiper> */}

                </div>                                         
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSection