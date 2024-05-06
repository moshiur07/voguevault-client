import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";


const Navbar = () => {
    const navLinks = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 underline font-medium text-xl"
                : isPending
                    ? "pending"
                    : ""
        } to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 underline font-medium text-xl"
                : isPending
                    ? "pending"
                    : ""
        } to='/add'>Add</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "text-orange-400 underline font-medium text-xl"
                : isPending
                    ? "pending"
                    : ""
        } to='/cart'>MyCart</NavLink></li>
    </>
    return (
        <div className="navbar bg-gradient-to-r from-[#4e6a57] to-[#639566]  rounded-md shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/'><img className='w-[200px] h-[60px] py-0 my-0' src="https://i.ibb.co/qWcv6Pw/download-removebg-preview.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" space-x-4 menu-horizontal px-1 items-center text-gray-300">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3 text-gray-300">
                <span><FaRegCircleUser className="text-3xl " /></span>
                <button className="flex items-center gap-1"><span className="hidden md:flex">Logout</span><HiOutlineLogout className="text-xl" /></button>
            </div>
        </div>
    );
};

export default Navbar;