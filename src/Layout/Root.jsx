import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className='font-teacher'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;