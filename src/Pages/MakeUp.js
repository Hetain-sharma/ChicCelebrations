import PageNav from "./Pagenav";
import "../CSS/makeup.css";
import Footer from "./footer"
import makeup from "./Makeup.jpeg";
import makeup1 from "./Makeup1.jpeg";
import makeup2 from "./make-up.webp";
import { NavLink } from "react-router-dom";
export default function MakeUp() {
  return (
    <div>
      <PageNav />
      <div className="head-para">
        <p className="makeup-paragraph">
          Step into your perfect day with flawless elegance and grace, courtesy
          of our skilled wedding makeup artists at Chic Celebrations. From the
          delicate touch of a blush to the artistry of a smoky eye, we
          specialize in creating stunning bridal looks that reflect your unique
          style and personality. Imagine yourself walking down the aisle,
          exuding confidence with every step, knowing that our team has crafted
          a look that enhances your natural beauty. Embrace the magic of your
          wedding day with us. Book your appointment now and let us bring your
          bridal vision to life, because your beauty deserves to be celebrated
        </p>
      </div>
      <div className="slide-bar">
        <div class="mySlides fade">
          <NavLink>
            <img src={makeup} alt="makeup" className="makeup-image" />
            <p className="makeup-paragraph">Bridal Looks</p>
          </NavLink>
        </div>
        <div class="mySlides fade">
          <NavLink>
            <img src={makeup1} alt="makeup" className="makeup-image" />
            <p className="makeup-paragraph"> Special Events</p>
          </NavLink>
        </div>
        <div class="mySlides fade">
          <NavLink>
            <img src={makeup2} alt="makeup" className="makeup-image" />
            <p className="makeup-paragraph">Friends of Bride</p>
          </NavLink>
        </div>
      </div>
      <div className="appointment">
       <p className="makeup-paragraph"> Book Your Appointment Now </p>
       <button className="btn-1">Book</button>
      </div>
      <Footer />
    </div>
  );
}
