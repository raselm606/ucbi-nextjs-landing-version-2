"use client";
import Button from '@/components/ui/Button';
import countriesData from "@/lib/mock-data/countriesData";
import { useState } from "react";
import Select from "react-select";

const PapersToken = () => {
 const countryOptions = countriesData.map((c) => ({
    value: c.countryNameEn,
    label: ` ${c.countryNameEn}`,
  }));

  const codeOptions = countriesData.map((c) => ({
    value: `+${c.countryCallingCode}`,
    label: `${c.countryNameEn} (+${c.countryCallingCode})`,
  }));

  const selectSubjectOptions  = [
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
    <div className="papers_token_section">
        <div className="container clinee">
            <div className="row ">
                <div className="col-lg-5 ">
                    <div className="white_paper_area" >
                       <h2 className="section_title_white" >
                        Business Model
                       </h2>
                       <p className="section_paragraph_white" > 
                        UCBI Business Model provides a well structured overview of the Ethereum focused treasury and Private Investment platform It outlines the diversified allocation governance framework and risk principles supporting disciplined multi asset growth long term sustainability and institutional alignment
                        </p> 
                        <Button variant="primary" href="https://doc.ucbibanking.io/ucbi_whitepaper" target="_blank"> Download</Button> 
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="middle_paper"></div>
                </div>
                <div className="  col-lg-5">
                    <div className="tokenomics_area" >
                        <h2 className="section_title_dark" >
                            Partnership Advisory  
                        </h2>
                        <p className="section_paragraph_dark" >
                            Strategy Advisory services are  provided to partners & shareholders through formal appointments and structured engagements our advisory scope covers treasury structuring blockchain integration corporate finance strategy and long-term development delivered within a strictly  private and confidential framework
                        </p>
                        <Button style={{background:'#112E50 !important'}}  data-bs-toggle="modal"   href="#submit_a_req"  > Request </Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>


     {/* <!-- Modal --> */}
    <div className="modal fade" id="submit_a_req" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" id="name" aria-describedby="emailHelp" /> 
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                    <label htmlFor="surname" className="form-label">Surname 
                      <span style={{color:'#EA3943'}}> * </span>
                      </label>
                    <input type="text" name="surname" value={form.surname} onChange={handleChange} required className="form-control" id="surname" aria-describedby="emailHelp" /> 
                  </div>


                <div className="mb-3  col-lg-6 col-md-6 col-sm-12"> 
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address  <span style={{color:'#EA3943'}}> * </span>
                    </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We will never share your email with anyone else</div>
                </div>
                <div className="mb-3 col-lg-6 col-md-6 col-sm-12">
                                      <label htmlFor="country" className="form-label">
                                        Country <span style={{ color: "#EA3943" }}> * </span>
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
                                        Phone <span style={{ color: "#EA3943" }}> * </span>
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
                                        Subject  <span style={{color:'#EA3943'}}> * </span>
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
                                      Your Message   <span style={{color:'#EA3943'}}> * </span>
                                      </label>
                                    <textarea  className="form-control" name="comments" value={form.comments} onChange={handleChange} required id="comments" rows="4" ></textarea>
                                    <div id="emailHelp" className="form-text">Please do not include any website link Otherwise we could not be able to receive your request</div>
                                  </div>
                                  <div className="mb-3 d-flex gap-2   form-check ">
                                    <input type="checkbox" style={{width:'20px', height:'20px'}} className="form-check-input mr-2" id="ccdcheck" />
                                    <label style={{fontSize:'10px', marginTop:'6px'}} className="form-check-label" for="ccdcheck">
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

export default PapersToken