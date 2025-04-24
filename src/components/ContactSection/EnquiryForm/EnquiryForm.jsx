import React, { useState , useRef} from "react";
import "./EnquiryForm.css";
import emailjs from '@emailjs/browser';

// function EnquiryForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//     //Log to send data via mail comes here
//   };

//   return (
//     <>
//       <div class="inputSideWrapper">
//         <div class="inputWrapper">
//           <p>Name</p>
//           <input class="input" type="text" placeholder="Name" />
//         </div>
//         <div class="inputWrapper">
//           <p>Email</p>
//           <input class="input" type="email" placeholder="Enter your email address" />
//         </div>
//         <div class="inputWrapper">
//           <p>Phone</p>
//           <input class="input" type="number" placeholder="Phone Number" />
//         </div>
//         <div class="inputWrapper">
//           <p>Message</p>
//           <textarea class="messageInput" placeholder="Write your message" />
//         </div>
//         <input class="button" type="submit" onClick={handleSubmit} value="Send Message" />
//       </div>
//     </>
//   );
// }

const EnquiryForm = () => {

  const form = useRef();

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
      .sendForm('service_l186b25', 'template_1aj5t9g', form.current, {
        publicKey: 'Mps-TrExuPpqHrRD2', 
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      // emailjs.send(
      //   'service_l186b25',
      //   'template_1aj5t9g',
      //   formData,
      //   'dC5ENmeBSzJBbPVCY'
      // ).then((response) => {
      //   console.log('SUCCESS!', response.status, response.text);
      // }).catch((err) => {
      //   console.error('FAILED...', err);
      // });
      // Handle form submission (e.g., send data to server)
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
