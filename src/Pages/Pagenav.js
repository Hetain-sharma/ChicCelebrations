import "../CSS/PageNav.css"; // Import the CSS file
import { NavLink } from "react-router-dom";
export default function PageNav() {
  return (
    <nav className="NavBar">
      <h4>
        <NavLink to="/"> Chic Celebrations  </NavLink>
      </h4>
      <ul>
        <li>
          <NavLink to="/makeUp"> MakeUp</NavLink>
        </li>
        <li>
          <NavLink to="/coreography"> Coreography </NavLink>
        </li>
        <li>
          <NavLink to="/costume"> costume </NavLink>
        </li>
        <li>
          <NavLink to="/contactus"> Contact Us </NavLink>
        </li>
        <li>
          <NavLink to="/login"> Login </NavLink>
        </li>
      </ul>
    </nav>
  );
}
