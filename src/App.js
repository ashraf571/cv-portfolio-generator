import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./login";
import SignUp from "./signup";
import Landingpage from "./landingpage";
import Demi from './cvDemi'
import Portfolio from './portfolio'
import Demi2 from './cvDummy2'
import About from "./aboutus";
import Contact from './contactus'
import PersonalInformation from "./PersonalInformation";
import EducationInformation from "./EducationInformation";
import WorkExperience from "./WorkExperience";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/cvDemi" element={<Demi />} />
          <Route path="/login"  element={<LogIn />} /> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/cvDummy2" element={<Demi2 />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path = "/PersonalInformation" element = {<PersonalInformation />} />
          <Route path = "/EducationInformation" element = {<EducationInformation />} />
          <Route path = "/WorkExperience" element = {<WorkExperience />} /> 
      </Routes>
    </BrowserRouter>
  );
}