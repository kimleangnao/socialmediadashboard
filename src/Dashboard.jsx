import { useState } from "react";
import Panel from "./components/Panel";
import Update from "./components/Update";
import Login from "./components/Login";
import Signup from "./components/Singup";



const Dashboard = () => {
    const [ display, setdisplay ] = useState("profile");

    return(
        <div className="dashboard"> 
            <div className="dashboard_left">
                {
                    display == "profile" ? (
                        <Panel imageProfile={"https://placehold.co/200x200"} />
                    ) : display == "login" ?  (
                        <Login />
                    ) : <Signup />
                }
               
         
            </div>
            <div className="dashboard_right">
                <Update />
            </div>
       
        </div>
    )
}

export default Dashboard;