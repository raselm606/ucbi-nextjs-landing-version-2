'use client';
import Button from '@/components/ui/Button';
import countriesData from "@/lib/mock-data/countriesData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import Logo from '../../public/images/logo.png';

import { CgNotes } from "react-icons/cg";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCommentDots, FaRegUser } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const Header_b = () => {

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

  const countryOptions = countriesData.map((c) => ({
    value: c.countryNameEn,
    label: ` ${c.countryNameEn}`,
  }));

  const codeOptions = countriesData.map((c) => ({
    value: `+${c.countryCallingCode}`,
    label: `${c.countryCode} (+${c.countryCallingCode})`,
  }));

  const selectSubjectOptions  = [
    { value: "membership application", label: "Membership application" },
    { value: "request for information", label: "Request for information" },
    { value: "partnership request", label: "Partnership request" },
    { value: "Token launch support", label: "Token launch support" },
  ];

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    country: "",
    phoneCode: "",
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

const fullPhone = `${form.phoneCode}${form.phone}`; // or `${form.phoneCode} ${form.phone}`

  const payload = {
    ...form,
    phone: fullPhone, // overwrite phone
  };

try {
  const res = await fetch("https://api.ucbibanking.io/api/ucbi_contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    setUcStatus("error");
    throw new Error(data?.msg || "❌ " + "Failed! Please recheck the form and try again.");
    
  }

  setUcStatus("success");
  setMsg(data.msg);

  // Google Analytics
  window.gtag("event", "generate_lead", {
    form_name: "UCBI Group Technologies LTD Contact Form",
    name: form.name,
    surname: form.surname,
    subject: form.subject,
    country: form.country,
  });

  setForm({ name: "", surname: "", email: "", country: "", phoneCode: "", phone: "", subject: "", comments: "" });
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
                <Link className="navbar-brand" href="#" >
                <Image src={Logo} width={130} height={44} alt="logo" priority/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav top_nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="/#about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" target="_blank" href="https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a">Blockchain</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/#treasury-management">Treasury</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="modal"   href="#submit-a-request">Submit Request</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/#contact">Contact</Link>
                    </li>
                     
                     
                </ul>
                {/* <div className="price_arra d-flex align-item-center mx-4">
                <Image src={favicon} width={30} height={30} alt="logo" priority/>
                    {err && <p style={{ color: "red", textAlign: "center" }}>{err}</p>}
                <span className="d-block " style={{ color: isPos ? "#16c784" : "#EA3943", fontSize:'11px', fontWeight:'600' }}> 
                {price == null ? "--" : `$${price.toFixed(2)}`}  {" UCBI "} */}
                            {/*(  {change24h == null ? "--" : `${isPos ? "+" : ""}${change24h.toFixed(2)}%`} 24h )*/}
                            {/* </span>
                </div> */}
                <div className="top_button">

                    <Button target="_blank" variant="top_nav_button" href="https://dashboard.ucbibanking.io"> Dashboard</Button>
                </div>
                </div>
            </div>
            </nav>
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="submit-a-request" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-4">
          <div className="modal-header" style={{zIndex:'99999'}}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
           <div className="contact_page_content mb-3 ">
                                    <div className="top_header">
                                      <i><HiUsers /></i>
                                      <div className="head_titl">
                                        <h5 className="" style={{color:'#112d50'}}>Become a Member of <br /> <span style={{color:'#1e6cba'}}>UCBI Group Technologies</span></h5>
                                      <p style={{color:'#112d50'}}>Join our exclusive network and be part of a global technology echosystem <br/> driving innovation and growth</p>
                                      </div>
                                    </div>
                                      
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
                                                <label htmlFor="fullname" className="form-label">Name 
                                                  <span style={{color:'#123052'}}> * </span>
                                                  </label>
          
                                                  <div className="form_name">
                                                    <i className="icon_name"><FaRegUser /> </i>
                                                    <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" id="fullname" aria-describedby="emailHelp" />
                                                  </div>
                                                  
                                                
                                              </div>
          
                                              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="surname" className="form-label">Surname  
                                                  <span style={{color:'#123052'}}> * </span>
                                                  </label>
                                                  <div className="form_name">
                                                    <i className="icon_name"><FaRegUser /> </i>
                                                <input type="text" name="surname" value={form.surname} onChange={handleChange} required className="form-control" id="surname" aria-describedby="surname" /> 
                                                  </div>
                                              </div>
          
                                              <div className="mb-3  col-lg-6 col-md-6 col-sm-12"> 
                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                  Email address  <span style={{color:'#123052'}}> * </span>
                                                  </label>
          
                                                  <div className="form_name">
                                                    <i><HiOutlineMail /></i>
          
                                                     <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                  </div>
          
                                                
          
                                                <div id="emailHelp" className="form-text">We will never share your email with anyone else</div>
                                              </div>
          
                                              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="country" className="form-label">
                                                  Country <span style={{ color: "#123052" }}> * </span>
                                                </label>
           
          
                                                <div className="form_name">
                                                    <i> <FiGlobe /> </i>
          
                                                <Select
                                                  options={countryOptions}
                                                  placeholder="Search country..."
                                                  onChange={(selected) =>
                                                    setForm({ ...form, country: selected.value })
                                                  }
                                                  className="react-select-container from-control"
                                                  classNamePrefix="react-select"
                                                  isSearchable
                                                  isClearable
                                                />
                                                </div>
                                              </div>
          
          
                                              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <label className="form-label">
                                                  Phone <span style={{ color: "#123052" }}> * </span>
                                                </label>
          
                                                <div className="input-group">
                                                  
                                                   
          
                                                  <div className="form_name">
                                                    <i><MdLocalPhone /></i>
          
                                                  <Select
                                                  style={{ width: "50px" }}
                                                  options={codeOptions}
                                                  placeholder="Country code.."
                                                  onChange={(selected) =>
                                                    setForm({ ...form, phoneCode: selected.value })
                                                  }
                                                  className="react-select-container form-input"
                                                  classNamePrefix="react-select"
                                                  isSearchable
                                                  isClearable
                                                />
                                                </div>
          
                                                  {/* Phone Number */}
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="phone"
                                                    placeholder="Enter phone number"
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                    required
                                                  />
                                                </div>
          
                                                <div className="form-text">
                                                  We will never share your phone with anyone else
                                                </div>
                                              </div>
          
          
                                              <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                                <label htmlFor="subject" className="form-label">
                                                  Subject  <span style={{color:'#123052'}}> * </span>
                                                  </label> 
          
                                                <div className="form_name">
                                                    <i> <CgNotes /></i>
          
                                               
          
                                                <Select 
                                                  options={selectSubjectOptions}
                                                  placeholder="Select a subject.."
                                                  onChange={(selected) =>
                                                    setForm({ ...form, subject: selected.value })
                                                  }
                                                  className="react-select-container from-control"
                                                  classNamePrefix="react-select"
                                                  isSearchable
                                                  isClearable
                                                />
                                                </div>
                                              </div>
                                              <div className="mb-3">
                                                <label htmlFor="comment" className="form-label">
                                                  Your Message   <span style={{color:'#123052'}}> * </span>
                                                  </label>
                                                  <div className="form_name">
                                                    <i> <FaRegCommentDots /> </i>
                                                <textarea  className="form-control" name="comments" value={form.comments} onChange={handleChange} required id="comments" rows="4" ></textarea>
                                                </div>
                                                <div id="emailHelp" className="form-text">Please do not include any website link Otherwise we could not be able to receive your request</div>
                                              </div>
                                              <div className="mb-3 d-flex gap-2 form-check">
                                                <input type="checkbox" style={{width:'20px', height:'20px'}}  className="form-check-input" id="exampleCheck11" />
          
                                                <label style={{fontSize:'10px !important', marginTop:'6px'}} className="form-check-label" htmlFor="exampleCheck11">
                                                I agree to the UCBI Group Technologies LTD <Link href="https://doc.ucbibanking.io/ucbi_terms_condition" target="_blank">Terms and Conditions</Link> <br /> 
                                                {/* I will download the subscription file and submit it to UCBI for further processing -
                                                <Link href="#" className="ms-1 text-decoration-underline">Download the subscription file</Link> */}
                                              </label>
          
                                              </div>
                                              <button disabled={loading} type="submit" className=" btnModal">
                                               <i><FaRegPaperPlane /></i> {loading ? "Sending..." : "Submit Request"}
                                                </button>
                                              </div>
                                            </form>
          
                                            <p style={{color: '#132f51', marginTop: '10px'}} className="text-center">
                                              <i style={{fontSize: '20px'}}><IoShieldCheckmarkSharp /></i> Your information is secure and will be used to respond to your request</p>
          
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

export default Header_b