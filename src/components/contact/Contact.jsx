import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {IoLogoTwitter} from 'react-icons/io'
import {FaFacebookMessenger} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_75fiyko', 'template_fr496fi', form.current, 'grPF7WVoKagMMEZVr')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
      }, (error) => {
          console.log(error.text);
      }).then(
              message =>alert('Message Sent')
      );

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className='contact__option-icon' color='#f44336'/>
            <h4>Email</h4>
            {/* <h5>Aniketmishra492@gmail.com</h5> */}
            <a href="mailto:aniketmishra492@gmail.com" target="_blank" >Send a massage</a>
          </article>

          <article className="contact__option">
            <IoLogoTwitter className='contact__option-icon' color='#00b0ff'/>
            <h4>Twitter</h4>
            {/* <h5>Aniketmishra0</h5> */}
            <a href="https://twitter.com/aniketmishra0?ref_src=twsrc%5Etfw" target="_blank" class="twitter-follow-button" data-show-count="false">Follow on Twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8" ></script>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon' color='#00b0ff'/>
            <h4>Facebook</h4>
            {/* <h5>Aniket Mishra</h5> */}
            <a href="https://m.me/ankm2656" target="_blank">Send a massage</a>
          </article>
            
        </div>
        {/* ===========End of Contact option ============== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-1'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact 