import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./Pages/Login"
import ContactUs from "./Pages/ContactUs"
import Coreography from "./Pages/Coreography"
import HomePage from "./Pages/HomePage"
import MakeUp from "./Pages/MakeUp"
import Costume from "./Pages/costume"
export default function App(){
  return <div>
    <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<HomePage />} />
      <Route path = "login" element = {<Login />} />
      <Route path = "contactus" element={<ContactUs />} />
      <Route path = "coreography" element={<Coreography />}/>
      <Route path = "makeUp" element={<MakeUp/>} />
      <Route path = "costume" element = {<Costume />} />
    </Routes>
    </BrowserRouter>
  </div>
}
