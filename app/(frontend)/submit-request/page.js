'use client';
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import countriesData from "@/lib/mock-data/countriesData";
import Link from "next/link";
import { useState } from "react";



// export const metadata = {
//   title: "Submit a Request - Private Blockchain Data Banking ",
//   description:
//     "contact us to submit a request for our private blockchain data banking services, including inquiries about investment opportunities, treasury management solutions, and partnership collaborations. Our team is here to assist you with any questions or specific requests related to our exclusive private equity crypto-finance offerings within the UCBI Holding structure.",
// };

const SubmitRequest = () => {

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
                <div className="row">
                    <div className="col-lg-12" style={{marginTop:'180px', marginBottom:'100px'}}>
                        <div className="contact_page_content mb-5 ">
                            <h5 className="" style={{color:'#112d50'}}>Interested in Becoming a Member of UCBI Group Technologies?</h5>
                            <p style={{color:'#112d50'}}>Submit a request to get in touch with our team and explore partnership opportunities.</p>
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
                                        <span style={{color:'#EA3943'}}> * </span>
                                        </label>
                                      <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" id="fullname" aria-describedby="emailHelp" /> 
                                    </div>

                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label htmlFor="surname" className="form-label">Surname 
                                        <span style={{color:'#EA3943'}}> * </span>
                                        </label>
                                      <input type="text" name="surname" value={form.surname} onChange={handleChange} required className="form-control" id="surname" aria-describedby="surname" /> 
                                    </div>

                                    <div className="mb-3  col-lg-6 col-md-6 col-sm-12"> 
                                      <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email address  <span style={{color:'#EA3943'}}> * </span>
                                        </label>
                                      <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                      <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
                                    </div>

                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label htmlFor="country" className="form-label">
                                        Country <span style={{ color: "#EA3943" }}> * </span>
                                      </label>

                                      <select
                                        name="country"
                                        value={form.country}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        id="country"
                                      >
                                        <option value="">Select a country</option>

                                        {countriesData.map((country) => (
                                          <option key={country.countryCode} value={country.countryNameEn}>
                                             {country.countryNameEn} 
                                          </option>
                                        ))}
                                      </select>
                                    </div>


                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label className="form-label">
                                        Phone <span style={{ color: "#EA3943" }}> * </span>
                                      </label>

                                      <div className="input-group">
                                        
                                        {/* Country Code */}
                                        <select
                                          className="form-select"
                                          name="phoneCode"
                                          value={form.phoneCode}
                                          onChange={handleChange}
                                          required
                                          style={{ maxWidth: "100px" }}
                                        >
                                          <option value="">code</option>

                                          {countriesData.map((country) => (
                                            <option
                                              key={country.countryCode}
                                              value={`+${country.countryCallingCode}`}
                                            >
                                              +{country.countryCallingCode} {country.flag}
                                            </option>
                                          ))}
                                        </select>

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
                                        We will never share your phone with anyone else.
                                      </div>
                                    </div>


                                    <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
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
                                    <div className="mb-3 d-flex gap-2 form-check">
                                      <input type="checkbox" style={{width:'20px', height:'20px'}}  className="form-check-input" id="exampleCheck11" />

                                      <label className="form-check-label" for="exampleCheck11">
                                      I agree to the UCBI Terms and Conditions. I will download the subscription file and submit it to UCBI for further processing. <br />
                                      {" "}
                                      <Link href="#" className="ms-1 text-decoration-underline">Download the subscription file</Link>
                                    </label>

                                    </div>
                                    <button disabled={loading} type="submit" className="btn btn-primary">
                                      {loading ? "Sending..." : "Submit Request"}
                                      </button>
                                    </div>
                                  </form>

                                </div>
                            </div>
                          
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Modal --> */}
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">
        <div className="modal-header">
            <p className="modal-title fs-6" id="exampleModalLabel" style={{color:'#112e50'}}> Looking to Partner With UCBI Banking Ltd?  </p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        

        {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
      </div> */}
         
        </div>
    </div>
    </div>


      <Footer />
    </>
  )
}

export default SubmitRequest