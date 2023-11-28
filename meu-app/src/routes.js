import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atividade01 from "./Atividade01/Atividade01";
import Atividade02 from "./Atividade02/Atividade02";
import Atividade03 from "./Atividade03/Atividade03";
import Atividade04 from "./Atividade04/Atividade04";
import Atividade05 from "./Atividade05/Atividade05";


export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Atividade01" element={<Atividade01/>}/>
                <Route path="/Atividade02" element={<Atividade02/>}/>
                <Route path="/Atividade03" element={<Atividade03/>}/>
                <Route path="/Atividade04" element={<Atividade04/>}/>
                <Route path="/Atividade05" element={<Atividade05/>}/>
            </Routes>
        </BrowserRouter>
    );
}