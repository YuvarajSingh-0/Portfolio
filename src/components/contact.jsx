import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";
export function Contact() {
  const toastifySuccess = () => {
    toast.success("Form sent!", {
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
      className: "toast-message",
      toastId: "notifyToast",
    });
  };
  const mobileToastifySuccess = () => {
    toast.success("Form sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      toastId: "notifyToast",
    });
  };
  const mobileToastifyFail = () => {
    toast.error("Form failed to send.", {
      position: "top-center",
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
      if (window.innerWidth < 768) {
        mobileToastifyFail();
        return;
      } else {
        toastifyFail();
        return;
      }
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
      setData({ name: "", email: "", message: "" });
      if (window.innerWidth < 768) {
        mobileToastifySuccess();
        return;
      } else {
        toastifySuccess();
      }
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
      <h1>Contact</h1>
      <form className="formgroup" data-aos="green_flicker">
        <input
          data-aos="green_flicker"
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {/* <label htmlFor="name">Name</label> */}

        <input
          data-aos="green_flicker"
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        {/* <label htmlFor="email">Email</label> */}

        <textarea
          data-aos="green_flicker"
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="Message"
        />
        {/* <label htmlFor="message">Message</label> */}
        <br />
        <button type="submit" onClick={onSubmit}>
          Send
        </button>
      </form>

      <ToastContainer />
      <ul className="media">
        <a href="https://github.com/YuvarajSingh-0">
          <li data-aos="green_flicker">
            <img src={require("../img/github.png")} alt="" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/yuvarajsingh">
          <li data-aos="green_flicker">
            <img src={require("../img/linkedin.png")} alt="" />
          </li>
        </a>
        <a href="mailto:yuvarajsingh170@gmail.com">
          <li data-aos="green_flicker">
            <img src={require("../img/gmail.png")} alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
}
