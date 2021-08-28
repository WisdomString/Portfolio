import './App.css';
import One from './One';
import Two from './Two';
import OneH from './OneH';



function App() {
  return (
  <>
    <div><One></One></div> 
    <div><OneH></OneH></div>
    <div><Two></Two></div>
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