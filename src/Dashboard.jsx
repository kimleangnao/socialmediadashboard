import Panel from "./components/Panel";
import Update from "./components/Update";



const Dashboard = () => {
    return(
        <div className="dashboard"> 
            <div className="dashboard_left">
                <Panel />
         
            </div>
            <div className="dashboard_right">
                <Update />
            </div>
       
        </div>
    )
}

export default Dashboard;