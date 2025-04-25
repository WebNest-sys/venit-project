import React, { useState , useRef} from "react";
import "./EnquiryForm.css";
import emailjs from '@emailjs/browser';

const EnquiryForm = () => {

  const form = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) formErrors.phone = 'Phone Number is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      emailjs
      .sendForm(import.meta.env.VITE_REACT_APP_SERVICE_ID, import.meta.env.VITE_REACT_APP_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_REACT_APP_PUBLIC_KEY, 
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form ref={form} class="form-style" onSubmit={handleSubmit}> 
    <div class="inputSideWrapper">
      <div class="inputWrapper">
        <label htmlFor="name">Name*:</label>
        <input class="input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span class="error-style">{errors.name}</span>}
      </div>
      <div class="inputWrapper">
        <label htmlFor="email">Email*:</label>
        <input class="input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span class="error-style">{errors.email}</span>}
      </div>
      <div class="inputWrapper">
        <label htmlFor="phone">Phone Number*:</label>
        <input class="input"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <span class="error-style">{errors.phone}</span>}
      </div>
      <div class="inputWrapper">
        <label htmlFor="message">Message*:</label>
        <textarea class="messageInput" 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {errors.message && <span class="error-style">{errors.message}</span>}
      </div>
      <button class="button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default EnquiryForm;
