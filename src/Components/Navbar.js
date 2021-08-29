import React,{useState} from 'react'
import '../App.css'
import ReorderIcon from "@material-ui/icons/Reorder"


function Navbar() {

    const [show_names,setshow_names] = useState(false)


    return (
        <>
        
        
 <div className="Navbar">

    <div className="logo_div">
        <p>logo</p> 
    </div>


        <div className="navbar_carrier">
            <div className="navbar_carrier_names" id={show_names ? "names_hidden" : ""}>
                <a href="#">Banang</a>
                <a href="#">Tucal</a>
                <a href="#">Vince</a>
            </div>
            <button onClick={()=> setshow_names(!show_names)}><ReorderIcon/></button>
        </div>    

</div>
        </>
    )
}

export default Navbar

//wala pako kabutang ug logo