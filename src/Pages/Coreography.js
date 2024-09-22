import PageNav from "./Pagenav";
import "../CSS/coreography.css";
import danceimg from "../Pages/performance.jpeg";
import danceimg1 from "../Pages/Indian-Dance.jpeg";
import danceimg2 from "../Pages/couple-dance.jpg";
import { NavLink } from "react-router-dom";
export default function Coreography() {
  return (
    <div>
      <PageNav />
      <div className="head">
        <div className="box1">
          <NavLink>
            <img src={danceimg1} alt="dance" className="box-img" />
            <p className="box-para">Special Events</p>
          </NavLink>
        </div>
        <div className="box1">
          <NavLink>
            <img src={danceimg} alt="dance" className="box-img" />
            <p className="box-para">Stage performance</p>
          </NavLink>
        </div>
        <div className="box1">
          <NavLink>
            <img src={danceimg2} alt="dance" className="box-img" />
            <p className="box-para">Couple Dance</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
