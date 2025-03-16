import React, { useState } from 'react';
import Title from "../UITemplates/Title/Title";
import AddressDetailsBar from './AddressDetailsBar';
import './ContactSection.css';
import EnquiryForm from './EnquiryForm/EnquiryForm';

function ContactSection() {

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
        <div className="container">
          <Title subTitle="Get in touch" title="COTACT" />
             <div class='container-items'>
                <AddressDetailsBar/>
                <EnquiryForm/>
            </div>
        </div>
      </>
    )
}

export default ContactSection


