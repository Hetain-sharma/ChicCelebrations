import { useState } from "react";
import PageNav from "./Pagenav";
import "../CSS/login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isform, setIsform] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setShow(true);
    setIsform(false);
    console.log(email, password);
  }
  return (
    <div>
      <PageNav />
      <div className="form-container">
        {isform && (
          <div className="form">
            <form onSubmit={handleSubmit} method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
              />
              <input type="submit" value="Login" className="input-field btn"/>
            </form>
          </div>
        )}
      </div>
      {show && <Hello />}
    </div>
  );
}
function Hello() {
  return (
    <div>
      <h1 className="thank-you">Thank You</h1>
    </div>
  );
}

/* <form action="/submit-your-login-form" method="post" >
<input type="email" id="email" name="email" placeholder="Email" required />
<input type="password" id="password" name="password" placeholder="Password" required /> 
<input type="submit" value="Login" />
</form> */

/* <form>
<input
  type="email"
  id="email"
  name="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
<input
  type="password"
  placeholder=" Enter password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>
<button type="submit" onClick={handleSubmit}>
  Login
</button>
</form> */
