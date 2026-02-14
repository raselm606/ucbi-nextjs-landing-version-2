"use client";
 
import { blogData, blogSectionData } from "@/lib/mock-data/blog";
import { trimText,trimByWords, dateOnly } from "@/lib/utils/text";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from 'swiper/modules';
import arrow_blog from '../../public/images/arrow_blog.svg';
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

const BlogSection =   () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/coindex");
        const data = await res.json();

        const latest10 = (data?.Data || [])
          .sort((a, b) => (b.PUBLISHED_ON || 0) - (a.PUBLISHED_ON || 0))
          .slice(0, 15);

        setPosts(latest10);
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
                    <h2  className="section_title_dark">
                        {blogSectionData.title}
                        </h2>
                </div>
            </div>
             
            <div className="row  drs justify-content-center">
                
                 
                <div className="col-lg-9">
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
                        delay: 4000,
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
                            slidesPerView: 3,
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

                            
                            <div className="blog_item" >
                                <Link href={link} target="_blank">
                                <div className="blog_img" >
                                    <Image 
                                    src={thumb} 
                                    alt={title} 
                                    style={{ objectFit: "cover" }} 
                                    unoptimized={typeof thumb === "string"}
                                    width={370} height={200} />
                                    <div className="blog_date">
                                        <span>{date}</span>
                                    </div>
                                </div>
                                </Link>
                                <div className="blog_content">
                                    <h4  >{trimByWords(title,10)}</h4>
                                    <p  >{trimText(desc,100)}</p>
                                    <Link href={link} target="_blank">Read more 
                                    <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                                </div>
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