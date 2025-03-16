import React, { useState } from "react";
import './EnquiryForm.css';

function EnquiryForm() {

    const [formData, setFormData] = useState({
        name: '', email: '', message : ''
    });

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Log to send data via mail comes here
    }

    return (
      <>
        <div class="inputSideWrapper">
            <div class="inputWrapper">
                <p>Name</p>
                <div class="input" type="text" placeholder="Allen Jones" />
            </div>
            <div class="inputWrapper">
                <p>Email</p>
                <div class="input" type="email" placeholder="aljay126@gmail.com" />
            </div>
            <div class="inputWrapper">
                <p>Phone</p>
                <div class="input" type="number" placeholder="+233546227893" />
            </div>
            <div class="inputWrapper">
                <p>Message</p>
                <div class="messageInput" placeholder="Write your message" />
            </div>
            <div class="button" type="submit" value="Send Message" />
        </div>
      </>
    )
}

export default EnquiryForm