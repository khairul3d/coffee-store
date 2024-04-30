import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className=" ml-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/coffee">Coffee</NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/user">User</NavLink>
        </div>
    );
};

export default Header;