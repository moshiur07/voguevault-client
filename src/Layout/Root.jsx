import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className='font-teacher max-w-screen-xl mx-auto p-5 md:p-10'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;