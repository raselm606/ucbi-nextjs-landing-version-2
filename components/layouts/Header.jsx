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

  //form submit handler
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
const [msg, setMsg] = useState("");
const [uc_status, setUcStatus] = useState("");  

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
setMsg("");

try {
  const res = await fetch("https://api.ucbibanking.io/api/ucbi_contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (!res.ok) {
    setUcStatus("error");
    throw new Error(data?.msg || "❌ " + "Failed! Please recheck the form and try again.");
    
  }

  setUcStatus("success");
  setMsg(data.msg);

  setForm({ name: "", email: "", country: "", phone: "", subject: "", comments: "" });
} catch (Errors) {
   setUcStatus("error");
  setMsg(   Errors.message);
} finally {
  setLoading(false);
}

};

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
                    <Link className="nav-link" href="#treasury-management">Treasury</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="modal"   href="#exampleModal">Submit Request</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="#contact">Contact</Link>
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
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
        <div className="modal-header">
            <p className="modal-title fs-6" id="exampleModalLabel" style={{color:'#112e50'}}> Looking to Partner With UCBI Banking Ltd?  </p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body" style={{color:'#112e50'}}>
            <div className="contact_form_arra">

              <form onSubmit={handleSubmit}>
                <div className="row">
                 {msg && (
                  <p className={uc_status === "success" ? "text-success" : "text-danger"}>
                    {msg}
                  </p>
                )}

                
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="fullname" className="form-label">Full Name 
                    <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" id="fullname" aria-describedby="emailHelp" /> 
                </div>
                <div className="mb-3  col-lg-6 col-md-6 col-sm-12"> 
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address  <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                </div>
                <div className="mb-3  col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="country" className="form-label">
                    Country  <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="text"  name="country" value={form.country} onChange={handleChange} required className="form-control" id="country" /> 
                </div>
                <div className="mb-3  col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="phone" className="form-label">
                    Phone  <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="text" name="phone" placeholder="+33" value={form.phone} onChange={handleChange} required className="form-control" id="phone" />
                  <div id="emailHelp" className="form-text">We will never share your phone with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject  <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="comment" className="form-label">
                    Your Message   <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <textarea  className="form-control" name="comments" value={form.comments} onChange={handleChange} required id="comments" rows="4" ></textarea>
                  <div id="emailHelp" className="form-text">Please do not include any website link. Otherwise we could not be able to receive your request.</div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">I agree UCBI Terms and Conditions</label>
                </div>
                <button disabled={loading} type="submit" className="btn btn-primary">
                  {loading ? "Sending..." : "Submit Request"}
                  </button>
                </div>
              </form>

            </div>
        </div>

        {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
      </div> */}
         
        </div>
    </div>
    </div>
    </>
  )
}

export default Header