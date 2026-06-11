'use client';
import { useState } from "react";

import countriesData from "@/lib/mock-data/countriesData";
import Image from 'next/image';
import Link from 'next/link';
import Select from "react-select";
import send from '../../public/images/arrow.svg';
import cc from '../../public/images/cc.png';
import fr from '../../public/images/france.png';
import FooterLogo from '../../public/images/logo.png';
import sms from '../../public/images/sms.svg';
import linkedin from '../../public/images/social/linkedin.svg';
import uk from '../../public/images/uk.png';
const Footer = () => {

  //form submit handler
    const [subscriberForm, setSubscriberForm] = useState({ email: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    // ui message state
    const [notice, setNotice] = useState("");
    const [noticeType, setNoticeType] = useState(""); // "success" | "error"

    const onEmailChange = (e) => {
    const { name, value } = e.target;
    setSubscriberForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubscribeSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotice("");
    setNoticeType("");

    try {
      const res = await fetch("https://api.ucbibanking.io/api/ucbi_subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(subscriberForm),
      });

      const data = await res.json().catch(() => ({})); // safe parse

      if (!res.ok) {
        setNoticeType("error");
        throw new Error(data?.msg || "❌ This email is already subscribed.");
      }

      setNoticeType("success");
      setNotice(data?.msg || "✅ Subscribed successfully!");
      setSubscriberForm({ email: "" });
    } catch (err) {
      setNoticeType("error");
      setNotice(err?.message || "❌ Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }

  };

  //token launch support form
  
 const countryOptions = countriesData.map((c) => ({
    value: c.countryNameEn,
    label: ` ${c.countryNameEn}`,
  }));

  const codeOptions = countriesData.map((c) => ({
    value: `+${c.countryCallingCode}`,
    label: `${c.countryCode} (+${c.countryCallingCode})`,
  }));

  const selectSubjectOptions  = [
    { value: "Token launch support", label: "Token launch support" },
    { value: "partnership request", label: "Partnership request" },
    { value: "membership application", label: "Membership application" },
    { value: "request for information", label: "Request for information" },
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
    <div className="footer_section" >
      <div className="container cline">
        <div className="row" >
          <div className="col-lg-3 mb-3" >
            <div className="footer_info">
              <Image  src={FooterLogo} width={120} height={52} alt="Footer Logo"/>
              <p>Receive exclusive UCBI updates <br /> straight to your inbox</p>
              <form onSubmit={onSubscribeSubmit} className="footer_subscriber">
                {notice && (
                  <p className={noticeType === "success" ? "text-success" : "text-danger"}>
                    {notice}
                  </p>
                )}
                <div className="input-group from_area">
                  <span className="input-group-text"><Image src={sms} alt="Mail Icon" /></span>

                  <input type="email" placeholder="Your email address" name="email" value={subscriberForm.email} onChange={onEmailChange} required  className="form-control" />

                  <button disabled={isSubmitting} className="send_btn" type="submit" >
                    <Image src={send} alt="Send Icon" />
                  </button>
                </div>
                <div className="mb-3 mt-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label"  >I agree <Link href="https://doc.ucbibanking.io/ucbi_terms_condition" target="_blank">Terms & Conditions</Link> </label>
                </div>
              </form>
            </div>
          </div>
          <div className=" offset-lg-2  col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Company</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link target="_blank" href="https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a">Blockchain</Link></li>
                  <li><Link data-bs-toggle="modal"   href="#submit-a-request">Submit a Request</Link></li>
                  <li><Link data-bs-toggle="modal"   href="#submit-a-request" >Partnership Advisory</Link></li>
                  <li><Link target="_blank" data-bs-toggle="modal"   href="#token_launch_support" >Token Launch Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="  col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Resources</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#">Arkham Intel</Link></li>
                  <li><Link target="_blank" href="https://finance.yahoo.com/quote/UCBI-USD/">Yahoo Finance</Link></li>
                  <li><Link target="_blank" href="https://coinmarketcap.com/currencies/ucbi-banking/">Coinmarketcap</Link></li>
                  <li><Link target="_blank" href="https://etherscan.io/token/0xb42b35deca033a23401a1a89007a39343a510d0a">Blockchain Explorer</Link></li> 
                </ul>
              </div>
            </div>
          </div>

          <div className="  col-lg-3 mb-3">
            <div className="footer_nav_menus">
              <h6>Contact</h6>
              <div className="footer_navs">
                <ul > 
                  <li><Link   href="mailto:contact@ucbibanking.io">Contact@ucbibanking.io</Link></li> 
                  <li><Link  href="+33376876876"  >+33 184 160 139 
                  <Image style={{width: "12px", height: "13px", marginTop:'-3px', marginLeft: "6px"}} src={fr} alt="france"/> </Link></li> 
                  <li><Link href="+441632960123"  >+44 203 445 63 88 
                  <Image style={{width:"12px", height: "13px", marginTop:'-3px', marginLeft:'6px'}} src={uk} alt="uk"/></Link></li> 
                  <li><Link href="mailto:contact@ucbibanking.io">Monday to Friday at 9am to 6pm</Link></li> 
                  
                </ul>
              </div>
              <div className="cc_web" id="contact">
                <Image  src={cc} alt='ucbibanking.io' />
                     
                    <Link href="#"> 
                       ucbibanking.io
                    </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div className="bottom_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_elements">
              <div className="social">
                <ul> 
                  <li><Link target="_blank" href="https://www.linkedin.com/company/ucbi-banking"><Image   src={linkedin} alt="linkedin"/></Link></li> 
                </ul>
              </div>
              <div className="copyright text-center">
                <p>UCBI Group Technologies LTD Copyright © 2026 All rights reserved</p>
              </div>
              <div className="cc_terms">
                <ul>
                  <li><Link href="https://doc.ucbibanking.io/ucbi_terms_condition" target="_blank">Terms & Conditions</Link></li>
                  <li><Link href="https://doc.ucbibanking.io/ucbi_terms_condition" target="_blank">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Modal --> */}
    <div className="modal fade" id="token_launch_support" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
        <div className="modal-header">
            <p className="modal-title fs-6" id="exampleModalLabel" style={{color:'#112e50'}}> Interested in Becoming a Member of UCBI Group Technologies ? </p>
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
                  <label htmlFor="name" className="form-label">Name 
                    <span style={{color:'#123052'}}> * </span>
                    </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" id="name" aria-describedby="emailHelp" /> 
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="surname" className="form-label">Surname 
                      <span style={{color:'#123052'}}> * </span>
                      </label>
                    <input type="text" name="surname" value={form.surname} onChange={handleChange} required className="form-control" id="surname" aria-describedby="emailHelp" /> 
                  </div>


                <div className="mb-3  col-lg-6 col-md-6 col-sm-12"> 
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address  <span style={{color:'#123052'}}> * </span>
                    </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We will never share your email with anyone else</div>
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label htmlFor="country" className="form-label">
                                        Country <span style={{ color: "#123052" }}> * </span>
                                      </label>

                                       <Select
                                        options={countryOptions}
                                        placeholder="Search country..."
                                        onChange={(selected) =>
                                          setForm({ ...form, country: selected.value  })
                                        }
                                        className="react-select-container from-control"
                                        classNamePrefix="react-select"
                                        isSearchable
                                        isClearable
                                      />
                                    </div>


                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label className="form-label">
                                        Phone <span style={{ color: "#123052" }}> * </span>
                                      </label>

                                      <div className="input-group">
                                        
                                        {/* Country Code */}
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
                                      <Select 
                                        defaultValue={selectSubjectOptions[0]}
                                        options={selectSubjectOptions} 
                                        onChange={(selected) =>
                                          setForm({ ...form, subject: selected.value })
                                        }
                                        className="react-select-container from-control"
                                        classNamePrefix="react-select"
                                        isSearchable
                                        isClearable 
                                      />
                                    </div>
                                  <div className="mb-3">
                                    <label htmlFor="comment" className="form-label">
                                      Your Message   <span style={{color:'#123052'}}> * </span>
                                      </label>
                                    <textarea  className="form-control" name="comments" value={form.comments} onChange={handleChange} required id="comments" rows="4" ></textarea>
                                    <div id="emailHelp" className="form-text">Please do not include any website link Otherwise we could not be able to receive your request</div>
                                  </div>
                                  <div className="mb-3 d-flex gap-2   form-check ">
                                    <input type="checkbox" style={{width:'20px', height:'20px'}} className="form-check-input mr-2" id="ccdcheck" />
                                    <label style={{fontSize:'10px', marginTop:'6px'}} className="form-check-label" htmlFor="ccdcheck">
                    I agree to the UCBI Group Technologies LTD Terms and Conditions <br />
                    
                    {/* I will download the subscription file and submit it to UCBI for further processing -<Link href="#" className="ms-1 text-decoration-underline">Download the subscription file</Link> */}
                  </label>
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

export default Footer