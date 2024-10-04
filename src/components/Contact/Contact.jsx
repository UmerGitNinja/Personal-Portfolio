import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Footer } from "../../containers";
import "./Contact.css";

function Contact({ swiperslidIndex }) {
  const form = useRef();
  const [toggle, settoggle] = useState(false);
  const [disabled, setdisabled] = useState("Send Message");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nozoddl",
        "template_1nocye6",
        form.current,
        "0jwrpgSgu-YIW4-Iw",
        settoggle(true),
        setdisabled("Sending")

      )
      .then(
        () => {
          setTimeout(() => {
            settoggle(false);
          }, 500);
          setdisabled("Send Message");
        },
        (error) => {
          console.log(error.text);
        }
      )
  };


  return (
    <div className={`section section Contact ${swiperslidIndex === 4 ? "animate__slideOutUp" : "animate__slideOutDown"}`} id="Contact">
      <div className={"toast-msg"} style={toggle ? {display: "block"} : {scale: 0}}>
        <svg className={`checkmark`} style={toggle ? { animation: "fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both" } : {}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" style={toggle ? { animation: "stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards" } : {}} cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" style={toggle ? {animation: "stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards"} : {}} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
      <div className="Contact__content-area">
        <div className="Contact__text-area">
          <h1>
            Contact<span>.</span>
          </h1>
          <p>
            Get in touch or shoot me an email directly on
            <b> umerdbz2k@gmail.com</b>
          </p>
        </div>
        <form className="Contact__form" ref={form} onSubmit={sendEmail}>
          <input
            autoComplete="true"
            type="text"
            placeholder="Name"
            name="user_name"
            id="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            id="Email"
            autoComplete="true"
            required
            pattern="^(?!umerdbz2k@gmail\.com$).*$"
            title="Please enter your own email"
          />
          <textarea
            name="message"
            placeholder="Message"
            id=""
            cols="30"
            required
          ></textarea>
          <button className="Contact__form-btn btn-special" type="submit" disabled={toggle}>
            {disabled}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
