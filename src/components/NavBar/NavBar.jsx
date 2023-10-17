import { NavLink } from "react-router-dom";
import { FaUser } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


const NavBar = () => {

    const {user,logOut} = useContext(AuthContext);

    // console.log(user.photoURL);

    const handleOut = () =>{
        logOut()
        .then()
        .catch()
    }
    const nav = <>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold border-b-2 " : "btn rounded-none bg-transparent hover:bg-red-800 hover:text-white"
  }
>
  Home
</NavLink>
<NavLink
  to="/addCart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold border-b-2" : "btn rounded-none bg-transparent hover:bg-red-800 text-black hover:text-white"
  }
>
  Add Cart
</NavLink>
<NavLink
  to="/myCart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold border-b-2" : "btn rounded-none bg-transparent hover:bg-red-800 text-black hover:text-white"
  }
>
  MyCart
</NavLink>


<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn rounded-none bg-red-800 hover:bg-red-800 text-white font-semibold border-b-2" : "btn rounded-none bg-transparent hover:bg-red-800 text-black hover:text-white"
  }
>
  Login
</NavLink>


    </>


    return (
        <div className=" container mx-auto">
            
            <div className="navbar bg-base-100 w-full h-20">
            
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-5xl font-black"><img className=" md:w-44 w-32" src="https://i.ibb.co/GHVKhQz/Screenshot-2023-10-17-200415.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-2">
      {nav}
    </ul>
  </div>
  {
    user && <div className=" ml-[10%] flex justify-center items-center gap-6">
    <div>
        <h2>{
            user?.displayName? user.displayName : user.email
            }</h2>
    </div>
    <div className="  dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user.photoURL ? <img src={user.photoURL} alt="" /> : <FaUser className=" text-4xl font-bold"></FaUser>}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
        <li onClick={handleOut}><a>Logout</a></li>
      </ul>
    </div>
  </div>
    
  }
  </div>
</div>
    );
};

export default NavBar;