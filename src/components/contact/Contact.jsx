import { useContext, useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import './contact.css';
import { ThemeContext } from './../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_846k7ox',
        'template_45pxqv5',
        formRef.current,
        'L4f7YcdW_2gDXHvey'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="./img/phone.png" alt="" className="c-icon" />
              +98 937 1700 671
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="./img/email.png" alt="" />
              Muhammad.ufo.313@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="./img/address.png" alt="" />
              Iran , Mashhad
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://www.pinclipart.com/picdir/big/157-1577892_learn-more-instagram-logo-2018-transparent-background-clipart.png"
                alt=""
              />
              Muhammad_ufo
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://logos-world.net/wp-content/uploads/2021/03/Telegram-Logo.png"
                alt=""
              />
              Mhmd_ufo
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://www.mhe-sme.org/wp-content/uploads/2017/12/linkedin-icon.png"
                alt=""
              />
              <a href="www.linkedin.com/in/muhammad-zanganeh-bb217a230">
                muhammad zanganeh
              </a>
            </div>
            <div className="c-info-item">
              <img
                className="c-icon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
              <a href="https://github.com/mohammadufo">mohammadufo</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="btn">Submit</button>
            {done && <p className="tnx"> So ! many Thanks ^_^</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
