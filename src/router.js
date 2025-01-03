import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";


function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;