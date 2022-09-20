import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";
import "../css/contactPage.css";
export function Contact() {
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  const toastifyFail = () => {
    toast("Form failed to send.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
      toastId: "notifyToast",
    });
  };
  var [data, setData] = useState({ name: "", email: "", message: "" });
  const onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = data;
    if (name === "" || email === "" || message === "") {
      toastifyFail();
      return;
    }

    try {
      const templateParams = {
        name,
        email,
        message,
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      // emailjs.reset();
      setData({ name: "", email: "", message: "" });
      toastifySuccess();
    } catch (e) {
      console.log(e);
      toastifyFail();
    }
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="contactpage">
      <h1>contact</h1>
      <form className="formgroup">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Ex: John"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="john@email.com"
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          placeholder="Your message"
          onChange={handleChange}
        />
        <br />
        <button type="submit" onClick={onSubmit}>
          Send
        </button>
      </form>
      <ToastContainer />
      <ul className="media">
        <a href="https://github.com/YuvarajSingh-0">
          <li>
            <img src={require("../img/github.png")} alt="" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/yuvarajsingh">
          <li>
            <img src={require("../img/linkedin.png")} alt="" />
          </li>
        </a>
        <a href="mailto:yuvarajsingh170@gmail.com">
          <li>
            <img src={require("../img/gmail.png")} alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
}
