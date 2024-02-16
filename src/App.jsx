import {createRoot} from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";


const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

let container = document.querySelector("#root");
let root = createRoot(container);
root.render(<App />)