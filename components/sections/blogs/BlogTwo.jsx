import { getCoinDeskNews } from "@/lib/coindesk/coindesk";
import { trimText } from "@/lib/utils/text";
import Image from "next/image";
import Link from "next/link";
import "../BlogCard.css";
import "./BlogTwo.css";

const BlogTwo = async () => {

    // Fetch CoinDesk RSS on the server
    // Cached for 24 hours inside getCoinDeskNews()
    const posts = await getCoinDeskNews();

    // First article = Featured
    const featuredPost = posts[0] || null;

    // Next 3 articles = Latest News
    const latestPosts = posts.slice(1, 4);

    // Featured article data
    const title = featuredPost?.title || "UCBI Blogs";
    const desc = featuredPost?.description || "";
    const date = featuredPost?.published_date || "";
    const thumb = featuredPost?.image || "";
    const link = featuredPost?.url || "#";
    const keyword = featuredPost?.category || "News";

    return (
        <div className="blog_section">

            <div className="container cline blog_extra_l">

                {/* SECTION HEADING */}
                <div className="row mb-3">
                    <div className="col-lg-12">

                        <div className="ucbi-blog-section-heading">

                            <span className="ucbi-heading-kicker">
                                <span className="ucbi-kicker-dot"></span>
                                Insights & news
                            </span>

                            <h2>
                                Stay Updated with <br />
                                Latest Articles
                            </h2>

                            <p>
                                Expert analysis, industry trends, and market insights <br />
                                to keep you informed and ahead
                            </p>

                        </div>

                    </div>
                </div>


                {/* BLOG CONTENT */}
                <div className="row g-4">

                    {/* =========================
                        FEATURED ARTICLE
                    ========================== */}

                    <div className="col-lg-7">

                        <div className="card-box p-4">

                            <div className="row align-items-center g-4">

                                {featuredPost && (
                                    <>

                                        {/* FEATURED IMAGE */}
                                        <div className="col-lg-6">

                                            <span className="badge badge-custom">
                                                ★ FEATURED
                                            </span>

                                            {thumb && (
                                                <Image
                                                    src={thumb}
                                                    alt={title}
                                                    width={1405}
                                                    height={790}
                                                    className="img-fluid feature-img mt-3 w-100"
                                                />
                                            )}

                                        </div>


                                        {/* FEATURED CONTENT */}
                                        <div className="col-lg-6">

                                            <div className="category keyw mb-3">
                                                {keyword}
                                            </div>

                                            <h2 className="title">
                                                {trimText(title, 140)}
                                            </h2>

                                            <p className="desc">
                                                {trimText(desc, 210)}
                                            </p>

                                            <div className="date mt-4">
                                                {date}
                                            </div>


                                            <Link
                                                className="read mt-4"
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >

                                                <span>
                                                    Read Full Article
                                                </span>

                                                <span className="arrow">

                                                    <svg
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            d="M5 12H19"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        />

                                                        <path
                                                            d="M13 6L19 12L13 18"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                        />

                                                    </svg>

                                                </span>

                                            </Link>

                                        </div>

                                    </>
                                )}

                            </div>

                        </div>

                    </div>


                    {/* =========================
                        LATEST NEWS
                    ========================== */}

                    <div className="col-lg-5">

                        <div className="latest-box p-4 h-100">

                            <h3 className="fw-bold mb-4 kamaj">
                                LATEST NEWS
                            </h3>


                            {latestPosts.map((item) => {

                                const id =
                                    item.guid ||
                                    item.url;

                                const title =
                                    item.title ||
                                    "UCBI Blogs";

                                const date =
                                    item.published_date ||
                                    "";

                                const thumb =
                                    item.image ||
                                    "";

                                const link =
                                    item.url ||
                                    "#";

                                const keyword =
                                    item.category ||
                                    "News";


                                return (

                                    <div
                                        className="latest-item"
                                        key={id}
                                    >

                                        {/* IMAGE */}

                                        {thumb && (
                                            <Image
                                                src={thumb}
                                                alt={title}
                                                height={100}
                                                width={100}
                                            />
                                        )}


                                        {/* CONTENT */}

                                        <div className="flex-grow-1">

                                            <div className="category">
                                                {keyword}
                                            </div>

                                            <h5>

                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={link}
                                                >
                                                    {trimText(title, 45)}
                                                </Link>

                                            </h5>


                                            <div className="date mt-2">

                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >

                                                    <path
                                                        d="M8 2V5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />

                                                    <path
                                                        d="M16 2V5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />

                                                    <path
                                                        d="M3.5 9.09H20.5"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />

                                                    <path
                                                        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.8"
                                                    />

                                                </svg>

                                                {date}

                                            </div>

                                        </div>


                                        {/* ARROW */}

                                        <div className="arrow align-self-center">

                                            <Link
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={link}
                                            >

                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >

                                                    <path
                                                        d="M5 12H19"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />

                                                    <path
                                                        d="M13 6L19 12L13 18"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    />

                                                </svg>

                                            </Link>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default BlogTwo;