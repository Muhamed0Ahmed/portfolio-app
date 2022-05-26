import "./Contact.scss";

import React, { useState } from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";
// import { PrivateKey, PublicKey, ServiceID, TemplateID } from "../../Assest/config";
// import axios from "axios";

const Contact = () => {
  //  const contactStr and contactArr for animation tittle Contact
  const contactStr = "Contact  Me";
  const contactArr = contactStr.split("");

  //  use state for name , email , subject and message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const hundleChangeInput = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "subject") {
      setSubject(e.target.value);
    } else if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };
  const submitEmail = (e) => {
    e.preventDefault();

  };
  return (
    <div className="contact-page">
      <div className="container">
        <div className="content">
          <h1>
            <AnimatedLetters
              lettersClass={"text-animate"}
              strArray={contactArr}
              idx={1}
            />
          </h1>

          <form onSubmit={submitEmail}>
          <input type="hidden" name="contact_number"/>
            <div className="form-control">
              <label htmlFor="name"> Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={hundleChangeInput}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email"> Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={hundleChangeInput}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="subject"> Subject</label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={hundleChangeInput}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message"> Message</label>
              <textarea
                id="message"
                type="text"
                value={message}
                onChange={hundleChangeInput}
                required
              />
            </div>

            <div className="">
              <button >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
