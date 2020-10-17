import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './tugas15.css'


function Snippets(){  
    const [darkTheme, setDarkTheme] = React.useState(true)
    
    return(
        <>
            <div align = "center">
                <br/>
                <button>
                    <a href="#" style={{"text-decoration": "none", color: "white"}}>Dark</a>
                </button>
                <br/>
                <button>
                    <a href="#" style={{"text-decoration": "none", color: "black"}}>Light</a>
                </button>
            </div>
        </>
    )
    
}

export default Snippets
