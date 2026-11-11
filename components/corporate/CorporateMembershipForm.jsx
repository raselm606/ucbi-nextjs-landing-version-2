"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Select from "react-select";
import { HiUsers } from "react-icons/hi";
import { FaRegCommentDots, FaRegPaperPlane, FaRegUser } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdLocalPhone } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import countriesData from "@/lib/mock-data/countriesData";
import styles from "./CorporateMembershipForm.module.css";

const subjects = [
  { value: "membership application", label: "Membership application" },
  { value: "request for information", label: "Request for information" },
  { value: "partnership request", label: "Partnership request" },
  { value: "Token launch support", label: "Token launch support" },
];

const initialForm = { name: "", surname: "", email: "", country: "", phoneCode: "", phone: "", subject: "", comments: "" };

export default function CorporateMembershipForm() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => setMounted(true), []);

  const countries = countriesData.map((country) => ({ value: country.countryNameEn, label: country.countryNameEn }));
  const callingCodes = countriesData.map((country) => ({ value: `+${country.countryCallingCode}`, label: `${country.countryCode} (+${country.countryCallingCode})` }));
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const updateSelect = (key) => (selected) => setForm((current) => ({ ...current, [key]: selected?.value || "" }));

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("https://api.ucbibanking.io/api/ucbi_contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, phone: `${form.phoneCode}${form.phone}` }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result?.msg || "Failed. Please check the form and try again.");
      setStatus("success");
      setMessage(result.msg || "Your request has been submitted.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const selectProps = { className: "corporate-select", classNamePrefix: "corporate-select", isSearchable: true, isClearable: true };

  if (!mounted) return null;

  return createPortal((
    <div className={`${styles.modal} modal fade`} id="corporate-membership-modal" tabIndex="-1" aria-labelledby="corporate-membership-title" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className={`modal-content ${styles.modalContent}`}>
          <div className={styles.card}>
            <button className={`btn-close ${styles.close}`} type="button" data-bs-dismiss="modal" aria-label="Close" />
            <div className={styles.heading}>
              <span className={styles.headingIcon}><HiUsers aria-hidden="true" /></span>
              <div>
                <span className={styles.kicker}>MEMBERSHIP APPLICATION</span>
                <h2 id="corporate-membership-title">Become a Member of<br /><span>UCBI Group Technologies</span></h2>
                <p>Join our exclusive network and be part of a global technology ecosystem driving innovation and growth.</p>
              </div>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              {message && <p className={`${styles.message} ${status === "success" ? styles.success : styles.error}`} role="status">{message}</p>}
              <div className={styles.fields}>
                <label className={styles.field}>Name <b>*</b><span className={styles.inputWrap}><FaRegUser /><input name="name" autoComplete="given-name" value={form.name} onChange={update} required /></span></label>
                <label className={styles.field}>Surname <b>*</b><span className={styles.inputWrap}><FaRegUser /><input name="surname" autoComplete="family-name" value={form.surname} onChange={update} required /></span></label>
                <label className={styles.field}>Email address <b>*</b><span className={styles.inputWrap}><HiOutlineEnvelope /><input type="email" name="email" autoComplete="email" value={form.email} onChange={update} required /></span><small>We will never share your email with anyone else</small></label>
                <label className={styles.field}>Country <b>*</b><span className={styles.selectWrap}><FiGlobe /><Select {...selectProps} options={countries} placeholder="Search country..." value={countries.find((option) => option.value === form.country) || null} onChange={updateSelect("country")} /></span></label>
                <label className={styles.field}>Phone <b>*</b><span className={styles.phoneWrap}><span className={styles.selectWrap}><MdLocalPhone /><Select {...selectProps} options={callingCodes} placeholder="Country code..." value={callingCodes.find((option) => option.value === form.phoneCode) || null} onChange={updateSelect("phoneCode")} /></span><input type="tel" name="phone" autoComplete="tel-national" placeholder="Enter phone number" value={form.phone} onChange={update} required /></span><small>We will never share your phone with anyone else</small></label>
                <label className={styles.field}>Subject <b>*</b><span className={styles.selectWrap}><CgNotes /><Select {...selectProps} options={subjects} placeholder="Select a subject..." value={subjects.find((option) => option.value === form.subject) || null} onChange={updateSelect("subject")} /></span></label>
              </div>
              <label className={`${styles.field} ${styles.messageField}`}>Your Message <b>*</b><span className={`${styles.inputWrap} ${styles.textareaWrap}`}><FaRegCommentDots /><textarea name="comments" rows="3" value={form.comments} onChange={update} required /></span><small>Please do not include any website link; otherwise we may not be able to receive your request.</small></label>
              <label className={styles.terms}><input type="checkbox" required /><span>I agree to UCBI Group Technologies LTD <Link href="https://doc.ucbibanking.io/ucbi_terms_condition" target="_blank">Terms and Conditions</Link></span></label>
              <button className={styles.submit} disabled={loading} type="submit"><FaRegPaperPlane aria-hidden="true" />{loading ? "Sending..." : "Submit Request"}</button>
              <p className={styles.security}><IoShieldCheckmarkSharp aria-hidden="true" />Your information is secure and will be used to respond to your request</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  ), document.body);
}
