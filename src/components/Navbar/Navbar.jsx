import { Link, NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li className=" font-josefin font-semibold text-lg"><NavLink to="/">Home</NavLink></li>
        <li className=" font-josefin font-semibold text-lg"><NavLink to="/package">Packages</NavLink></li>
        <li className=" font-josefin font-semibold text-lg"><NavLink to="/contact">contact</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-[#D9C6BF] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className=" font-lobstar font-semibold text-xl">
                        Wedding <span className="text-[#b35182]">Planer</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLinks
                        }
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-circle avatar mr-3 border ">
                        <div>
                            <FaUser></FaUser>
                        </div>
                    </label>
                   
                    {
                        user ? <button onClick={handleLogOut} className="btn">Sign Out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }


                </div>

            </div>
        </div>
    );
};

export default Navbar;