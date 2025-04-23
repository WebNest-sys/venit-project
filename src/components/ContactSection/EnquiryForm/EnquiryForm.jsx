import React, { useState } from "react";
import "./EnquiryForm.css";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    //Log to send data via mail comes here
  };

  return (
    <>
      <div class="inputSideWrapper">
        <div class="inputWrapper">
          <p>Name</p>
          <input class="input" type="text" placeholder="Name" />
        </div>
        <div class="inputWrapper">
          <p>Email</p>
          <input class="input" type="email" placeholder="Enter your email address" />
        </div>
        <div class="inputWrapper">
          <p>Phone</p>
          <input class="input" type="number" placeholder="Phone Number" />
        </div>
        <div class="inputWrapper">
          <p>Message</p>
          <textarea class="messageInput" placeholder="Write your message" />
        </div>
        <input class="button" type="submit" onClick={handleSubmit} value="Send Message" />
      </div>
    </>
  );
}

export default EnquiryForm;
