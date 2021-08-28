import './App.css';
import One_div from './One_div';
import Two_div from './Two_div';
import Three_div from './Three_div';



function App() {
  return (
  <>
    <div class='header_main' name='header_main'>
      <h1 class='header_main_names' name='header_main_names'>
          <p class='header_main_names_Vince' name='header_main_names_Vince'>Vince</p> 
          <p class='header_main_names_Banang' name='header_main_names_Banang'>Banang</p>
          <p class='header_main_names_Tucal'  name='header_main_names_Tucal'>Tucal</p>
      </h1>
    </div>
    <div><One_div></One_div></div>
    <div><Two_div></Two_div></div>
    <div><Three_div></Three_div></div>
  </>
    )
}

export default App;

//ang "<One>" na gitago nako sa div kay mao na ang One.js
//ang "<Two>" mao ni ang "2nd test" 
//kung i edit ninyo ang css sa "<div>" tags, pwede ra ninyo buhaton sa App.css pero paki butang lang ug classname 
// example:     <div className="tucal"> <One></One> </div>  
// tapos i call ra ninyo ang className="Tucal" sa App.css
//pwede man pud mo mag-dungag/import ug ubang CSS maliban sa App.css , depende sa inyo ..