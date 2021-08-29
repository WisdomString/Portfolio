import './App.css';
import One_div from './One_div';
import Two_div from './Two_div';
import Three_div from './Three_div';
import Navbar from './Components/Navbar';


function App() {
  return (
  <>
  <div><Navbar></Navbar></div>
    <div><One_div></One_div></div>
    <div><Two_div></Two_div></div>
    <div><Three_div></Three_div></div>
  </>
    )
}

export default App;

//ang "<One_div>" na gitago nako sa div kay mao na ang One_div.js
//ang "<Two_div>" mao ni ang "2nd div tagt" 
//kung i edit ninyo ang css sa "<div>" tags, pwede ra ninyo buhaton sa App.css pero paki butang lang ug classname 
// example:     <div class="header_main_names_Tucal"> <One_div></One_div> </div>  
// tapos i call ra ninyo ang class="header_main_names_Tucal" sa App.css
//pwede man pud mo mag-dungag/import ug ubang CSS maliban sa App.css , depende sa inyo ..