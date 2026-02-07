"use client";
import { blogData, blogSectionData } from "@/lib/mock-data/blog";
import { slugify, trimByWords } from "@/lib/utils/text";
import Image from "next/image";
import Link from "next/link";
import { Autoplay } from 'swiper/modules';
import arrow_blog from '../../public/images/arrow_blog.svg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const BlogSection =   () => {
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
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
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
                    className="swiper_blog" 
                    >

                        
                    
                

                { blogData.map(({ id, thumb, date, title, desc }) => (
                    <SwiperSlide key={id}>
                            
                            <div className="blog_item" >
                                <Link href={`/blog/${slugify(title)}`}>
                                <div className="blog_img" >
                                    <Image src={thumb} alt="blog1" width={370} height={250} />
                                    <div className="blog_date">
                                        <span>{date}</span>
                                    </div>
                                </div>
                                </Link>
                                <div className="blog_content">
                                    <h4  >{title}</h4>
                                    <p  >{trimByWords(desc,20)}</p>
                                    <Link href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                                </div>
                            </div>
                        
                        
                    </SwiperSlide>
                ))}

                </Swiper>

                </div>
               
               

                

            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSection