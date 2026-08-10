"use client";
import { dateOnly } from '@/lib/utils/text';
import Image from 'next/image';
import Link from 'next/link';
import '../BlogCard.css';
import './BlogTwo.css';

import { useEffect, useState } from "react";

const BlogTwo = () => {

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

      
    const latestPosts = posts.slice(2, 5);

      const featuredPost = posts[1];

    const id = featuredPost?.ID || featuredPost?.URL;
const title = featuredPost?.TITLE || "UCBI Blogs";
const desc = featuredPost?.BODY || "";
const date = featuredPost ? dateOnly(featuredPost.PUBLISHED_ON) : "";

const rawThumb = featuredPost?.IMAGE_URL || "";

const safeThumb =
    rawThumb && rawThumb.startsWith("http")
        ? rawThumb.replace(/^http:/, "https:")
        : "";

const thumb = safeThumb  ;

const link = featuredPost?.URL || "#";

const keyword =
    featuredPost?.KEYWORDS?.split("|")[0] || "";


  return (
    <>

    <div className="blog_section">
        <div className="container cline blog_extra_l">
            <div className="row mb-3"> 
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

            <div className="row g-4">
					<div className="col-lg-7">
						<div className="card-box p-4">
							<div className="row align-items-center g-4">
                        {featuredPost && (
                                <>
                                    <div className="col-lg-6">
                                        <span className="badge badge-custom">
                                            ★ FEATURED
                                        </span>

                                        <Image
                                            src={thumb}
                                            alt={title}
                                            width={100}
                                            height={100}
                                            className="img-fluid feature-img mt-3 w-100"
                                        />
                                    </div>

                                    <div className="col-lg-6">

                                        <div className="category keyw mb-3">
                                            {keyword}
                                        </div>

                                        <h2 className="title">
                                            {title}
                                        </h2>

                                        <p className="desc">
                                            {desc}
                                        </p>

                                        <div className="date mt-4">
                                            {date}
                                        </div>

                                        

                                        <Link class="read mt-4" href={link}>
										<span>Read Full Article</span>
										<span class="arrow">
											<svg fill="none" viewBox="0 0 24 24"><path d="M5 12H19" stroke="currentColor" strokeWidth="2"/><path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2"/></svg>
										</span>
									</Link>

                                    </div>
                                </>
                            )}  
                                                        </div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="latest-box p-4 h-100">
							<h3 className="fw-bold mb-4 kamaj">LATEST NEWS</h3>

                            {latestPosts.map((item) => {
                const id = item.ID || item.URL;
                const title = item.TITLE || "UCBI Blogs ";
                const desc = item.BODY || "";
                const date = dateOnly(item.PUBLISHED_ON);

                const rawThumb = item.IMAGE_URL || "";
                const safeThumb =
                  rawThumb && rawThumb.startsWith("http")
                    ? rawThumb.replace(/^http:/, "https:")
                    : "";
                const thumb = safeThumb ? safeThumb : "";
                const link = item.URL || "#";
                const keyword = item.KEYWORDS?.split("|")[0] || "";

                return (

							<div className="latest-item" key={id}>
                                
								<Image src={thumb} alt="Latest News" height={100} width={100} />
								<div className="flex-grow-1">
									<div className="category">{keyword}</div>
									<h5> <Link target='_blank' href={link}> {title} </Link></h5>
									<div className="date mt-2">
										<svg width="15" height="15" viewBox="0 0 24 24" fill="none">
											<path d="M8 2V5" stroke="currentColor" strokeWidth="1.8"/><path d="M16 2V5" stroke="currentColor" strokeWidth="1.8"/><path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.8"/><path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.8"/>
										</svg>{date}</div>
									</div>
									<div className="arrow align-self-center">
                                        <Link target='_blank' href={link}>  
										<svg fill="none" viewBox="0 0 24 24"><path d="M5 12H19" stroke="currentColor" strokeWidth="2"/><path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2"/></svg>
                                         </Link>
									</div>
                                    
								</div>

                                ); })}
								 
									</div>
								</div>
							</div>
        </div>
    </div>
        
    </>
  )
}

export default BlogTwo