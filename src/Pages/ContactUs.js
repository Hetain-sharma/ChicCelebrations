import { useState } from "react";
import PageNav from "./Pagenav";
import "../CSS/contactus.css";


export default function ContactUs() {
  const [form, setForm] = useState(false);
  function handleClick() {
    setForm(true);
  }
  return (
    <div>
      <PageNav />
      <div className="contact-div">
        <p className="para">Call us on : 931000965</p>
        <p className="para"> Email Us : hetainsharma88@gmail.com</p>
        <p className="para"> Whatsapp us on : 9310009551</p>
        <p className="para">
          {" "}
          we are currently Available In : Delhi , Mumbai , Noida, Gurugram ,
          Pune{" "}
        </p>
        <p className="para">
          {" "}
          --- Our Mission is ensure every clebration is not just memorable, but
          truly exceptional ---
        </p>
        <p className="para">
          --- Chic Celebrations : where weddings become extraordinary ---
        </p>
        {!form ? (
          <button className="info-para" onClick={handleClick}>
            Please give us your details to contact you
          </button>
        ) : (
          <Details setForm ={setForm}/>
        )}
      </div>
    </div>
  );
}


function Details({setForm}) {
  const [email, setEmail] = useState("");
  const [contact,setContact] = useState("")
  const [city,setCity] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    console.log(email,contact,city)
    setEmail("")
    setCity("")
    setContact("")
    setForm(false)
  }
  return (
    <div className="form-div">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="Contact no."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="submit"
          placeholder="Submit"
          className="form-input"
        />
        

      </form>
    </div>
  );
}
