import React from 'react'
import { Container, Wrapper,Title,Desc,ContactForm,ContactTitle,ContactInput,ContactInputMessage,ContactButton } from './ContactStyle';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a801871c-519e-433d-ad72-e25ddd8492eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div>
      <Container id='contact'>
         <Wrapper>
         <Title>Contact</Title>
         <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>

         <ContactForm onSubmit={onSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
         </Wrapper>
      </Container>
      
    </div>
  )
}

export default Contact
