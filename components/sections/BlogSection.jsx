"use client";
 
import { blogSectionData } from "@/lib/mock-data/blog";
import { dateOnly } from "@/lib/utils/text";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay } from 'swiper/modules';
import placeholder_blog from '../../public/images/blog3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 
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
        <div className="container cline"> 
            <div className="row mb-3">
                <div className="col-lg-12 text-center">
                    <span className="blog_tag"> Insights & news</span>
                    <h2  className="section_title_dark">
                        {blogSectionData.title}
                    </h2>
                </div>
            </div>
             
            <div className="row  drs justify-content-center">
                              
                <div className="col-lg-12">
                    {/* <div className="swiper_nav_btn mb-4 d-flex justify-content-end">
                        <button className="prev-btn">←</button>
                        <button className="next-btn">→</button>
                    </div> */}
                       
                <Swiper
                    // install Swiper modules
                             
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
                            {/* <div className="blog_item" >
                                <Link href={link} target="_blank">
                                <div className="blog_img" >
                                    <Image 
                                    src={thumb} 
                                    alt={title} 
                                    style={{ objectFit: "cover" }} 
                                    unoptimized={typeof thumb === "string"}
                                    width={370} height={200} />
                                    <div className="blog_date">
                                        <span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 2V5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                        <path d="M17 2V5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                        <path d="M3.5 9H20.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                                        <path d="M5 4H19C20.1 4 21 4.9 21 6V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V6C3 4.9 3.9 4 5 4Z"
                                            stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                                        <path d="M8 13H8.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                                        <path d="M12 13H12.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                                        <path d="M16 13H16.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                                        <path d="M8 17H8.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                                        <path d="M12 17H12.01" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
                                    </svg> {date}</span>
                                    </div>
                                </div>
                                </Link>
                                <div className="blog_content">
                                    <h4  >{trimText(title,26)}</h4> 
                                    <Link href={link} target="_blank">Read Article 
                                    <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                                </div>
                            </div> */}

                            <div className="blog_item" >
                                 <Link href={link} target="_blank" className="blog-image-card d-block text-decoration-none">
                                    <div
                                    className="blog-image-card-inner"
                                    style={{ backgroundImage: `url(${thumb})` }}
                                    >
                                    <div className="blog-card-overlay"></div>

                                    {/* Top-left clipped area content */}
                                    <div className="blog-card-top">
                                        <span className="blog-card-category">Business</span>
                                    </div>

                                    {/* Bottom overlay content */}
                                    <div className="blog-card-bottom">
                                        <div className="blog-card-date">
                                        <span className="blog-card-calendar">
                                            <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
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
                                                d="M3 9H21"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />
                                            <rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="17"
                                                rx="3"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                            />
                                            </svg>
                                        </span>
                                        <span>{date}</span>
                                        </div>

                                        <span className="blog-card-arrow">
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            d="M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            />
                                            <path
                                            d="M13 6L19 12L13 18"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            />
                                        </svg>
                                        </span>
                                    </div>
                                    </div>
                                </Link>

                                
                            </div>
                                               
                    </SwiperSlide>
                ); })}

                </Swiper>

                </div>                                         
            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSection