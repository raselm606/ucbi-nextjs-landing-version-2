import Image from "next/image";
import Link from "next/link";
import { cleanText } from "../../lib/utils/text";
import "./BlogCard.css";

export default function BlogCard({ thumb, title, link, desc, date }) {
  return (
    <div className="ucbi-blog-card-wrap">
      <Link href={link} className="ucbi-blog-card">
        <div className="ucbi-blog-thumb">
          <Image
            src={thumb}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="ucbi-blog-img"
          />

          <div className="ucbi-blog-overlay"></div>

          <div className="ucbi-blog-badge">
            <span></span>
            Business
          </div>
        </div>

        <div className="ucbi-blog-content">
          <h3>{cleanText(title)}</h3>

          <p>{cleanText(desc)}</p>

          <div className="ucbi-blog-footer">
            <div className="ucbi-blog-date">
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

              <span>{date}</span>
            </div>

            <span className="ucbi-blog-arrow">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}