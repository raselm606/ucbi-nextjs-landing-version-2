'use client';
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import favicon from '../../public/apple-touch-icon.png';
import Logo from '../../public/images/logo.svg';
const Header = () => {

    const [price, setPrice] = useState(null);
    const [change24h, setChange24h] = useState(null);
    const [fdv, setFdv] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
          let alive = true;

          function findUsdQuote(obj) {
            // obj এর ভেতরে এমন একটা object খুঁজবো যেখানে
            // price, percent_change_24h, fully_diluted_market_cap আছে
            if (!obj || typeof obj !== "object") return null;

            // যদি এটা USD quote object হয়
            if (
              typeof obj.price === "number" &&
              typeof obj.percent_change_24h === "number" &&
              typeof obj.fully_diluted_market_cap === "number"
            ) {
              return obj;
            }

            // array হলে iterate
            if (Array.isArray(obj)) {
              for (const v of obj) {
                const found = findUsdQuote(v);
                if (found) return found;
              }
              return null;
            }

            // object হলে iterate
            for (const k of Object.keys(obj)) {
              const found = findUsdQuote(obj[k]);
              if (found) return found;
            }

            return null;
          }

          async function load() {
            try {
              setErr(null);

              const res = await fetch("/api/ucbi/market", { cache: "no-store" });
              const text = await res.text();

              let json;
              try {
                json = JSON.parse(text);
              } catch {
                throw new Error("API Error");
              }

              if (!res.ok) {
                throw new Error(`API HTTP ${res.status}`);
              }

              // এখানে magic: পুরো JSON এর ভেতর থেকে USD quote auto find
              const usd = findUsdQuote(json);

              if (!usd) {
                // debug help (একবার দেখার জন্য)
                console.log("API response shape:", json);
                throw new Error("USD quote not found in response");
              }

              if (!alive) return;

              setPrice(usd.price);
              setChange24h(usd.percent_change_24h);
              setFdv(usd.fully_diluted_market_cap);
            } catch (e) {
              console.log("UCBI component error:", e);
              if (alive) setErr(e?.message || "Failed to load market data");
            }
          }

          load();
          return () => {
            alive = false;
          };
    }, []);

  const isPos = typeof change24h === "number" && change24h >= 0;

  return (
    <>
    <div className="top_header">
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" href="/">
                <Image src={Logo} width={130} height={44} alt="logo" priority/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav top_nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Blockchain</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#treasury">Treasury</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="modal"   href="#exampleModal">Submit Request</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#">Contact</Link>
                    </li>
                     
                     
                </ul>
                <div className="price_arra d-flex align-item-center mx-4">
                <Image src={favicon} width={30} height={30} alt="logo" priority/>
                    {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}
                <span className="d-block " style={{ color: isPos ? "#16c784" : "#EA3943", fontSize:'11px', fontWeight:'600' }}> 
                {price == null ? "--" : `$${price.toFixed(2)}`}  {" UCBI "}
                            {/*(  {change24h == null ? "--" : `${isPos ? "+" : ""}${change24h.toFixed(2)}%`} 24h )*/}
                            </span>
                </div>
                <div className="top_button">

                    <Button variant="top_nav_button" href="#" target="_blank"> Dashboard</Button>
                </div>
                </div>
            </div>
            </nav>
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <div className="modal-header">
            <h4 className="modal-title fs-5" id="exampleModalLabel" style={{color:'#112e50'}}>Want to invest in <strong>UCBI</strong> Ltd? </h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{color:'#112e50'}}>
            <h5 className="mb-4" style={{color:'#112e50'}}>Contact: </h5>
            <p style={{color:'#112e50'}}> <strong>Phone:</strong> +33 376 876 876 ( FR )</p>
            <p style={{color:'#112e50'}}> <strong>Phone:</strong> +44 1632 960 123 ( UK )</p>

            <p style={{color:'#112e50'}}> <strong>Email:</strong> contact@ucbibanking.io</p>
        </div>

        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
      </div>
         
        </div>
    </div>
    </div>
    </>
  )
}

export default Header