'use client';
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import countriesData from "@/lib/mock-data/countriesData";
import Link from "next/link";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaRegCommentDots, FaRegUser } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import Select from "react-select";
 

const SubmitRequest = () => {

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

  //form submit handler
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

  
    setForm({ name: "", surname:"", email: "", country: "", phoneCode: "", phone: "", subject: "", comments: "" });
  } catch (Errors) {
     setUcStatus("error");
    setMsg(   Errors.message);
  } finally {
    setLoading(false);
  }
  
  };
  return (
    <>
      <Header />
       {/* <Redirect to="/#submit-request" delay={0} /> */}
        <div className="contact_page" >
            <div className="container cline" 
            style={{borderLeft:'1px solid #dce0e5', borderRight:'1px solid #dce0e5', height:'100%'}}> 
                <div className="row justify-content-center">
                    <div className="col-lg-9" style={{marginTop:'180px', marginBottom:'100px'}}>
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
                          
                    </div>
                </div>
            </div>
        </div>

        


      <Footer />
    </>
  )
}

export default SubmitRequest